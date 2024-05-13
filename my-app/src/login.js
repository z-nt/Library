import React from "react";
import './out.css';
import {Outlet,Link} from "react-router-dom";
 function Loding(){

    return(
        <>
            <div className="container">
                 <div className="logo_container">
                        <h1>Library</h1>
                 </div>
                 <div className="login_container">
                     <div className="logo"></div>
                     <form className="login" >
                        <input  className="  user_input  username"   id="username"  placeholder="username..." />
                        <input  className="  user_input  password"   id="password"  placeholder="password..."/>
                        <div className="box-buttons">
                            
                          
                            
                        </div>
                     </form>
                 </div>
            </div>
        </>
    )
}
export default Loding;