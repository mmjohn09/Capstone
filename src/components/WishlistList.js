import React, { Component } from 'react'
import WishlistManager from '../modules/WishlistManager'
import './CollectionAdd.css'
import { Link } from "react-router-dom";

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

    deleteWishlistItem = (evt, id) => {
        WishlistManager.deleteWishlistItem(id)
            .then(() => {
                WishlistManager.getAllWishlistItems(this.activeUser)
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
                                <div>
                                    <div>
                                        <button type="button" className='move-btn'>Move to Collection</button>
                                    </div>
                                    <div>
                                        <Link to={`/wishlist/${wishlist.id}`}><button type="button" className='details-btn'>Details</button></Link>
                                    </div>
                                    <div>
                                        <button type="button" className='delete-btn' onClick={(evt)=> this.deleteWishlistItem(evt, wishlist.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}



