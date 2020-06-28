import React from 'react';
import './todo-add.css';
import Button from 'react-bootstrap/Button';

export function TodoAdd(props) {
    return (
        <Button variant="primary" onClick={props.addTodo} type="submit">
            Add
        </Button>
    ); 
}