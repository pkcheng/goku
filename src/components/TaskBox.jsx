import React, { Component } from "react";
import { Task } from "./Task";
import { TaskInput } from "./TaskInput";

export class TaskBox extends Component {
  state = {
    count: 0,
    task: {},
  };
  render() {
    return (
      <div className="task-box">
        <TaskInput />
      </div>
    );
  }
}
