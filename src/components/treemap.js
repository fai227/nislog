import Chart from "react-apexcharts";
import Consistants from "../consistants";

let minTotalStayTime = 10000;
let maxTotalStayTime = 0;

function sumStayTime(stayLab) {
  let totalStayTime = 0;

  Object.keys(stayLab).map((date) => {
    totalStayTime += stayLab[date]["stayTime"] ? Math.round(stayLab[date]["stayTime"] / 360) / 10 : 0;
  });

  minTotalStayTime = Math.min(minTotalStayTime, totalStayTime);
  maxTotalStayTime = Math.max(maxTotalStayTime, totalStayTime);

  return totalStayTime;
}

export default function Treemap({ data }) {
  const series = [{ data: [] }];
  const options = {
    plotOptions: { treemap: { colorScale: { ranges: [{ from: 0, to: 0, color: Consistants.base_color }] } } },
    chart: { toolbar: { show: false } },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: "600px",
          },
        },
      },
    ],
  };

  series[0].data = data.map((student) => {
    return { x: student.name, y: Math.round(sumStayTime(student.stayLab) * 10) / 10 };
  });

  options.plotOptions.treemap.colorScale.ranges[0].from = minTotalStayTime;
  options.plotOptions.treemap.colorScale.ranges[0].to = maxTotalStayTime;

  return (
    <div className="p-1 mx-1 lg:p-2 lg:mx-2 my-6 bg-white">
      <p className="text-center mt-4">Treemap（累計在室時間）</p>
      <Chart series={series} options={options} type="treemap" />
    </div>
  );
}
