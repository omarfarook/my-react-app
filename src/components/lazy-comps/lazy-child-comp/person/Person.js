import React from 'react';

const person = (props) => {
    return (
        <li onClick={props.clicked}>
            <span>{props.name}</span>
            <span>{props.age}</span>
        </li>
    )
}

export default person;