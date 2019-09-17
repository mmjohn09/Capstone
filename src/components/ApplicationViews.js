import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from "react";
import Welcome from './auth/WelcomePage'
import Registration from './auth/Registration'
import Login from './auth/Login'
import TitleSearch from './CollectionAdd'
import VolumeDetail from './VolumeDetails'
import CollectionList from "./CollectionList";



export default class ApplicationViews extends Component {
        isAuthenticated = () => sessionStorage.getItem("credentials") !== null
        render() {
                return (
                        <>

                                <Route exact path='/welcome' render={props => {
                                        return <Welcome {...props} />
                                }} />

                                <Route exact path='/registration' render={props => {
                                        return <Registration {...props} />
                                }} />

                                <Route exact path='/login' render={props => {
                                        return <Login {...props} />
                                }} />

                                <Route exact path='/collection' render={props => {
                                        return <CollectionList {...props} />
                                }} />

                                {/* <Route exact path='/wishlist/' render={props => {
                                        return <WishlistList {...props} />
                                }} /> */}

                                <Route exact path='/search' render={props => {
                                        return <TitleSearch {...props} />
                                }} />
                              
                                <Route path="/volumes/:volumeId(\d+)" render={(props) => {
                                        // Pass the VolumeId to the VolumeDetailComponent
                                        return <VolumeDetail {...props} volumeId={parseInt(props.match.params.volumeId)} />
                                }} /> }
                        </>
                )
        }
}