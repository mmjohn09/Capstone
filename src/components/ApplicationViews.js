import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from "react";
import Welcome from './auth/WelcomePage'
import Registration from './auth/Registration'
import Login from './auth/Login'
import ApiResults from './api/ApiResults'


export default class ApplicationViews extends Component {
   isAuthenticated = () => sessionStorage.getItem("credentials") !== null
        render() {
           return (
              <>
                <Route exact path='/' render={props => {
                return <Welcome {...props} />
                }} />

                <Route exact path='/registration' render={props => {
                return <Registration {...props} />
                }} />
                                
                <Route exact path='/login' render={props => {
                return <Login {...props} />
                }} />

                <Route exact path='/collection/' render={props => {
                        return <ApiResults {...props} />
                }} />
              </>
        )
     }
}