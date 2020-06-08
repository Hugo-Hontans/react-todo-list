import React from 'react';
import './todo-send.css';

export function TodoSend(props) {
    return (
        <button onClick={props.sendTodos}>
            Send
        </button>
    ); 
}