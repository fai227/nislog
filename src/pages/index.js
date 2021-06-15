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
    this.fetchData();
  }

  fetchData() {
    axios.get(process.env.REACT_APP_API_URL + "/logs").then((results) => {
      console.log("axios get success! /logs");
      this.setState({ treemapSeries: [{ data: results.data.treemap }] });
      this.setState({ heatmapSeries: results.data.heatmap });
      this.setState({ columnSeries: results.data.column.series });
      this.setState({ columnCategories: results.data.column.categories });
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
