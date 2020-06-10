import React from "react";
import "./todo-move.css";
import Button from "react-bootstrap/Button";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export function TodoMove(props) {
  if (props.position === "first") {
    return (
      <div className="group">
        <Button className="arrow" size="sm" variant="secondary" onClick={props.downTodo}>
          <FaArrowDown />
        </Button>
      </div>
    );
  } else if (props.position === "last") {
    return (
      <div className="group">
        <Button className="arrow" size="sm" variant="secondary" onClick={props.upTodo}>
          <FaArrowUp />
        </Button>
      </div>
    );
  } else {
    return (
      <div className="group">
        <Button className="arrow" variant="secondary" size="sm" onClick={props.upTodo}>
          <FaArrowUp />
        </Button>
        <Button className="arrow" size="sm" variant="secondary" onClick={props.downTodo}>
          <FaArrowDown />
        </Button>
      </div>
    );
  }
}
