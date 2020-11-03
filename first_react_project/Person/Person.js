import React from 'react';
import './Person.css';

const person = (props) => {
return (
    <div className="Person" id="flex">
        <p onClick={props.click}>I am {props.name} and I am {props.age} years old!! {props.children}</p>
    <input type="text" placeholder="Your name" onChange={props.change} value={props.name} />
    </div>
)
};

export default person;