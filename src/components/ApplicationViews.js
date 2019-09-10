import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from "react";
import Welcome from './welcome/WelcomePage'
import Registration from './auth/Registration'
import Login from './auth/Login'

export default class ApplicationViews extends Component {
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    render() {
        return (
            <>
                <Route exact path='/' component={Welcome} / >
                <Route path='/Registration' component={Registration} />
                <Route path='/Login' component={Login} />
            </>
        )
    }
}