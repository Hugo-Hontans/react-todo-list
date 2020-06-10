import React from "react";
import "./todo-move.css";
import Button from "react-bootstrap/Button";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export function TodoMove(props) {
  return (
    <div className="group">
      {
        props.position !== 'first'
        ? (<Button className="arrow" size="sm" variant="secondary" onClick={props.upTodo}>
            <FaArrowUp />
          </Button>)
        : null
      }
      {
        props.position !== 'last'
        ? (<Button className="arrow" size="sm" variant="secondary" onClick={props.downTodo}>
            <FaArrowDown />
          </Button>)
        : null
      }
    </div>
  )
}
