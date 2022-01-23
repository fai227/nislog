import moment from "moment";
import Chart from "react-apexcharts";
import Consistants from "../consistants";

export default function Heatmap({ data }) {
  const options = {
    plotOptions: { heatmap: { colorScale: { ranges: [{ from: 0, to: 0, color: Consistants.base_color }] } } },
    chart: { toolbar: { show: false } },
    legend: { show: false },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: { height: "600px" },
          dataLabels: { enabled: false },
        },
      },
    ],
  };

  let minStayTime = 24;
  let maxStayTime = 0;

  const series = data.map((student) => {
    const data = [];

    for (let i = 0; i < Consistants.bar_chart.day_period; i++) {
      const x = moment().utcOffset(9).subtract(i, "days").format("M/DD");
      const date = moment().utcOffset(9).subtract(i, "days").format("YYYY-MM-DD");

      const day = { x: x, y: null };

      if (student.stayLab[date] && student.stayLab[date]["stayTime"]) {
        const stayTime = Math.round(student.stayLab[date]["stayTime"] / 360) / 10;

        minStayTime = Math.min(minStayTime, stayTime);
        maxStayTime = Math.max(maxStayTime, stayTime);

        day.y = stayTime;
      }

      data.unshift(day);
    }

    return { name: student.name, data: data };
  });

  options.plotOptions.heatmap.colorScale.ranges[0].from = minStayTime;
  options.plotOptions.heatmap.colorScale.ranges[0].to = maxStayTime;

  return (
    <div className="p-1 mx-1 lg:p-2 lg:mx-2 my-6 bg-white">
      <p className="text-center mt-4">Heatmap</p>
      <Chart series={series} options={options} type="heatmap" />
    </div>
  );
}
