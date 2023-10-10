import React from "react";
import "./textbox.css";

const Textbox = (props) => {

    let handleChange = (event) =>{
        let {name, value} = event.target;
        props.setDetails({
            ...props.details,
            [name] : value
        })
        console.log(props.details)
    }

    return (
        <div className="input-container">
            <input onChange={handleChange} className="input-text" type="text" required='required' name={props.name}></input>
            <span>{props.label}</span>
        </div>
    )
}

export default Textbox;