import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { TodoView } from "./lib/todo-view/todo-view";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          id: 'firstId',
          name: 'first todo',
          todos: ["coucou", "super list"]
        },
        {
          id: 'secondId',
          name: 'second todo',
          todos: ["New todo"]
        },
      ]
    };
  }

  changeTodo(todoToChange) {
    const index = this.state.todoList.findIndex(todo => todo.id === todoToChange.id);
    const todoList = this.state.todoList;
    todoList[index] = todoToChange;
    this.setState({ todoList });
  }

  addTodo(id) {
    const todo = this.state.todoList.find(todo => todo.id === id);
    todo.todos = [...todo.todos, ""];
    this.changeTodo(todo);
  }

  moveTodo(index, direction, id) {
    const todo = this.state.todoList.find(todo => todo.id === id);
    const newIndex = direction >= 0 ? index + 1 : index - 1;
    todo.todos.splice(newIndex, 0, todo.todos.splice(index, 1)[0]);
    this.changeTodo(todo);
  }

  removeTodo(index, id) {
    const todo = this.state.todoList.find(todo => todo.id === id);
    todo.todos.splice(index, 1);
    this.changeTodo(todo);
  }

  sendTodos() {
    const todoList = this.state.todoList;
    console.log(todoList);
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
            {
              this.state.todoList.map((list) => {
                return (
                  <li>
                    <Link to={`/todo/${list.id}`}>Todo List</Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <section className="container text-center">
              <h1>Home</h1>
            </section>
          </Route>
          <Route path="/todo/:id">
            <TodoView
              todos={this.state.todoList}
              onChange={(todos) => this.onChange(todos)}
              removeTodo={(index, id) => this.removeTodo(index, id)}
              upTodo={(index, id) => this.moveTodo(index, -1, id)}
              downTodo={(index, id) => this.moveTodo(index, +1, id)}
              addTodo={(id) => this.addTodo(id)}
              sendTodos={() => this.sendTodos()}
            >
            </TodoView>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
