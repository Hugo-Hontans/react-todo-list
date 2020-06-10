import React from "react";
import "./App.css";
import { TodoList } from "./lib/todo-list/todo-list.js";
import { TodoAdd } from "./lib/todo-add/todo-add";
import { TodoSend } from "./lib/todo-send/todo-send";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

  moveTodo(index, direction) {
    const todos = this.state.todos;
    const newIndex = direction >= 0 ? index + 1 : index - 1;
    todos.splice(newIndex, 0, todos.splice(index, 1)[0]);
    this.setState({ todos });
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
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo">Todo List</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <section className="container text-center">
              <h1>Home</h1>
            </section>
          </Route>
          <Route path="/todo">
            <section className="container text-center">
              <h1 className="title">TODO LIST</h1>
              <TodoList
                className="row"
                todos={this.state.todos}
                onChange={(todos) => this.onChange(todos)}
                removeTodo={(index) => this.removeTodo(index)}
                upTodo={(index) => this.moveTodo(index, -1)}
                downTodo={(index) => this.moveTodo(index, +1)}
              />
              <TodoAdd addTodo={() => this.addTodo()} />
              <article className="send">
                <TodoSend sendTodos={() => this.sendTodos()}></TodoSend>
              </article>
            </section>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
