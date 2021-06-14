import React, { Component } from "react";

import axios from "axios";
import ReactApexChart from "react-apexcharts";

class Treemap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{ data: [] }],
      options: {},
    };
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_API_URL + "/logs?type=treemap").then((results) => {
      this.setState({ series: [{ data: results.data.Items }] });
    });
  }

  render() {
    return (
      <>
        <h1>Treemap</h1>
        <div>
          <ReactApexChart series={this.state.series} options={this.state.options} type="treemap" />
        </div>
      </>
    );
  }
}

export default Treemap;
