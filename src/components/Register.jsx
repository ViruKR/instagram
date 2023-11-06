import React from "react";
import "../styles/register.css";


const Register = () =>{
    return (
        <div className="registercontainer">
            <h2>Registration</h2>
            <div>
                <input type="email" name="email" placeholder="Email"/>
            </div>
            <div>
                <input type="password" name="password" placeholder="Password"/>
            </div>
            <button>Registration</button>
            <button className="link">Login here</button>
        </div>
    );
}

export default Register;