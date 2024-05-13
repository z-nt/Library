import React from "react";
import ReactDOM from 'react-dom/client';

import Home from "./pages/Home";
import { Navigate, useNavigate } from "react-router-dom";
import './out.css';


function Loding(){
    const handelSubmit = (e)=>{
        e.preventDefault();
        Navigate('/contacts');
    }



    return(
        <>
            <div className="container">
                 <div className="logo_container">
                        <h1>Library</h1>
                 </div>
                 <div className="login_container">
                     <div className="logo"></div>
                     <form className="login" onSubmit={handelSubmit} >
                        <input  className="  user_input  username"   id="username"  placeholder="username..." />
                        <input  className="  user_input  password"   id="password"  placeholder="password..."/>
                        <div className="box-buttons">
                             <input  type="submit" className="submit"  id="submit" value={"submit"}/>
                        </div>
                     </form>
                 </div>
            </div>
        </>
    )
}
export default Loding;