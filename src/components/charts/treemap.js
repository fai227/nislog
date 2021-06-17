import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactApexChart from "react-apexcharts";

import Settings from "../../data/settings.json";

class Treemap extends Component {
  render() {
    const items = {
      series: [
        {
          data: this.props.items.series,
        },
      ],
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
      },
    };

    return (
      <div className="p-2 m-2 bg-white">
        <p className="text-center">Treemap（累計在室時間）</p>
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
