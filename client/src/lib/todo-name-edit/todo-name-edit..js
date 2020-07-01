import React from 'react';
import './todo-name-edit.css';
import Button from 'react-bootstrap/Button';
import { FaEdit } from "react-icons/fa";

export function TodoNameEdit(props) {
    return (
        <Button size="sm" variant="secondary" onClick={props.changeName}>
            <FaEdit />
        </Button>
    ); 
}