import React, { Component } from "react";
import PropTypes from "prop-types";

// import axios from "axios";
import ReactApexChart from "react-apexcharts";

class Treemap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {},
    };
  }

  render() {
    return (
      <>
        <h1>Treemap</h1>
        <div>
          <ReactApexChart series={this.props.series} options={this.state.options} type="treemap" />
        </div>
      </>
    );
  }
}

Treemap.propTypes = {
  series: PropTypes.array,
};

export default Treemap;
