import React from "react";
import "./todo-move.css";
import Button from "react-bootstrap/Button";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export function TodoMove(props) {
  return (
    <span>
      <Button variant="secondary" onClick={props.upTodo}>
        <FaArrowUp />
      </Button>
      <Button className="down" variant="secondary" onClick={props.downTodo}>
        <FaArrowDown />
      </Button>
    </span>
  );
}
