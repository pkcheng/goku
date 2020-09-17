import React, { Component } from 'react';

const Task = ({ triggerCheckbox, handleDelete, selected, value, id }) => (
  <div className="task">
    <input
      onClick={() => triggerCheckbox(id)}
      type="checkbox"
      checked={selected}
      onChange={() => {}}
    />
    <span className={selected ? 'task-name' : ''}> {value} </span>
    <button onClick={() => handleDelete(id)} className="btn trash">
      🗑
    </button>
  </div>
);

export default Task;
