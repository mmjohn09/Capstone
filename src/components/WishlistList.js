import React, { Component } from 'react'
import WishlistManager from '../modules/WishlistManager'
import './CollectionAdd.css'

export default class WishlistList extends Component {

    state = {
        wishlist: [],
        isLoaded: false,
    }

    activeUser = parseInt(sessionStorage.getItem("activeUser"))
    componentDidMount() {
        WishlistManager.getAllWishlistItems(this.activeUser)
            .then((wishlist) => {
                this.setState({
                    wishlist: wishlist
                })
            })
    }

    deleteWishlistItem = id => {
        WishlistManager.deleteWishlistItem(id)
            .then(() => {
                WishlistManager.getAllWishlistItems(this.loggedInUser)
                    .then((newWishlist) => {
                        this.setState({
                            wishlist: newWishlist
                        })
                    })
            })
    }

    render() {
        return (
            <div className='card-container'>
                <div className='row hidden-md-up'>
                    {this.state.wishlist.map(wishlist => (
                        <div className='card-block' key={wishlist.id}>
                            <img className='card-img-top' src={wishlist.coverImg} alt="" />
                            <div className='card-body'>
                                {/* <h2 className='card-title'>{entry.name}</h2> */}
                                <div>
                                    <div><button type="button" className='move-to-collection-btn'>Move to Collection</button></div>
                                    <div><button type="button" className='delete-btn' onClick={this.deleteWishlistItem}>Delete</button></div>
                                    <div><button type="button" className='details-btn'>Details</button></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}



