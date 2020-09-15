import React, { Component } from "react";

export class Task extends Component {
  render() {
    return (
      <div className="task">
        <input type="radio" />
        <span className="task-name">{this.props.task.value}</span>
        <button
          onClick={() => this.props.onDelete(this.props.task.id)}
          className="btn trash"
        >
          🗑
        </button>
      </div>
    );
  }
}
