import { Route, withRouter, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Welcome from './auth/WelcomePage';
import Registration from './auth/Registration';
import Login from './auth/Login';
import VolumeDetail from './VolumeDetails';
import AddToCollectionView from './AddToCollectionView';
import CollectionView from './CollectionView';
import WishlistView from './WishlistView';
import IssueDetail from './IssueDetail'
import WishlistDetail from './WishlistIssueDetail'
import AddDetailsForm from './AddDetailsForm'




export default class ApplicationViews extends Component {
	isAuthenticated = () => sessionStorage.getItem("activeUser") !== null
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
					if (this.isAuthenticated()) {
						return <CollectionView {...props} />
					} else {
						return <Redirect to='/welcome' />
					}
				}} />

				<Route exact path="/collection/:collectionId(\d+)" render={(props) => {
					return <IssueDetail {...props} collectionId={parseInt(props.match.params.collectionId)} />
				}} />

				<Route
					path="/collection/:collectionId(\d+)/details" render={props => {
						return <AddDetailsForm {...props} />
					}}
				/>


				<Route exact path='/wishlist' render={props => {
					if (this.isAuthenticated()) {
						return <WishlistView {...props} />
					} else {
						return <Redirect to='/welcome' />
					}
				}} />

				<Route path="/wishlist/:wishlistId(\d+)" render={(props) => {
					return <WishlistDetail {...props} wishlistId={parseInt(props.match.params.wishlistId)} />
				}} />

				<Route exact path='/search' render={props => {
					if (this.isAuthenticated()) {
						return <AddToCollectionView {...props} />
					} else {
						return <Redirect to='/welcome' />
					}
				}} />

				<Route path='/volumes/:volumeId(\d+)' render={props => {
					return <VolumeDetail {...props} volumeId={parseInt(props.match.params.volumeId)} />
				}} />
			</>
		)
	}
}

