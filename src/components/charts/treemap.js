import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactApexChart from "react-apexcharts";

import Settings from "../../data/settings.json";

class Treemap extends Component {
  render() {
    const items = {
      series: [{ data: this.props.items.series }],
      options: {
        plotOptions: {
          treemap: {
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
      },
    };

    return (
      <div className="p-1 mx-1 lg:p-2 lg:mx-2 my-6 bg-white">
        <p className="text-center mt-4">Treemap（累計在室時間）</p>
        <div>
          <ReactApexChart series={items.series} options={items.options} type="treemap" />
        </div>
      </div>
    );
  }
}

Treemap.propTypes = {
  items: PropTypes.object,
};

export default Treemap;
