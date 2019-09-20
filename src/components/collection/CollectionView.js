import React, { Component } from 'react'
import CollectionList from './CollectionList'
import './CollectionView.css'

export default class CollectionView extends Component {
    render() {
        return (
            <>
                <div className='collection-background-img'>
                    <CollectionList />
                </div>
            </>
        )
    }
}