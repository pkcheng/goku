import React, { Component } from "react";

export class TaskInput extends Component {
  state = {};
  render() {
    return (
      <div className="task-input">
        <input placeholder="Enter Task Here" />
        <button className="btn">↑</button>
      </div>
    );
  }
}
