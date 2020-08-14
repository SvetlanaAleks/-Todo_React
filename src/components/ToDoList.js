import React from "react";
import ToDoListItem from './TodoListItem';

const ToDoList = () => {
  return (
    <ul>
      <li><ToDoListItem /></li>
      <li><ToDoListItem /></li>
    </ul>
  );
};

export default ToDoList;
