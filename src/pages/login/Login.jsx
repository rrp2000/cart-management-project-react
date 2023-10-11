import React from "react";
import Textbox from "../../component/inputBox/Textbox";
import Button from "../../component/button/Button";
import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./login.css"

let Login = (props) =>{
      let navigate = useNavigate();

    let  [loginDetails, setLoginDetails] = useState({
        email:"",
        password:""
    })

    let handleSignup = () => {
        console.log(loginDetails)
        axios.post("user/login",loginDetails).then(res => {
            console.log(res?.data?.message);
            localStorage.setItem("jwt",res?.data?.payload?.jwt)
            navigate("/dashboard")
        }).catch(err =>{
            alert(err?.response?.data?.message)
        })
    }
    return(
        <div className="login-container">
             <h1>LOG-IN</h1>
            <Textbox label="email" name="email" value={loginDetails.email} details = {loginDetails} setDetails = {setLoginDetails}></Textbox>
            <Textbox label="password" name="password" value={loginDetails.password} details = {loginDetails} setDetails = {setLoginDetails}></Textbox>
            <Link to= "/signup">Not Resigtered?</Link>
            <Button name = "Login" clickEvent={handleSignup} />
        </div>
    )
}

export default Login;