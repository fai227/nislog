import React, { Component } from "react";
import PropTypes from "prop-types";

import Column from "./column.js";

class Columns extends Component {
  render() {
    return (
      <div className="grid grid-cols-3">
        {this.props.series.map((item, index) => (
          <Column key={index} series={this.props.series[index]} categories={this.props.categories} />
        ))}
      </div>
    );
  }
}

Columns.propTypes = {
  series: PropTypes.array,
  categories: PropTypes.array,
};

export default Columns;
