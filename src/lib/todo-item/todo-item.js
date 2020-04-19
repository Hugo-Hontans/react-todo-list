import React from "react";
import "./todo-item.css";

export class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.todoOnChange(event.target.value, this.props.index);
  }

  render() {
    return <input type="text" value={this.props.todo} onChange={this.handleChange}></input>;
  }
}
