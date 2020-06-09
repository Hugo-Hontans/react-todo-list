import React from "react";
import "./todo-item.css";
import { TodoRemove } from "../todo-remove/todo-remove.js";
import { TodoMove } from "../todo-move/todo-move.js";

export class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.todoOnChange(event.target.value, this.props.index);
  }

  render() {
    return (
      <div>
        <TodoMove position={this.props.position} upTodo={() => this.props.upTodo()} downTodo={() => this.props.downTodo()} ></TodoMove>
        <input
          type="text"
          value={this.props.todo}
          onChange={this.handleChange}
        ></input>
        <TodoRemove removeTodo={() => this.props.removeTodo()} /> 
      </div>
    );
  }
}
