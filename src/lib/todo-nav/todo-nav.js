import React from "react";
import "./todo-nav.css";
import ListGroup from "react-bootstrap/ListGroup";
import { TodoListAdd } from "../todo-list-add/todo-list-add";
import { Link } from "react-router-dom";

export function TodoNav(props) {
  return (
    <section>
      <ListGroup>
        {props.todoList.map((list, index) => {
          return (
            <Link to={`/todo/${list.id}`} key={index}>
              <ListGroup.Item action key={index}>
                {list.name}
              </ListGroup.Item>
            </Link>
          );
        })}
      </ListGroup>
      <div className="list-add text-center">
        <TodoListAdd
          addListTodo={(value) => props.addListTodo(value)}
        ></TodoListAdd>
      </div>
    </section>
  );
}
