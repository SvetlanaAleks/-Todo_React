import React from "react";
import ToDoListItem from "../ToDoListItem/TodoListItem";
import "./ToDoList.css";

const ToDoList = ({ todos, onDeleted, onItemImportant, onItemDone }) => {
  const items = todos.map((item) => {
    const { id, ...itemsProps } = item;
    return (
      <li key={id} className="list-group-item">
        <ToDoListItem
          {...itemsProps}
          onDeleted={() => onDeleted(id)}
          onItemImportant={() => onItemImportant(id)}
          onItemDone={() => onItemDone(id)}
        />
      </li>
    );
  });
  return <ul className="list-group todo-list">{items}</ul>;
};

export default ToDoList;
