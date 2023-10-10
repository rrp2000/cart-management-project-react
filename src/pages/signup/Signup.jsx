import React from "react";
import "./signup.css"
import Textbox from "../../component/inputBox/Textbox";
import Button from "../../component/button/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    let navigate = useNavigate();

    let  [signupDetails, setSignupDetails] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    let handleSignup = () => {
        console.log(signupDetails)
        axios.post("user/signup",signupDetails).then(res => {
            console.log(res);
            alert("Sign up successful");
            navigate("/login")
        }).catch(err =>{
            alert(err?.response?.data?.message)
        })
    }

    return(
        <div className="signup-container">
            <h1>SIGN-UP</h1>
            <Textbox label="First Name" name="firstName" value={signupDetails.firstName} signupDetails = {signupDetails} setSignupDetails = {setSignupDetails}></Textbox>
            <Textbox label="Last Name" name="lastName" value={signupDetails.lastName} signupDetails = {signupDetails} setSignupDetails = {setSignupDetails}></Textbox>
            <Textbox label="email" name="email" value={signupDetails.email} signupDetails = {signupDetails} setSignupDetails = {setSignupDetails}></Textbox>
            <Textbox label="phone" name="phone" value={signupDetails.phone} signupDetails = {signupDetails} setSignupDetails = {setSignupDetails}></Textbox>
            <Textbox label="password" name="password" value={signupDetails.password} signupDetails = {signupDetails} setSignupDetails = {setSignupDetails}></Textbox>

            <Button name = "save yourself" clickEvent={handleSignup} />
        </div>
    )
}

export default Signup;