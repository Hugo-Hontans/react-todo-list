import React from "react";
import "./todo-move.css";
import Button from "react-bootstrap/Button";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export function TodoMove(props) {
  if (props.position === "first") {
    return (
      <span>
        <Button className="right" variant="secondary" onClick={props.downTodo}>
          <FaArrowDown />
        </Button>
      </span>
    );
  } else if (props.position === "last") {
    return (
      <span>
        <Button className="right" variant="secondary" onClick={props.upTodo}>
          <FaArrowUp />
        </Button>
      </span>
    );
  } else {
    return (
      <span>
        <Button variant="secondary" onClick={props.upTodo}>
          <FaArrowUp />
        </Button>
        <Button className="right" variant="secondary" onClick={props.downTodo}>
          <FaArrowDown />
        </Button>
      </span>
    );
  }
}
