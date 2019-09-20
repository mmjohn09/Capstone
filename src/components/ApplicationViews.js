import { Route, withRouter, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Welcome from './auth/WelcomePage';
import Registration from './auth/Registration';
import Login from './auth/Login';
import VolumeDetail from './VolumeDetails';
import AddToCollectionView from './collection/AddToCollectionView';
import CollectionView from './collection/CollectionView';
import WishlistView from './wishlist/WishlistView';
import IssueDetail from './IssueDetail'
import WishlistDetail from './wishlist/WishlistIssueDetail'
import AddDetailsForm from './AddDetailsForm'

export default class ApplicationViews extends Component {
	isAuthenticated = () => sessionStorage.getItem("activeUser") !== null
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

				<Route exact path='/collection' render={props => {
					if (this.isAuthenticated()) {
						return <CollectionView {...props} />
					} else {
						return <Redirect to='/' />
					}
				}} />

				<Route exact path="/collection/:collectionId(\d+)" render={(props) => {
					if (this.isAuthenticated()) {
						return <IssueDetail {...props} collectionId={parseInt(props.match.params.collectionId)} />
					} else {
						return <Redirect to='/' />
					}

				}} />

				<Route path="/collection/:collectionId(\d+)/details" render={props => {
					if (this.isAuthenticated()) {
						return <AddDetailsForm {...props} />
					} else {
						return <Redirect to='/' />
					}
				}}
				/>

				<Route exact path='/wishlist' render={props => {
					if (this.isAuthenticated()) {
						return <WishlistView {...props} />
					} else {
						return <Redirect to='/' />
					}
				}} />

				<Route path="/wishlist/:wishlistId(\d+)" render={(props) => {
					if (this.isAuthenticated()) {
						return <WishlistDetail {...props} wishlistId={parseInt(props.match.params.wishlistId)} />
					} else {
						return <Redirect to='/' />
					}
				}} />


				<Route exact path='/search' render={props => {
					if (this.isAuthenticated()) {
						return <AddToCollectionView {...props} />
					} else {
						return <Redirect to='/' />
					}
				}} />

				<Route path='/volumes/:volumeId(\d+)' render={props => {
					if (this.isAuthenticated()) {
						return <VolumeDetail {...props} volumeId={parseInt(props.match.params.volumeId)} />
					} else {
						return <Redirect to='/' />
					}
				}} />
			</>
		)
	}
}

