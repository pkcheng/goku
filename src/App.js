import React from "react";
import "./App.css";
import { TaskBox } from "./components/TaskBox";

class App extends React.Component {
  state = {
    value: "",
    tasks: [{ id: 1, value: "a", selected: false }],
  };

  handleSubmit = () => {
    if (this.state.value != "") {
      const tasks = this.state.tasks;
      const newId = tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1;
      this.setState({
        tasks: [
          ...this.state.tasks,
          { id: newId, value: this.state.value, selected: false },
        ],
        value: "",
      });
    }
  };

  handleKeyPressSubmit = (e) => {
    //Trigger enter key
    if (e.key === "Enter") {
      this.handleSubmit();
    }
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

  handleClick = (taskId) => {
    this.setState((state) => {
      const tasks = state.tasks.map((task) => {
        if (task.id === taskId) {
          return { id: task.id, value: task.value, selected: !task.selected };
        } else {
          return task;
        }
      });
      return { tasks };
    });
  };

  render() {
    return (
      <React.Fragment>
        <TaskBox
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          onKeyPress={this.handleKeyPressSubmit}
          onDelete={this.handleDelete}
          onClick={this.handleClick}
          value={this.state.value}
          tasks={this.state.tasks}
        />
      </React.Fragment>
    );
  }
}

export default App;
