const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: process.env.DYNAMODB_REGION,
});

// 日付フォーマット
function formatDate(date, format) {
  format = format.replace(/yyyy/g, date.getFullYear());
  format = format.replace(/MM/g, ("0" + (date.getMonth() + 1)).slice(-2));
  format = format.replace(/dd/g, ("0" + date.getDate()).slice(-2));
  format = format.replace(/HH/g, ("0" + date.getHours()).slice(-2));
  format = format.replace(/mm/g, ("0" + date.getMinutes()).slice(-2));
  format = format.replace(/ss/g, ("0" + date.getSeconds()).slice(-2));
  format = format.replace(/SSS/g, ("00" + date.getMilliseconds()).slice(-3));
  return format;
}

// handler関数
exports.handler = (event, context, callback) => {
  console.log("event:", event);

  if (event.httpMethod === "GET" && event.pathParameters.proxy === "logs") {
    if (!event.queryStringParameters) {
      resAllLogs(event.queryStringParameters, callback);
    }
  }
};

// callback関数を用いてレスポンスする関数
function resAllLogs(queryStringParameters, callback) {
  const params = { TableName: process.env.DYNAMODB_TABLE };

  dynamoDB.scan(params, function (err, data) {
    if (err) {
      console.err("Error:", err);
    } else {
      const resData = {};

      if (!queryStringParameters) {
        resData.treemap = getTreemap(data);
        resData.heatmap = getHeatmap(data);
        resData.column = getColumn(data);
      } else if (queryStringParameters.type === "treemap") {
        resData.treemap = getTreemap(data);
      } else if (queryStringParameters.type === "heatmap") {
        resData.heatmap = getHeatmap(data);
      } else if (queryStringParameters.type === "column") {
        resData.column = getColumn(data);
      }

      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
        },
        body: JSON.stringify(resData),
      };

      callback(null, response);
    }
  });
}

// treemap用にフォーマット
function getTreemap(data) {
  const items = data.Items;

  const logs = {};
  items.map((item) => {
    if (!logs[item.id]) {
      logs[item.id] = {};
      logs[item.id].x = item.j_full_name;
      logs[item.id].y = 0;
    }
    if (item.stay_duration) {
      logs[item.id].y += item.stay_duration;
    }
  });

  const options = { min: 1000000000, max: 0 };
  const logsArray = [];
  Object.keys(logs).map((key) => {
    const stay_duration = (logs[key].y / 1000 / 60 / 60).toFixed(1);
    options.min = Math.min(options.min, stay_duration);
    options.max = Math.max(options.max, stay_duration);
    logs[key].y = stay_duration;
    logsArray.push(logs[key]);
  });

  return { series: logsArray, options: options };
}

// heatmap用にフォーマット
function getHeatmap(data) {
  const DATE_DURATION = 20;
  const logs = {};
  const items = data.Items;
  const options = { min: 1000000000, max: 0 };
  items.map((item) => {
    if (!logs[item.id]) {
      logs[item.id] = {};
      logs[item.id].name = item.j_full_name;

      const datesArray = [];
      for (let i = 0; i < DATE_DURATION; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const fmtDate = formatDate(date, "yyyy-MM-dd");
        datesArray.unshift({ x: fmtDate, y: 0 });
      }
      logs[item.id].data = datesArray;
    }

    const foundDateIndex = logs[item.id].data.findIndex((date) => date.x === item.date);
    if (foundDateIndex !== -1 && item.stay_duration) {
      const stay_duration = (item.stay_duration / 1000 / 60 / 60).toFixed(1);
      options.min = Math.min(options.min, stay_duration);
      options.max = Math.max(options.max, stay_duration);
      logs[item.id]["data"][foundDateIndex]["y"] = stay_duration;
    }
  });

  const logsArray = [];
  Object.keys(logs).map((key) => {
    logsArray.unshift(logs[key]);
  });

  return { series: logsArray, options: options };
}

// column用にフォーマット
function getColumn(data) {
  const DATE_DURATION = 10;
  const datesArray = [];
  for (let i = 0; i < DATE_DURATION; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const fmtDate = formatDate(date, "yyyy-MM-dd");
    datesArray.unshift(fmtDate);
  }

  const logs = {};
  const items = data.Items;
  items.map((item) => {
    if (!logs[item.id]) {
      logs[item.id] = {};
      logs[item.id].name = item.j_full_name;
      logs[item.id].data = new Array(DATE_DURATION).fill(0);
    }

    const foundDateIndex = datesArray.findIndex((date) => date === item.date);
    if (foundDateIndex !== -1 && item.stay_duration) {
      logs[item.id]["data"][foundDateIndex] = (item.stay_duration / 1000 / 60 / 60).toFixed(1);
    }
  });

  const logsArray = [];
  Object.keys(logs).map((key) => {
    logsArray.push(logs[key]);
  });

  return { series: logsArray, categories: datesArray };
}
