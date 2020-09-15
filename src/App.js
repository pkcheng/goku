import React from "react";
import "./App.css";
import { TaskBox } from "./components/TaskBox";

class App extends React.Component {
  state = {
    value: "",
    tasks: [],
  };

  handleSubmit = () => {
    const tasks = this.state.tasks;
    const newId = tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1;
    this.setState({
      tasks: [...this.state.tasks, { id: newId, value: this.state.value }],
      value: "",
    });
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleDelete = (taskId) => {
    const newTasks = this.state.tasks.filter((t) => t.id !== taskId);
    this.setState({
      tasks: newTasks,
    });
  };

  handleComplete = (e) => {};

  render() {
    return (
      <React.Fragment>
        <TaskBox
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          onDelete={this.handleDelete}
          onComplete={this.handleComplete}
          value={this.state.value}
          tasks={this.state.tasks}
        />
      </React.Fragment>
    );
  }
}

export default App;
