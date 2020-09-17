import React, { Component } from 'react';
import TaskList from './TaskList';
import TaskInput from './TaskInput';
import TODOLIST_DATA from '../backend/defaultTodo';

export class TaskBox extends Component {
  state = {
    value: '',
    newTaskId: 3, // ady got two predefined ID
    tasks: TODOLIST_DATA,
  };

  // Keep track the user enter
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  // Adding a new task via the button
  handleSubmit = () => {
    if (this.state.value) {
      const { tasks, newTaskId, value } = this.state;
      this.setState({
        tasks: [...tasks, { id: newTaskId, value, selected: false }],
        value: '',
        newTaskId: newTaskId + 1,
      });
    }
  };

  // Alternative adding task using the 'enter' key
  handleKeyPressSubmit = (e) => {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  };

  // Removing item from the list
  handleDelete = (taskId) => {
    const newTasks = this.state.tasks.filter((t) => t.id !== taskId);
    this.setState({
      tasks: newTasks,
    });
  };

  // Trigger Checkbox
  triggerCheckbox = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map((t) => {
        if (t.id === taskId) {
          return { ...t, selected: !t.selected };
        } else {
          return t;
        }
      }),
    });
  };

  render() {
    const { tasks, value } = this.state;

    return (
      <div className="task-box">
        <br />
        <TaskList
          tasks={tasks}
          handleDelete={this.handleDelete}
          triggerCheckbox={this.triggerCheckbox}
        />
        <TaskInput
          value={value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPressSubmit}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
