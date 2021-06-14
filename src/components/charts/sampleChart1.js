import React, { Component } from "react";

import ReactApexChart from "react-apexcharts";

class SampleChart1 extends Component {
  render() {
    const options = {
      options: {
        chart: {
          height: 350,
          type: "heatmap",
        },
      },
      series: [
        {
          name: "Series 1",
          data: [
            {
              x: "W1",
              y: 22,
            },
            {
              x: "W2",
              y: 29,
            },
            {
              x: "W4",
              y: 32,
            },
          ],
        },
        {
          name: "Series 2",
          data: [
            {
              x: "W1",
              y: 43,
            },
            {
              x: "W2",
              y: 43,
            },
            {
              x: "W3",
              y: 43,
            },
          ],
        },
      ],
    };

    return (
      <>
        <h1>SmapleChart1</h1>
        <div>
          <ReactApexChart series={options.series} options={options.options} type="heatmap" />
        </div>
      </>
    );
  }
}

export default SampleChart1;
