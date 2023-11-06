import React from "react";
import "../styles/login.css";

const Login = () =>{
    return (
        <div className="logincontainer">
            <h2>Login </h2>
            <div>
                <input type="emaol" name="email" placeholder="Email"/>
            </div>
            <div>
                <input type="password" name="Password" placeholder="Password"/>
            </div>
            <button>Login</button>
            <button className="link">Register here</button>
        </div>
    );
}

export default Login;