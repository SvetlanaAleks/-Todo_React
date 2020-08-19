import React, { Component } from "react";
import "./ItemAddForm.css";

export default class ItemAddForm extends Component {
  constructor() {
    super();
    this.state = {
      label: "",
    };
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdded(this.state.label);
    this.setState({
      label: "",
    });
  };
  render() {
    return (
      <form className="add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="new item"
          className="form-control form-add"
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        <button className="btn btn-outline-success btn-sm">
          <i className="fa fa-plus" />
        </button>
      </form>
    );
  }
}
