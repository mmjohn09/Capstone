import React, { Component } from 'react'
import CollectionManager from '../modules/CollectionManager'
import './CollectionAdd.css'
import { Link } from "react-router-dom";


export default class CollectionList extends Component {

    state = {
        collection: [],
        isLoaded: false,
    }

    activeUser = parseInt(sessionStorage.getItem("activeUser"))
    componentDidMount() {
        CollectionManager.getAllCollectionItems(this.activeUser)
            .then((collection) => {
                this.setState({
                    collection: collection
                })
            })
    }

    deleteCollectionItem = (evt, id) => {
        CollectionManager.deleteCollectionItem(id)
            .then(() => {
                CollectionManager.getAllCollectionItems(this.activeUser)
                    .then((newCollection) => {
                        this.setState({
                            collection: newCollection
                        })
                    })
            })
    }

    render() {
        return (
            <div className='card-container'>
                <div className='row hidden-md-up'>
                    {this.state.collection.map(collection => (
                        <div className='card-block' key={collection.id}>
                            <img className='card-img-top' src={collection.coverImg} alt="" />
                            <div className='card-body'>
                                <div>
                                    <div className='card-btns'>
                                        <Link to={`/collection/${collection.id}`}><button type='button' className='details-btn'>Details</button></Link></div>
                                    <button type="button" className='delete-btn' onClick={(evt)=> this.deleteCollectionItem(evt, collection.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

