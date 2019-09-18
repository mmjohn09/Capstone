import React, { Component } from 'react'
import CollectionList from './CollectionList'
import Navbar from './nav/Navbar.js'

export default class CollectionView extends Component {
    render() {
        return (
            <>
                <div className='background-img'>
                    <Navbar />
                    <CollectionList />
                </div>
            </>
        )
    }
}