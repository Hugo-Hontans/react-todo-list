import React from 'react';
import './todo-send.css';
import Button from 'react-bootstrap/Button';


export function TodoSend(props) {
    return (
        <Button variant="success" onClick={ props.sendTodos }>Send</Button>
    ); 
}