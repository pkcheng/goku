import React from "react";
import "./App.css";
import { TaskBox } from "./components/TaskBox";

class App extends React.Component {
  state = {
    value: "",
    tasks: ["a", "b"],
  };

  handleSubmit = () => {
    this.setState({
      tasks: [...this.state.tasks, this.state.value],
      value: "",
    });
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <TaskBox
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={this.state.value}
          tasks={this.state.tasks}
        />
      </React.Fragment>
    );
  }
}

export default App;
