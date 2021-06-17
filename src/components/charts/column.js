import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactApexChart from "react-apexcharts";

import Settings from "../../data/settings.json";

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
                  to: this.props.options.max,
                  color: Settings.baseColor,
                },
              ],
            },
          },
        },
        xaxis: { categories: this.props.options.categories },
        yaxis: { show: false, max: this.props.options.max },
        chart: { toolbar: { show: false } },
      },
    };

    return (
      <div className="p-1 m-1 lg:p-2 lg:m-2 bg-white">
        <p className="text-center mt-2">{this.props.series.name}</p>
        <div>
          <ReactApexChart series={series.series} options={series.options} type="bar" />
        </div>
      </div>
    );
  }
}

Column.propTypes = {
  series: PropTypes.object,
  options: PropTypes.object,
};

export default Column;
