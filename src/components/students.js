import React, { Component } from "react";

import axios from "axios";

import Student from "../components/student.js";

class Studnets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: {},
    };
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_API_URL + "/logs").then((results) => {
      const items = results.data.Items;

      const logs = {};
      items.map((item) => {
        if (!logs[item.id]) {
          logs[item.id] = {};
          logs[item.id].j_full_name = item.j_full_name;
          logs[item.id].e_full_name = item.e_full_name;
          logs[item.id].logs = [];
        }
        logs[item.id].logs.push({ data: item.date, count: item.stay_duration });
      });

      this.setState({ logs: logs });
      // console.log(logs);
    });
  }

  render() {
    return (
      <section>
        {Object.keys(this.state.logs).map((key) => (
          <div key={key}>
            <Student logs={this.state.logs[key]} />
          </div>
        ))}
      </section>
    );
  }
}

export default Studnets;
