import React from "react";
import "./todo-list-add.css";
import { TodoAdd } from "../todo-add/todo-add.js";
import { FormGroup, FormControl } from "react-bootstrap";

export class TodoListAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  resetInput() {
    this.setState({ value: "" });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <form
          onSubmit={(event) => {
            this.props.addListTodo(this.state.value);
            this.resetInput();
            event.preventDefault();
          }}
          className="row d-flex justify-content-center"
        >
          <FormGroup controlId="todoName">
            <FormControl
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </FormGroup>
          <div>
          <TodoAdd></TodoAdd>
          </div>
        </form>
      </div>
    );
  }
}
