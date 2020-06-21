import React from "react";
import "./todo-view.css";
import { TodoList } from "../todo-list/todo-list.js";
import { TodoAdd } from "../todo-add/todo-add";
import { TodoRemove } from "../todo-remove/todo-remove";
import { useParams, Redirect } from "react-router-dom";

export function TodoView(props) {
  let { id } = useParams();
  let currentTodo = props.todos.find(todo => todo.id === id);

  if (!currentTodo) {
    return (<Redirect to='/home' />);
  }
  return (
    <div>
      <div className="title row justify-content-center align-items-center">
        <h1>{currentTodo.name}</h1>
        <TodoRemove removeTodo={() => props.removeTodoList(currentTodo.id)}></TodoRemove>
      </div>
      <TodoList
        className="row"
        todos={currentTodo.todos}
        onChange={() => props.onChange(currentTodo.todos)}
        removeTodo={(index) => props.removeTodo(index, currentTodo.id)}
        upTodo={(index) => props.upTodo(index, currentTodo.id)}
        downTodo={(index) => props.downTodo(index, currentTodo.id)}
      />
      <article className="add">
        <TodoAdd addTodo={() => props.addTodo(currentTodo.id)} />
      </article>
    </div>
  );
}