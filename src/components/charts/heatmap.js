import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactApexChart from "react-apexcharts";

import Settings from "../../data/settings.json";

class Heatmap extends Component {
  render() {
    const items = {
      series: this.props.items.series,
      options: {
        plotOptions: {
          heatmap: {
            colorScale: {
              ranges: [
                {
                  from: this.props.items.options.min,
                  to: this.props.items.options.max,
                  color: Settings.baseColor,
                },
              ],
            },
          },
        },
        legend: { show: false },
        chart: { toolbar: { show: false } },
        responsive: [
          {
            breakpoint: 768,
            options: {
              chart: { height: "600px" },
              dataLabels: { enabled: false },
            },
          },
        ],
      },
    };

    return (
      <div className="p-1 mx-1 lg:p-2 lg:mx-2 my-6 bg-white">
        <p className="text-center mt-4">Heatmap（毎日在室時間）</p>
        <div>
          <ReactApexChart series={items.series} options={items.options} type="heatmap" />
        </div>
      </div>
    );
  }
}

Heatmap.propTypes = {
  items: PropTypes.object,
};

export default Heatmap;
