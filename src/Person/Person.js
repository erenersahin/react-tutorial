import React from 'react';
import './Person.css';

const person = (props) => {
    return (
    <div className="Person">
        <p onClick={props.click}>I'm {props.name} and {props.age} years old! {props.children}</p>
        {/* <p>{props.children}</p> */}
        <input 
        type="text" 
        // 
        onChange={props.changed}
        // to see the current state!!
        value={props.name} />
    </div>
    )
};

export default person;