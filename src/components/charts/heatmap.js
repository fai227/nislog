import React, { Component } from "react";
import PropTypes from "prop-types";

import ReactApexChart from "react-apexcharts";

class Heatmap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        dataLabels: { enabled: false },
        colors: ["#008FFB"],
        chart: {
          height: "200%",
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
