import React from "react";
import "./todo-view.css";
import { TodoList } from "../todo-list/todo-list.js";
import { TodoAdd } from "../todo-add/todo-add";
import { TodoSend } from "../todo-send/todo-send";

export function TodoView(props) {
  return (
    <section className="container text-center">
      <h1 className="title">TODO LIST</h1>
      <TodoList
        className="row"
        todos={props.todos}
        onChange={() => props.onChange(props.todos)}
        removeTodo={(index) => props.removeTodo(index)}
        upTodo={(index) => props.upTodo(index)}
        downTodo={(index) => props.downTodo(index)}
      />
      <TodoAdd addTodo={() => props.addTodo()} />
      <article className="send">
        <TodoSend sendTodos={() => props.sendTodos()}></TodoSend>
      </article>
    </section>
  );
}