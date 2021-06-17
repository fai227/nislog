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
      },
    };

    return (
      <div className="p-6 m-2 bg-white">
        <h1>Heatmap</h1>
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
