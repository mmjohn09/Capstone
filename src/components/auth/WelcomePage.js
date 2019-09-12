import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "../SuperShelf.css"


class Welcome extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <p className ="center">Please Log In Below</p>
                </div>
                <div className="welcome--btns">
                <Link to="/Login"><button className="login--btn">Login</button></Link>
                <Link to="/Registration"><button className="register--btn">Register New Account</button></Link> 
                </div>
            </>
        );
    }
}

export default Welcome;