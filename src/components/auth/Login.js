import React, { Component } from "react"
import UserManager from "../../modules/UserManager";
import Alert from 'react-bootstrap/Alert'
import "./WelcomePage.css"
class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleLogin = (evt) => {
        evt.preventDefault()
        UserManager.checkUser(this.state.email, this.state.password)
        .then(results=>{
            if(results.length>0) {
                sessionStorage.setItem("activeUser", results[0].id)
                this.props.history.push("/collection");
            } else {
                Alert("Incorrect email or password") 
            } 
        })
    }

    render() {
        return (
            <form className="login-form" onSubmit={this.handleLogin}>
                <fieldset>
                    <div className="formgrid-login">
                        <input onChange={this.handleFieldChange} type="email"
                            id="email"
                            placeholder="peterparker@mail.com"
                            required="" autoFocus="" />
                        <label htmlFor="inputEmail"></label>
                        <br></br>
                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="*******"
                            required="" />
                        <label htmlFor="inputPassword"></label>
                    </div>
                    <button className='login-btn' type="submit">
                        ENTER
            </button>
                </fieldset>
            </form>
        )
    }
}


export default Login