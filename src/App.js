import React from 'react';
import './App.css';
import { TaskBox } from './components/TaskBox';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TaskBox />
      </React.Fragment>
    );
  }
}

export default App;
