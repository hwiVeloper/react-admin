import React, { Component } from "react";
import { SearchBox } from "../components/Users/SearchBox";
import { DataTable } from "../components/Users/DataTable";

const data = [];

export default class UsersContainer extends Component {
  render() {
    return (
      <div>
        <SearchBox />
        <DataTable />
      </div>
    );
  }
}
