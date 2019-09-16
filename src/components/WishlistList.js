import React, { Component } from 'react'
import CollectionManager from '../modules/CollectionManager'
import './CollectionAdd.css'



export default class WishlistList extends Component {

    state = {
        wishlistEntries: [],
        isLoaded: false,
    }

    activeUser = parseInt(sessionStorage.getItem("activeUser"))
    componentDidMount() {
        CollectionManager.getAllWishlistItems(this.activeUser)
            .then((wishlistEntries) => {
                this.setState({
                    wishlistEntries: wishlistEntries
                })
            })
    }

    render() {

        return (
            <div className='card-deck-wrapper'>
                <div className='card-deck'>
                    {this.state.wishlistEntries.map(wishlistEntry => (
                        <div className='card' key={entry.id}>
                            <img className='card-img-top' src={wishlistEntry.image.small_url} />
                            <div className='card-body'>
                                <h2 className='card-title'>{wishlistEntry.name}</h2>
                                <p className='card-content'>
                                    Number of Issues: {wishlistEntry.count_of_issues}<br></br>
                                    Publisher: {wishlistEntry.publisher.name}<br></br>
                                    First Published: {wishlistEntry.start_year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
