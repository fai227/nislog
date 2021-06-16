import React, { Component } from "react";
import PropTypes from "prop-types";

import ReactApexChart from "react-apexcharts";

class Column extends Component {
  render() {
    const series = {
      series: [this.props.series],
      options: {
        xaxis: { categories: this.props.categories },
        fill: { opacity: 1 },
      },
    };

    return (
      <div className="m-2 p-6 bg-white">
        <h1 className="">{this.props.series.name}</h1>
        <div>
          <ReactApexChart series={series.series} options={series.options} type="bar" />
        </div>
      </div>
    );
  }
}

Column.propTypes = {
  series: PropTypes.object,
  categories: PropTypes.array,
};

export default Column;
