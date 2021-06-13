import React, { Component } from "react";
import PropTypes from "prop-types";

import Student from "../components/student.js";

class Students extends Component {
  render() {
    const logs = this.props.logs;
    return (
      <section>
        {Object.keys(logs).map((key) => (
          <div key={key}>
            <Student logs={logs[key]} />
          </div>
        ))}
      </section>
    );
  }
}

Students.propTypes = {
  logs: PropTypes.object,
};

export default Students;
