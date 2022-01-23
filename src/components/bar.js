import moment from "moment";
import Chart from "react-apexcharts";
import Consistants from "../consistants";

export default function Bar({ student }) {
  const series = [{ name: student.name, data: [] }];
  const options = {
    plotOptions: { bar: { colors: { ranges: [{ from: 0, to: Consistants.bar_chart.max_hour_per_day, color: Consistants.base_color }] } } },
    chart: { toolbar: { show: false } },
    xaxis: { categories: [] },
    yaxis: { show: false, max: Consistants.bar_chart.max_hour_per_day },
  };

  for (let i = 0; i < Consistants.bar_chart.day_period; i++) {
    options.xaxis.categories.unshift(moment().utcOffset(9).subtract(i, "days").format("M/DD"));

    const date = moment().utcOffset(9).subtract(i, "days").format("YYYY-MM-DD");
    series[0].data.unshift(
      student.stayLab[date] ? (student.stayLab[date]["stayTime"] ? Math.round(student.stayLab[date]["stayTime"] / 360) / 10 : 0) : 0
    );
  }

  return (
    <div className="p-1 m-1 lg:p-2 lg:m-2 bg-white">
      <p className="text-center mt-2">{student.name}</p>
      <Chart options={options} series={series} type="bar" />
    </div>
  );
}
