import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./home.css"
import Button from '../../component/button/Button';

const Home = ()=>{
    let navigate = useNavigate();
    return(
        <div className='home-container'>
            <h1>Hello people</h1>
            <div className='button-container'>
                <Button name = "Login" clickEvent={()=>navigate("/login")}/>
                <Button name = "Signup" clickEvent={()=>navigate("/signup")}/>
            </div>
        </div>
    )
}

export default Home;