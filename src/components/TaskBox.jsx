import React, { Component } from "react";
import { Task } from "./Task";

export class TaskBox extends Component {
  render() {
    return (
      <div className="task-box">
        <br />
        {this.props.tasks.map((task) => {
          return (
            <Task
              onClick={this.props.onClick}
              onDelete={this.props.onDelete}
              key={task.id}
              task={task}
            />
          );
        })}
        <div className="task-input">
          <input
            value={this.props.value}
            onChange={this.props.onChange}
            className="input-box"
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
