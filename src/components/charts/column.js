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
            colors: {
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
        xaxis: { categories: this.props.categories },
        yaxis: { max: 15 },
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
