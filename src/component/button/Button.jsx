import React from "react";
import "./button.css"


const Button = (props) =>{
    return(
    <button onClick={props.clickEvent}>{props.name}</button>
    )
}

export default Button;