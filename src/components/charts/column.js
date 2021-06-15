import React, { Component } from "react";
import PropTypes from "prop-types";

import ReactApexChart from "react-apexcharts";

class Column extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: this.props.series,
      options: {
        plotOptions: {
          bar: {
            horizontal: false,
            // columnWidth: "55%",
            // endingShape: "rounded",
          },
        },
        xaxis: {
          categories: this.props.categories,
        },
        yaxis: {
          title: {
            text: "thousands",
          },
        },
        fill: {
          opacity: 1,
        },
      },
    };
  }

  render() {
    console.log("state.series:", this.state.series);
    console.log("state.options:", this.state.options);
    // console.log("Columns component Props.series:", this.props.series);
    // console.log("Columns component Props.categories:", this.props.categories);
    return (
      <>
        <h1>Column chart</h1>
        <div>
          <ReactApexChart options={this.state.options} series={this.props.series} type="bar" />
        </div>
      </>
    );
  }
}

Column.propTypes = {
  series: PropTypes.object,
  categories: PropTypes.array,
};

export default Column;
