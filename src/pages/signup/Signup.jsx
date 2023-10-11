import React from "react";
import "./signup.css"
import Textbox from "../../component/inputBox/Textbox";
import Button from "../../component/button/Button";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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
            navigate("/")
        }).catch(err =>{
            alert(err?.response?.data?.message)
        })
    }

    return(
        <div className="signup-container">
            <h1>SIGN-UP</h1>
            <Textbox label="First Name" name="firstName" value={signupDetails.firstName} details = {signupDetails} setDetails = {setSignupDetails}></Textbox>
            <Textbox label="Last Name" name="lastName" value={signupDetails.lastName} details = {signupDetails} setDetails = {setSignupDetails}></Textbox>
            <Textbox label="email" name="email" value={signupDetails.email} details = {signupDetails} setDetails = {setSignupDetails}></Textbox>
            <Textbox label="phone" name="phone" value={signupDetails.phone} details = {signupDetails} setDetails = {setSignupDetails}></Textbox>
            <Textbox label="password" name="password" value={signupDetails.password} details = {signupDetails} setDetails = {setSignupDetails}></Textbox>
            <Link to= "/">already Resigtered?</Link>
            <Button name = "save yourself" clickEvent={handleSignup} />
        </div>
    )
}

export default Signup;