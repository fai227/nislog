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
      <div className="p-6 m-2 bg-white">
        <h1 className="">Treemap</h1>
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
