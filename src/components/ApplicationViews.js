import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from "react";
import Welcome from './welcome/WelcomePage'
import Registration from './auth/Registration'
import Login from './auth/Login'
import MessageList from './messages/MessageList'
import MessageAddForm from './messages/MessageAddForm'
import MessageEditForm from './messages/MessageEditForm'

export default class ApplicationViews extends Component {
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    render() {
        return (
            <>
                <Route exact path='/' component={Welcome} />

                <Route path='/registration' component={Registration} />

                <Route path='/login' component={Login} />

                <Route exact path="/messages" render={props => {
                    if (this.isAuthenticated()) {
                        return <MessageList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route path="/messages/new" render={(props) => {
                    return <MessageAddForm {...props} />
                }} />

                <Route path="/messages/:messageId(\d+)/edit" render={props => {
                    return <MessageEditForm {...props} />
                }}
                />
            </>
        )
    }
}