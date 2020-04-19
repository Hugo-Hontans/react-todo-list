import React from 'react';
import './todo-add.css';

export function TodoAdd(props) {
    return (
        <button onClick={props.addTodo}>
            Add
        </button>
    ); 
}