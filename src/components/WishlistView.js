import React, { Component } from 'react'
import WishlistList from './WishlistList'
import Navbar from './nav/Navbar.js'

export default class WishlistView extends Component {
    render() {
        return (
            <>
                <div className='background-img'>
                    <Navbar />
                    <WishlistList />
                </div>
            </>
        )
    }
}