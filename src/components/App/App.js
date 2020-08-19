import React, { Component } from "react";
import AppHeader from "../AppHeader";
import SearchInput from "../SearchInput";
import ToDoList from "../ToDoList";
import ItemStatusFilter from "../ItemStatusFilter";
import ItemAddForm from "../ItemAddForm/ItemAddForm";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.maxId = 100;
    this.state = {
      dataList: [
        this.createItem("Drink coffee"),
        this.createItem("item 2"),
        this.createItem("item 3"),
      ],
      term: "",
      filter: "all",
    };
  }
  createItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }
  deleteItem = (id) => {
    this.setState(({ dataList }) => {
      const idx = dataList.findIndex((el) => el.id === id);
      const newArray = [...dataList.slice(0, idx), ...dataList.slice(idx + 1)];
      return {
        dataList: newArray,
      };
    });
  };
  addItem = (text) => {
    const newItem = this.createItem(text);
    this.setState(({ dataList }) => {
      const newArray = [...dataList, newItem];
      return {
        dataList: newArray,
      };
    });
  };
  onToggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }
  onItemDone = (id) => {
    this.setState(({ dataList }) => {
      return {
        dataList: this.onToggleProperty(dataList, id, "done"),
      };
    });
  };
  onItemImportant = (id) => {
    this.setState(({ dataList }) => {
      return {
        dataList: this.onToggleProperty(dataList, id, "important"),
      };
    });
  };
  onSearchChange = (term) => {
    this.setState({ term });
  };
  onFilterChange = (filter) => {
   this.setState({ filter });
 };
  search = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter(
      (item) => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    );
  };
  onFilterItems = (items, filter) => {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  };
  render() {
    const { dataList, term, filter } = this.state;
    const visibilityItem = this.onFilterItems(this.search(dataList, term), filter);
    const countDone = dataList.filter((el) => el.done).length;
    const countTodo = dataList.length - countDone;
    return (
      <div className="todo-app">
        <AppHeader toDo={countTodo} done={countDone} />
        <div className="d-flex top-panel">
          <SearchInput onSearchChange={this.onSearchChange} />
          <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
        </div>
        <ToDoList
          todos={visibilityItem}
          onDeleted={(id) => {
            this.deleteItem(id);
          }}
          onItemImportant={(id) => [this.onItemImportant(id)]}
          onItemDone={(id) => [this.onItemDone(id)]}
        />
        <ItemAddForm onAdded={this.addItem} />
      </div>
    );
  }
}
