import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, ...otherProps }) =>
  tasks.map(({ id, ...otherTaskrops }) => {
    return <Task key={id} id={id} {...otherProps} {...otherTaskrops} />;
  });

export default TaskList;
