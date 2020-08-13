import React from 'react';
import ReactDOM from 'react-dom';

const el = (
  <div>
    <h1>Todo List</h1>
    <input placeholder="search"/>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </div>
);

ReactDOM.render(el, document.getElementById('root'));