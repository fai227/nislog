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
      treemapOptions: {},
      heatmapSeries: [],
      heatmapOptions: {},
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
      this.setState({ treemapSeries: [{ data: results.data.treemap.series }] });
      this.setState({ treemapOptions: results.data.treemap.options });
      this.setState({ heatmapSeries: results.data.heatmap.series });
      this.setState({ heatmapOptions: results.data.heatmap.options });
      this.setState({ columnSeries: results.data.column.series });
      this.setState({ columnCategories: results.data.column.categories });
    });
  }

  render() {
    return (
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <main>
          <div className="container mx-auto">
            {/* <div className="grid grid-cols-2"> */}
            <Treemap series={this.state.treemapSeries} options={this.state.treemapOptions} />
            <Heatmap series={this.state.heatmapSeries} options={this.state.heatmapOptions} />
            {/* </div> */}
            <Columns series={this.state.columnSeries} categories={this.state.columnCategories} options={this.state.heatmapOptions} />
          </div>
        </main>
      </div>
    );
  }
}

export default Index;
