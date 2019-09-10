import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from "react";
import Welcome from './welcome/WelcomePage'

export default class ApplicationViews extends Component {
    // isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    render() {
        return (
            <>
                <Route exact path='/' component={Welcome} / >
            </>
        )
    }
}