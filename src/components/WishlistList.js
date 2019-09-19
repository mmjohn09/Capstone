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
                                    <div className='card-btns'>
                                        <Link to={`/wishlist/${wishlist.id}`}><button type="button" className='details-btn'>Details</button></Link>
                                        <button type="button" className='delete-btn' onClick={(evt) => this.deleteWishlistItem(evt, wishlist.id)}>Delete</button>
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



