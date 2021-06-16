import React, { Component } from "react";
import PropTypes from "prop-types";

import ReactApexChart from "react-apexcharts";

class Treemap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        plotOptions: {
          treemap: {
            colorScale: {
              ranges: [
                {
                  from: 0,
                  to: 100,
                  color: "#0084b4",
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
        <h1 className="">Treemap</h1>
        <div>
          <ReactApexChart series={this.props.series} options={this.state.options} type="treemap" />
        </div>
      </div>
    );
  }
}

Treemap.propTypes = {
  series: PropTypes.array,
};

export default Treemap;
