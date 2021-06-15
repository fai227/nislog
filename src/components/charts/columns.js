import React, { Component } from "react";
// import PropTypes from "prop-types";

import Column from "./column.js";

class Columns extends Component {
  render() {
    return (
      <>
        <h1>Column chart section</h1>
        <Column />
      </>
    );
  }
}

export default Columns;
