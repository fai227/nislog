import React, { Component } from "react";

import axios from "axios";

import Header from "../components/header.js";
import Treemap from "../components/charts/treemap.js";
import Heatmap from "../components/charts/heatmap.js";
import Columns from "../components/charts/columns.js";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treemapSeries: [{ data: [] }],
      heatmapSeries: [],
      columnSeries: [],
      columnCategories: [],
    };
  }

  componentDidMount() {
    // Treemap
    axios.get(process.env.REACT_APP_API_URL + "/logs?type=treemap").then((results) => {
      console.log("axios get success! /logs?type=treemap");
      this.setState({ treemapSeries: [{ data: results.data.Items }] });
    });

    // Heatmap
    axios.get(process.env.REACT_APP_API_URL + "/logs?type=heatmap").then((results) => {
      console.log("axios get success! /logs?type=heatmap");
      this.setState({ heatmapSeries: results.data.Items });
    });

    // Columnchart
    axios.get(process.env.REACT_APP_API_URL + "/logs?type=column").then((results) => {
      console.log("axios get success! /logs?type=column");
      this.setState({
        columnSeries: results.data.Items,
        columnCategories: results.data.Categories,
      });
    });
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <Treemap series={this.state.treemapSeries} />
          <Heatmap series={this.state.heatmapSeries} />
          <Columns series={this.state.columnSeries} categories={this.state.columnCategories} />
        </main>
      </>
    );
  }
}

export default Index;
