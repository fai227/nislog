import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="sticky top-0 z-40 bg-primary text-white h-16 flex justify-center items-center">
        <h1 className="">NIS Analytics</h1>
      </header>
    );
  }
}

export default Header;
