import React, { Component } from "react";

export class Task extends Component {
  render() {
    return (
      <div className="task">
        <input
          onClick={() => this.props.onClick(this.props.task.id)}
          type="radio"
          checked={this.props.task.selected}
        />
        <span className="task-name">
          {this.props.task.selected === true ? (
            <s>{this.props.task.value}</s>
          ) : (
            this.props.task.value
          )}
        </span>
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
