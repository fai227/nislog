import React, { Component } from "react";

import Header from "../components/header.js";
import Students from "../components/students.js";

class Index extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Students />
        </main>
      </>
    );
  }
}

export default Index;
