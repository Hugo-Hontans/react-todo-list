import React, { useState } from 'react';
import "./todo-view.css";
import { TodoList } from "../todo-list/todo-list.js";
import { TodoAdd } from "../todo-add/todo-add";
import { TodoRemove } from "../todo-remove/todo-remove";
import { useParams, Redirect } from "react-router-dom";
import { FormGroup, FormControl } from "react-bootstrap";
import { TodoNameEdit } from '../todo-name-edit/todo-name-edit.';

export function TodoView(props) {
  let { id } = useParams();
  let currentTodo = props.todos.find(todo => todo.id === id);
  let [isTitle, setIsTitle] = useState(true);


  const changeName = () => setIsTitle(!isTitle);

  const handleChange = (event) => {
    props.todoNameOnChange(event.target.value, currentTodo.id);
  }

  if (!currentTodo) {
    return (<Redirect to='/home' />);
  }
  return (
    <div>
      <div className="title row justify-content-center align-items-center">
        {
          isTitle
          ? <h1 className="todo-name">{currentTodo.name}</h1>
          : (<FormGroup className="col-6 col-lg-5 todo-group">
              <FormControl
                type="text"
                value={currentTodo.name}
                onChange={handleChange}
              />
            </FormGroup>)
        }
        <TodoNameEdit changeName={changeName}></TodoNameEdit>
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