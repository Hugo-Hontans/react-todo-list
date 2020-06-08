import React from "react";
import "./App.css";
import { TodoList } from "./lib/todo-list/todo-list.js";
import { TodoAdd } from "./lib/todo-add/todo-add";
import { TodoSend } from "./lib/todo-send/todo-send";

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

  sendTodos() {
    const todos = this.state.todos;
    console.log(todos);
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
        <article className="send">
          <TodoSend sendTodos={() => this.sendTodos()}></TodoSend>
        </article>
      </section>
    );
  }
}

export default App;
