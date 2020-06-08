import React from 'react';
import './todo-move.css';
import Button from 'react-bootstrap/Button';

export function TodoMove(props) {
    return (
        <span>
            <Button variant="secondary"  onClick={props.upTodo}>
                up
            </Button>
            <Button className="down" variant="secondary" onClick={props.downTodo}>
                down
            </Button>
        </span>
    ); 
}