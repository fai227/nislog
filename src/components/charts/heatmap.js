import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactApexChart from "react-apexcharts";

import Settings from "../../data/settings.json";

class Heatmap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        plotOptions: {
          heatmap: {
            colorScale: {
              ranges: [
                {
                  from: 0.1,
                  to: 18,
                  color: Settings.baseColor,
                },
              ],
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div className="p-6 m-2 bg-white">
        <h1>Heatmap</h1>
        <div>
          <ReactApexChart series={this.props.series} options={this.state.options} type="heatmap" />
        </div>
      </div>
    );
  }
}

Heatmap.propTypes = {
  series: PropTypes.array,
};

export default Heatmap;
