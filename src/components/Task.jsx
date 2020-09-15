import React, { Component } from "react";

export class Task extends Component {
  render() {
    return (
      <div className="task">
        <input type="radio" />
        {this.props.value}
      </div>
    );
  }
}
