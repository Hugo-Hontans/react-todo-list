import React from "react";
import "./todo-view.css";
import { TodoList } from "../todo-list/todo-list.js";
import { TodoAdd } from "../todo-add/todo-add";
import { TodoSend } from "../todo-send/todo-send";
import { useParams } from "react-router-dom";

export function TodoView(props) {
  let { id } = useParams();
  let currentTodo = props.todos.find(todo => todo.id === id);
  return (
    <section className="container text-center">
      <h1 className="title">TODO LIST</h1>
      <TodoList
        className="row"
        todos={currentTodo.todos}
        onChange={() => props.onChange(currentTodo.todos)}
        removeTodo={(index) => props.removeTodo(index, currentTodo.id)}
        upTodo={(index) => props.upTodo(index, currentTodo.id)}
        downTodo={(index) => props.downTodo(index, currentTodo.id)}
      />
      <TodoAdd addTodo={() => props.addTodo(currentTodo.id)} />
      <article className="send">
        <TodoSend sendTodos={() => props.sendTodos()}></TodoSend>
      </article>
    </section>
  );
}