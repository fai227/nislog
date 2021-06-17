import React, { Component } from "react";
import PropTypes from "prop-types";

import Column from "./column.js";

class Columns extends Component {
  render() {
    return (
      <div className="grid grid-cols-3">
        {this.props.items.series.map((item, index) => (
          <Column key={index} series={item} options={this.props.items.options} />
        ))}
      </div>
    );
  }
}

Columns.propTypes = {
  items: PropTypes.object,
};

export default Columns;
