import React, { Component } from "react";
import PropTypes from "prop-types";

import Student from "../components/student.js";

class Students extends Component {
  render() {
    return (
      <>
        {Object.keys(this.props.logs).map((key) => (
          <div key={key}>
            <Student logs={this.props.logs[key]} />
          </div>
        ))}
      </>
    );
  }
}

Students.propTypes = {
  logs: PropTypes.object,
};

export default Students;
