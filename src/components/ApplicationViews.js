import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from "react";
import Welcome from './auth/WelcomePage'
import Registration from './auth/Registration'
import Login from './auth/Login'
import ApiResults from './CollectionList'
import TitleSearch from './CollectionAdd'


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

                                <Route exact path='/search' render={props => {
                                        return <TitleSearch {...props} />
                                }} />
                                {/* <Route exact path="/volumes" render={(props) => {
                                        return <VolumeList />
                                }} />
                                <Route path="/volumes/:volumeId(\d+)" render={(props) => {
                                        // Pass the VolumeId to the AnimalDetailComponent
                                        return <VolumeDetails volumeId={parseInt(props.match.params.volumeId)} />
                                }} /> */}
                        </>
                )
        }
}