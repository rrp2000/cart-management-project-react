import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

let ShowNavbar = ({children}) =>{
    let location = useLocation();
    let [show, setShow] = useState(true);
    useEffect(()=>{
        if(location?.pathname === "/" || location?.pathname === "/signup"){
            setShow(false)
        }
        else{
            setShow(true)
        }
    },[location])
    return(
        <div>
            {show && children}
        </div>
    )
}

export default ShowNavbar;