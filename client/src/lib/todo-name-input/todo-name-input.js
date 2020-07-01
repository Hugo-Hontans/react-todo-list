import React from "react";
import "./todo-name-input.css";
import { FormGroup, FormControl } from "react-bootstrap";

export function TodoNameInput(props) {
  return (
    <FormGroup className="col-6 col-lg-5 todo-group">
      <FormControl
        type="text"
        value={props.name}
        onChange={props.handleChange}
      />
    </FormGroup>
  );
}
