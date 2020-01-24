import React, { Component } from "react";

import { Header } from "./Header";
import { LeftMenu } from "./LeftMenu";

export default class Layout extends Component {
  state = {
    open: true
  };

  handleDrawerOpen = () => {
    console.log("open");
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    console.log("close");
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <>
        <Header handleOpen={this.handleDrawerOpen} />
        <LeftMenu open={open} handleClose={this.handleDrawerClose} />
      </>
    );
  }
}
