import React, { Component } from "react";
import PropTypes from "prop-types";

import Column from "./column.js";

class Columns extends Component {
  render() {
    return (
      <div className="grid grid-cols-3">
        {this.props.series.map((item, index) => (
          <Column key={index} series={this.props.series[index]} categories={this.props.categories} options={this.props.options} />
        ))}
      </div>
    );
  }
}

Columns.propTypes = {
  series: PropTypes.array,
  categories: PropTypes.array,
  options: PropTypes.object,
};

export default Columns;
