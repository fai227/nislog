import React, { Component } from "react";
import axios from "axios";

import Header from "../components/header.js";
// import Treemap from "../components/charts/treemap.js";
// import Heatmap from "../components/charts/heatmap.js";
// import Columns from "../components/charts/columns.js";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // treemapItems: {},
      // heatmapItems: {},
      // columnItems: {},
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get(process.env.REACT_APP_API_URL + "/logs").then((results) => {
      console.log("axios get success! /logs");
      this.setState({ treemapItems: results.data.treemap });
      this.setState({ heatmapItems: results.data.heatmap });
      this.setState({ columnItems: results.data.column });
      console.log("results.data:", results.data);
    });
  }

  render() {
    return (
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <main>
          <div className="container mx-auto">
            {/* <Treemap items={this.state.treemapItems} />
            <Heatmap items={this.state.heatmapItems} />
            <Columns items={this.state.columnItems} /> */}
          </div>
        </main>
      </div>
    );
  }
}

export default Index;
