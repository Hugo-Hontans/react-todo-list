import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { TodoView } from "./lib/todo-view/todo-view";
import { TodoNav } from "./lib/todo-nav/todo-nav";
import { Home } from "./lib/home/home";
import Button from "react-bootstrap/Button";
import { FaHome } from "react-icons/fa";
import { Login } from "./lib/login/login.js";
import { Signup } from "./lib/signup/signup.js";
import { Logout } from "./lib/logout/logout.js";
import API from "./utils/API.js";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        // {
        //   id: "0",
        //   name: "fire todo",
        //   todos: ["coucou", "super list"],
        // },
        // {
        //   id: "1",
        //   name: "my todo",
        //   todos: ["New todo"],
        // },
      ],
    };
    //const todos = await this.getTodos();
    API.deleteTodoList();
  }

  async componentDidMount() { 
    const { todoList } = await this.getTodos();
    console.log(todoList)
    this.setState({todoList});
  }

  addTodoList(name) {
    if (!name) {
      alert("Fill todo list name.");
      return;
    }
    this.setState({
      todoList: [...this.state.todoList, { id: uuidv4(), name, todos: [] }],
    });
  }

  changeTodo(todoToChange) {
    const index = this.state.todoList.findIndex(
      (todo) => todo.id === todoToChange.id
    );
    const todoList = this.state.todoList;
    todoList[index] = todoToChange;
    this.setState({ todoList });
  }

  addTodo(id) {
    const todo = this.state.todoList.find((todo) => todo.id === id);
    todo.todos = [...todo.todos, ""];
    this.changeTodo(todo);
  }

  moveTodo(index, direction, id) {
    const todo = this.state.todoList.find((todo) => todo.id === id);
    const newIndex = direction >= 0 ? index + 1 : index - 1;
    todo.todos.splice(newIndex, 0, todo.todos.splice(index, 1)[0]);
    this.changeTodo(todo);
  }

  removeTodo(index, id) {
    const todo = this.state.todoList.find((todo) => todo.id === id);
    todo.todos.splice(index, 1);
    this.changeTodo(todo);
  }

  async sendTodos() {
    // const todoList = this.state.todoList;
    // console.log(todoList);
    try {
      const { data } = await API.sendTodoList(this.state.todoList);
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  }

  async getTodos() {
    try {
      const { data } = await API.getTodoList();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  send = async () => {
    const { email, password, cpassword } = this.state;
    if (!email || email.length === 0) return;
    if (!password || password.length === 0 || password !== cpassword) return;
    try {
      const { data } = await API.signup({ email, password });
      localStorage.setItem("token", data.token);
      window.location = "/home";
    } catch (error) {
      console.error(error);
    }
  };

  onChange(todos) {
    this.setState({ todos });
  }

  render() {
    return (
      <Router>
        <div className="d-flex justify-content-between">
          <Link to="/home">
            <Button className="home">
                <FaHome />
            </Button>
          </Link>
          {
            API.isAuth()
            ? <div><Logout></Logout></div>
            : null
          }
        </div>
        <section className="container">
          <div className="row">
            {
              API.isAuth()
              ? (<section className="col-4 top">
                <TodoNav
                  todoList={this.state.todoList}
                  addListTodo={(value) => this.addTodoList(value)}
                ></TodoNav>
              </section>)
              : null
            }

            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route path="/home">
                <section className="col-8 text-center top">
                  {
                    API.isAuth()
                    ? (<Home></Home>)
                    : <Redirect to="/" />
                  }
                </section>
              </Route>
              <Route path="/todo/:id">
                <section className="col-8 text-center top">
                  {
                    API.isAuth()
                    ? (<TodoView
                      todos={this.state.todoList}
                      onChange={(todos) => this.onChange(todos)}
                      removeTodo={(index, id) => this.removeTodo(index, id)}
                      upTodo={(index, id) => this.moveTodo(index, -1, id)}
                      downTodo={(index, id) => this.moveTodo(index, +1, id)}
                      addTodo={(id) => this.addTodo(id)}
                      sendTodos={() => this.sendTodos()}
                    ></TodoView>)
                    : <Redirect to="/" />
                  }
                </section>
              </Route>
            </Switch>
          </div>
        </section>
      </Router>
    );
  }
}

export default App;


// import React, { Component } from "react";
// import { Route, Switch } from "react-router-dom";
// import { Dashboard } from "./lib/dashboard/dashboard.js";
// import { Login } from "./lib/login/login.js";
// import { Signup } from "./lib/signup/signup.js";
// import { PrivateRoute } from "./lib/privateRoute.js";
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-content">
//           <Switch>
//             <Route exact path="/" component={Login} />
//             <Route exact path="/signup" component={Signup} />
//             <PrivateRoute path="/dashboard" component={Dashboard} />
//           </Switch>
//         </div>
//       </div>
//     );
//   }
// }
// export default App;