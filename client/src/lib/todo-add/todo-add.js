import React from 'react';
import './todo-add.css';
import Button from 'react-bootstrap/Button';

export function TodoAdd(props) {
    return (
        <Button variant="primary" onClick={props.addTodo}>
            Add
        </Button>
    ); 
}