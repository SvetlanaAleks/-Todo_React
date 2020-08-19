import React, { Component } from "react";
import "./SearchInput.css";

export default class SearchInput extends Component {
  constructor() {
    super();
    this.state = {
      term: "",
    };
  }
  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term)
  };
  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="search"
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}
