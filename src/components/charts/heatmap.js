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
      },
    };
  }

  render() {
    console.log("Heatmap Props.series:", this.props.series);
    return (
      <>
        <h1>Heatmap</h1>
        <div>
          <ReactApexChart series={this.props.series} options={this.state.options} type="heatmap" />
        </div>
      </>
    );
  }
}

Heatmap.propTypes = {
  series: PropTypes.array,
};

export default Heatmap;
