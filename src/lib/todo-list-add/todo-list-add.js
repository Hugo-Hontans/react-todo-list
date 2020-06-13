import React from "react";
import "./todo-list-add.css";
import { TodoAdd } from "../todo-add/todo-add.js";

export class TodoListAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        ></input>
        <TodoAdd
          addTodo={() => this.props.addListTodo(this.state.value)}
        ></TodoAdd>
      </div>
    );
  }
}
