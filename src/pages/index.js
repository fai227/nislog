import React, { Component } from "react";

import axios from "axios";

import Header from "../components/header.js";
import Students from "../components/students.js";

class Index extends Component {
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
        logs[item.id].logs.push({ data: item.date, count: item.stay_duration / 1000 }); // ミリ秒を秒に変換
      });

      this.setState({ logs: logs });
      // console.log(logs);
    });
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <Students logs={this.state.logs} />
        </main>
      </>
    );
  }
}

export default Index;
