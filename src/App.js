import React from "react";
import "./App.css";
import { TodoList } from "./lib/todo-list/todo-list.js";
import { TodoAdd } from "./lib/todo-add/todo-add";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["coucou", "super list"],
    };
  }

  addTodo() {
    this.setState({ todos: [...this.state.todos, ""] });
  }

  removeTodo(index) {
    const todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({ todos });
  }

  onChange(todos) {
    this.setState({ todos });
  }

  render() {
    return (
      <section>
        <TodoList
          todos={this.state.todos}
          onChange={(todos) => this.onChange(todos)}
          removeTodo={(index) => this.removeTodo(index)}
        />
        <TodoAdd addTodo={() => this.addTodo()} />
      </section>
    );
  }
}

export default App;
