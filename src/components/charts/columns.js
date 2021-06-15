import React, { Component } from "react";
import PropTypes from "prop-types";

import Column from "./column.js";

class Columns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
    };
  }

  // componentDidUpdate() {
  //   if (this.state.series !== this.props.series) {
  //     this.setState({ series: this.props.series });
  //   }
  // }

  render() {
    // console.log(this.state.series);
    return (
      <>
        <h1>Column chart section</h1>
        {this.state.series.map((_item, index) => {
          <Column series={this.state.series[index]} categories={this.props.categories} />;
        })}
      </>
    );
  }
}

Columns.propTypes = {
  series: PropTypes.array,
  categories: PropTypes.array,
};

export default Columns;
