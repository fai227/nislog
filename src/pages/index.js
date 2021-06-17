import React, { Component } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

import Settings from "../data/settings.json";

import Header from "../components/header.js";
import Treemap from "../components/charts/treemap.js";
import Heatmap from "../components/charts/heatmap.js";
import Columns from "../components/charts/columns.js";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ isLoading: true });
    axios.get(process.env.REACT_APP_API_URL + "/logs", { headers: { "x-api-key": process.env.REACT_APP_API_KEY } }).then((results) => {
      this.setState({
        treemapItems: results.data.treemap,
        heatmapItems: results.data.heatmap,
        columnItems: results.data.column,
        isLoading: false,
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="bg-gray-100 min-h-screen">
          <Header />
          <main className="min-h-screen flex justify-center items-center">
            <ReactLoading type="bubbles" color={Settings.baseColor} />
          </main>
        </div>
      );
    } else {
      return (
        <div className="bg-gray-100 min-h-screen">
          <Header />
          <main>
            <div className="container mx-auto">
              <Treemap items={this.state.treemapItems} />
              <Heatmap items={this.state.heatmapItems} />
              <Columns items={this.state.columnItems} />
            </div>
          </main>
        </div>
      );
    }
  }
}

export default Index;
