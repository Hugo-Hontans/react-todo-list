import React from 'react';
import './todo-remove.css';
import Button from 'react-bootstrap/Button';
import { FaTrash } from "react-icons/fa";


export function TodoRemove(props) {
    return (
        <Button className="remove-button" variant="danger" onClick={props.removeTodo}>
            <FaTrash />
        </Button>
    ); 
}