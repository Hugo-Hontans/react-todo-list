import React from "react";
import "./todo-list-add.css";
import { TodoAdd } from "../todo-add/todo-add.js";
import { FormGroup, FormControl, Alert } from "react-bootstrap";

export class TodoListAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", hasError: false };
    this.handleChange = this.handleChange.bind(this);
  }

  resetInput() {
    this.setState({hasError: this.state.value ? false : true});
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
          {
            this.props.listLength
            ? null
            : (<Alert variant="secondary">
              Fill name of your new todo list here.
            </Alert>)
          }
          <FormGroup controlId="todoName">
            <FormControl
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </FormGroup>
          <div>
            <TodoAdd />
          </div>
          {
            this.state.hasError
            ? (<Alert variant="danger">
                You must fill todo list name.
              </Alert>)
            : null
          }
        </form>
      </div>
    );
  }
}
