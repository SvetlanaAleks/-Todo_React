import React from "react";
import ReactDOM from "react-dom";
import AppHeader from './components/AppHeader';
import SearchInput from './components/SearchInput';
import ToDoList from './components/ToDoList';

const App = () => {
  return(
  <div>
    <AppHeader />
    <SearchInput />
    <ToDoList />
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
