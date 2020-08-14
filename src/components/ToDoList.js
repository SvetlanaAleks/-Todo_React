import React from "react";
import ToDoListItem from "./TodoListItem";

const ToDoList = () => {
  return (
    <ul>
      <li>
        <ToDoListItem label="item 1" />
      </li>
      <li>
        <ToDoListItem label="item 2" important/>
      </li>
    </ul>
  );
};

export default ToDoList;
