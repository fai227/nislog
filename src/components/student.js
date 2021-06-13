import React, { Component } from "react";
import PropTypes from "prop-types";

class Student extends Component {
  render() {
    const logs = this.props.logs;
    console.log(logs);
    return (
      <>
        <p>{logs.j_full_name}</p>
      </>
    );
  }
}

Student.propTypes = {
  logs: PropTypes.object,
};

export default Student;
