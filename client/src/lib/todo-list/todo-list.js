import React from "react";
import "./todo-list.css";
import { TodoItem } from "../todo-item/todo-item.js";

export class TodoList extends React.Component {
  todoOnChange(todo, index) {
    const todos = this.props.todos;
    todos[index] = todo;
    this.props.onChange(todos);
  }

  render() {
    return this.props.todos.map((todo, index) => {
      let position;
      if (index === 0) {
        position = 'first';
      }
      if (index === (this.props.todos.length - 1)) {
        position = 'last';
      }
      return (
        <TodoItem
          key={index}
          index={index}
          position={position}
          todo={todo}
          todoOnChange={(todo, index) => this.todoOnChange(todo, index)}
          removeTodo={() => this.props.removeTodo(index)}
          upTodo={() => this.props.upTodo(index)}
          downTodo={() => this.props.downTodo(index)}
        />
      );
    });
  }
}
