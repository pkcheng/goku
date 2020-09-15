import React, { Component } from "react";

export class Task extends Component {
  state = { value: "" };
  render() {
    return <span>{this.state.value}</span>;
  }
}
