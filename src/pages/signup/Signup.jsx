import React from "react";
import "./signup.css"
import Textbox from "../../component/inputBox/Textbox";
import Button from "../../component/button/Button";
import { useRef } from "react";

const Signup = () => {

    let  [signupDetails, setSignupDetails] = userState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    let firstName = useRef("");
    let lastName = useRef("");
    let email = useRef("");
    let password = useRef("");
    let confirmPassword = useRef("");


    let handleSignup = () => {

    }

    return(
        <div className="signup-container">
            <h1>SIGN-UP</h1>
            <Textbox label="First Name" name="firstName"></Textbox>
            <Textbox label="Last Name" name="lastName"></Textbox>
            <Textbox label="email" name="email"></Textbox>
            <Textbox label="password" name="password"></Textbox>
            <Textbox label="confirm password" name="confirmPassword"></Textbox>

            <Button name = "save yourself" />
        </div>
    )
}

export default Signup;