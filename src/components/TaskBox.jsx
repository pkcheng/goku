import React, { Component } from "react";
import { Task } from "./Task";

export class TaskBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="task-box">
        <br />
        {this.props.tasks.map((task) => {
          return <Task value={task} />;
        })}
        <div className="task-input">
          <input
            value={this.props.value}
            onChange={this.props.onChange}
            class="input-box"
            placeholder="Enter Task Here"
          />
          <button onClick={this.props.onSubmit} className="btn">
            ↑
          </button>
        </div>
      </div>
    );
  }
}
