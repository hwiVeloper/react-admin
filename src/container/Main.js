import React, { Component } from "react";

import { Header } from "../components/layouts/Header";
import { LeftMenu } from "../components/layouts/LeftMenu";
import { Content } from "../components/layouts/Content";

export default class Main extends Component {
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
    const { children } = this.props;
    return (
      <>
        <Header open={open} handleOpen={this.handleDrawerOpen} />
        <LeftMenu open={open} handleClose={this.handleDrawerClose} />
        <Content open={open} child={children} />
      </>
    );
  }
}
