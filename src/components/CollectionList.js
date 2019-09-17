import React, { Component } from 'react'
import CollectionManager from '../modules/CollectionManager'
import './CollectionAdd.css'

export default class CollectionList extends Component {

    state = {
        volumes: [],
        issues: [],
        entries: [],
        isLoaded: false,
    }

    activeUser = parseInt(sessionStorage.getItem("activeUser"))
    componentDidMount() {
        //getAll from CollectionManager and hang on to that data; put it in state
        CollectionManager.getAllCollectionItems(this.activeUser)
            .then((entries) => {
                this.setState({
                    entries: entries
                })
            })
    }

    deleteCollectionItem = id => {
        CollectionManager.deleteCollectionItem(id)
            .then(() => {
                CollectionManager.getAllCollectionItems(this.loggedInUser)
                    .then((newCollection) => {
                        this.setState({
                            entries: newCollection
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
                                    <span>Condition:<select>
                                        <option value="excellent">Excellent</option>
                                        <option value="good">Good</option>
                                        <option value="fair">Fair</option>
                                        <option value="poor">Poor</option>
                                    </select></span>
                                    <div><button type="button" className='glyphicon glyphicon-trash' onClick={this.deleteCollectionItem}>Delete</button></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

