import React, { Component } from "react";
import PropTypes from "prop-types";

import ReactApexChart from "react-apexcharts";

class Column extends Component {
  render() {
    const series = {
      series: [this.props.series],
      options: {
        plotOptions: {
          bar: {
            horizontal: false,
            // columnWidth: "55%",
            // endingShape: "rounded",
          },
        },
        xaxis: { categories: this.props.categories },
        yaxis: { title: { text: "thousands" } },
        fill: { opacity: 1 },
      },
    };

    return (
      <>
        <h1>{this.props.series.name}</h1>
        <div>
          <ReactApexChart series={series.series} options={series.options} type="bar" />
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
