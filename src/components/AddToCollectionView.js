import React, { Component } from 'react'
import CollectionAdd from './CollectionAdd';
import Navbar from './nav/Navbar.js'

export default class AddToCollectionView extends Component {
    render() {
        return (
            <>
            <Navbar />
             <CollectionAdd />   
            </>
        )
    }
}

  
