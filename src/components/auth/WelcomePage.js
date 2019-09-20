import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "../ComicNook"
import "./WelcomePage.css"



class Welcome extends Component {
    render() {
        return (
            <>
            <div className='welcome-background-image'>
                <h1 className='app-name'>Comic Nook</h1>
                <div className="welcome--btns">
                    <Link to="/Login"><button className="login--btn">LOGIN</button></Link><br></br>
                    <Link to="/Registration"><button className="register--btn">REGISTER</button></Link>
                </div>
            </div>
            </>
        );
    }
}

export default Welcome;