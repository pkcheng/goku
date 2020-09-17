import React from 'react';

const TaskInput = ({ handleSubmit, ...otherProps }) => (
  <div className="task-input">
    <input
      name="value"
      type="text"
      className="input-box"
      placeholder="Enter Task Here"
      {...otherProps}
    />
    <button onClick={handleSubmit} className="btn">
      ↑
    </button>
  </div>
);

export default TaskInput;
