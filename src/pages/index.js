import React, { Component } from "react";

import axios from "axios";

import Header from "../components/header.js";
import Treemap from "../components/charts/treemap.js";
import Heatmap from "../components/charts/heatmap.js";
import Columns from "../components/charts/columns.js";
import Students from "../components/students.js";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: {},
      treemapSeries: [{ data: [] }],
      heatmapSeries: [],
    };
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_API_URL + "/logs").then((results) => {
      this.formatLogs(results.data.Items);
    });

    // Treemap
    axios.get(process.env.REACT_APP_API_URL + "/logs?type=treemap").then((results) => {
      this.setState({ treemapSeries: [{ data: results.data.Items }] });
    });

    // Heatmap
    axios.get(process.env.REACT_APP_API_URL + "/logs?type=heatmap").then((results) => {
      this.setState({ heatmapSeries: results.data.Items });
    });
  }

  formatLogs(items) {
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
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <Treemap series={this.state.treemapSeries} />
          <Heatmap series={this.state.heatmapSeries} />
          <Columns />
          <Students logs={this.state.logs} />
        </main>
      </>
    );
  }
}

export default Index;
