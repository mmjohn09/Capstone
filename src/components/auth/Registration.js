import React, { Component } from "react"
import UserManager from "../../modules/UserManager";
import "./WelcomePage.css"

class Registration extends Component {

    // Set initial state
    state = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Save new user to database
    createNewUser = evt => {
        evt.preventDefault();
        UserManager.getAllUsers()
            .then(parsedUsers => {
                if (parsedUsers.find(user => user.username.toLowerCase() === this.state.username.toLowerCase())) {
                    alert("Username already exists")
                } else if (parsedUsers.find(user => user.email.toLowerCase() === this.state.email.toLowerCase())) {
                    alert("Email already exists")
                    console.log(this.state.email)
                } else if (this.state.password !== this.state.confirmPassword){
                    alert("Passwords dont match")
                } else if (this.state.username === "" || this.state.email === "" || this.state.password === "") {
                    alert("Please fill out all fields")
                } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))) {
                    alert("Please enter a valid email address")
                }
                else {
                    // this.setState({ loadingStatus: true });
                    const user = {
                        username: this.state.username,
                        email: this.state.email,
                        password: this.state.password
                    };


                    // Create the user and redirect user to news
                    UserManager.createNewUser(user)
                        .then(() => this.props.history.push("/search"));
                }
            })
        }


        render() {
            return (
                <form>
                    <fieldset>
                        <div className="formgrid-registration">
                            <input onChange={this.handleFieldChange} type="text"
                                id="username"
                                placeholder="Username"
                                required="" autoFocus="" />
                            <label htmlFor="inputUsername"></label>

                            <input onChange={this.handleFieldChange} type="email"
                                id="email"
                                placeholder="Email address"
                                required="" />
                            <label htmlFor="inputEmail"></label>

                            <input onChange={this.handleFieldChange} type="password"
                                id="password"
                                placeholder="Password"
                                required="" />
                            <label htmlFor="inputPassword"></label>

                            <input onChange={this.handleFieldChange} type="password"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                required="" />
                            <label htmlFor="inputPassword"></label>
                        </div>
                        <button className='submit-btn' onClick={this.createNewUser} type="submit">
                            SUBMIT
                    </button>
                    </fieldset>
                </form>
            )
        }

    }
    export default Registration


