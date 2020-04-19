import React from 'react';
import './todo-remove.css';

export function TodoRemove(props) {
    return (
        <button onClick={props.removeTodo}>
            X
        </button>
    ); 
}