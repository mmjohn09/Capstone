import React, { Component } from 'react'
import WishlistManager from '../modules/WishlistManager'
import './CollectionAdd.css'

export default class WishlistList extends Component {

    state = {
        volumes: [],
        issues: [],
        entries: [],
        isLoaded: false,
    }

    activeUser = parseInt(sessionStorage.getItem("activeUser"))
    componentDidMount() {
        WishlistManager.getAllWishlistItems(this.activeUser)
            .then((entries) => {
                this.setState({
                    entries: entries
                })
            })
    }

    deleteWishlistItem = id => {
        WishlistManager.deleteWishlistItem(id)
            .then(() => {
                WishlistManager.getAllWishlistItems(this.loggedInUser)
                    .then((newWishlist) => {
                        this.setState({
                            entries: newWishlist
                        })
                    })
            })
    }

    render() {

        return (
            <div className='card-container'>
                <div className='row hidden-md-up'>
                    {this.state.entries.map(entry => (
                        <div className='card-block' key={entry.id}>
                            <img className='card-img-top' src={entry.image.small_url} alt="" />
                            <div className='card-body'>
                                <h2 className='card-title'>{entry.name}</h2>
                                <div>
                                    
                                    <div><button type="button" className='glyphicon glyphicon-trash' onClick={this.deleteWishlistItem}>Delete</button></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}


