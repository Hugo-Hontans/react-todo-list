import React from "react";
import "./todo-nav.css";
import ListGroup from "react-bootstrap/ListGroup";
import { TodoListAdd } from "../todo-list-add/todo-list-add";
import { NavLink, useLocation } from "react-router-dom";

export function TodoNav(props) {
  const { pathname } = useLocation();
  return (
    <section>
      <ListGroup>
        {props.todoList.map((list, index) => {
          return (
            <NavLink to={`/todo/${list.id}`} key={index}>
              <ListGroup.Item action key={index} active={pathname === `/todo/${list.id}`}>
                {list.name}
              </ListGroup.Item>
            </NavLink>
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
