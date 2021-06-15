import React, { Component } from "react";
import PropTypes from "prop-types";

import ReactApexChart from "react-apexcharts";

class Column extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: {
        name: "aaa",
        data: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
      },
      options: {
        plotOptions: {
          bar: {
            horizontal: false,
            // columnWidth: "55%",
            // endingShape: "rounded",
          },
        },
        xaxis: {
          categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
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
    // console.log("Columns component Props.series:", this.props.series);
    // console.log("Columns component Props.categories:", this.props.categories);
    return (
      <>
        <h1>Column chart</h1>
        <p>{this.props.series.name}</p>
        <div>
          <ReactApexChart options={this.state.options} series={this.state.series} type="bar" />
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
