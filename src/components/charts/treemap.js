import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactApexChart from "react-apexcharts";

import Settings from "../../data/settings.json";

class Treemap extends Component {
  render() {
    const options = {
      plotOptions: {
        treemap: {
          colorScale: {
            ranges: [
              {
                from: this.props.options.min,
                to: this.props.options.max,
                color: Settings.baseColor,
              },
            ],
          },
        },
      },
    };

    return (
      <div className="p-6 m-2 bg-white">
        <h1 className="">Treemap</h1>
        <div>
          <ReactApexChart series={this.props.series} options={options} type="treemap" />
        </div>
      </div>
    );
  }
}

Treemap.propTypes = {
  series: PropTypes.array,
  options: PropTypes.object,
};

export default Treemap;
