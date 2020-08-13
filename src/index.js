import React from "react";
import ReactDOM from "react-dom";

const AppHeader = () => {
  return <h1>Todo List</h1>;
};
const SearchInput = () => {
  return <input placeholder="search" />;
};
const ListToDo = () => {
  return (
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  );
};
const App = () => {
  return(
  <div>
    <AppHeader />
    <SearchInput />
    <ListToDo />
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
