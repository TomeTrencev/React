import React from 'react';

export function Welcome(props) {
     console.log(props);
    return (
        <div className='Welcome'>
            <p>Hi and Welcome to my App your name is {props.name} {props.lastName}</p>
            <p>Age: {props.godini}</p>
        </div>
    )
}