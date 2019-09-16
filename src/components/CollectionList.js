import React, { Component } from 'react'
import CollectionManager from '../modules/CollectionManager'
import './CollectionAdd.css'

export default class CollectionList extends Component {

    state = {
        volumes: [],
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
            <div className='card-deck-wrapper'>
                <div className='card-deck'>
                    {this.state.entries.map(entry => (
                        <div className='card' key={entry.id}>
                            <img className='card-img-top' src={entry.image.small_url} />
                            <div className='card-body'>
                                <h2 className='card-title'>{entry.name}</h2>
                                <p className='card-content'>
                                    Number of Issues: {entry.count_of_issues}<br></br>
                                    Publisher: {entry.publisher.name}<br></br>
                                    First Published: {entry.start_year}</p>
                                <div>
                                    <span>Condition:<select>
                                        <option value="excellent">Excellent</option>
                                        <option value="good">Good</option>
                                        <option value="fair">Fair</option>
                                        <option value="poor">Poor</option>
                                    </select></span>
                                    <div><button type="button" onClick={this.deleteCollectionItem}>Delete</button></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
