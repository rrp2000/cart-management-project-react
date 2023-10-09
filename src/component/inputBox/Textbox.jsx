import React from "react";
import "./textbox.css";

const Textbox = (props) => {
    return (
        <div className="input-container">
            <input className="input-text" type="text" required='required' name={props.name}></input>
            <span>{props.label}</span>
        </div>
    )
}

export default Textbox;