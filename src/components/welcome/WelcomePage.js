import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "../SuperShelf.css"


class Welcome extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <h1 className ="center">Super Shelf</h1>
                    <p className ="center">Please Log In Below</p>
                </div>
                <div className="welcome--btns">
                    <button className="login--btn">Login</button>
                    <button className="register--btn">Register New Account</button>
                </div>
            </>
        );
    }
}

export default Welcome;