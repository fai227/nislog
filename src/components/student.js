import React, { Component } from "react";
import PropTypes from "prop-types";

class Student extends Component {
  render() {
    return (
      <>
        <p>{this.props.logs.j_full_name}</p>
      </>
    );
  }
}

Student.propTypes = {
  logs: PropTypes.object,
};

export default Student;
