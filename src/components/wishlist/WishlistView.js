import React, { Component } from 'react'
import WishlistList from './WishlistList'
import './WishlistView.css'

export default class WishlistView extends Component {
    render() {
        return (
            <>
                <div className='wishlist-background-img'>
                    <WishlistList />
                </div>
            </>
        )
    }
}