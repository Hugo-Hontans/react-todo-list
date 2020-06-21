import React from "react";
import "./todo-item.css";
import { TodoRemove } from "../todo-remove/todo-remove.js";
import { TodoMove } from "../todo-move/todo-move.js";
import { FormGroup, FormControl } from "react-bootstrap";

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
      <div className="container item">
        <div className="row justify-content-center align-items-center">
          <TodoMove
            position={this.props.position}
            upTodo={() => this.props.upTodo()}
            downTodo={() => this.props.downTodo()}
          ></TodoMove>
          <FormGroup className="col-6 col-sm-5 todo-group" controlId="todoValue">
            <FormControl
              type="text"
              value={this.props.todo}
              onChange={this.handleChange}
            />
          </FormGroup>
          <TodoRemove removeTodo={() => this.props.removeTodo()} />
        </div>
      </div>
    );
  }
}
