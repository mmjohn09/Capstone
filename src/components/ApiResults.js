import React, { Component } from 'react'
import TitleSearch from './TitleSearch';
import CollectionManager from '../modules/CollectionManager'
import './TitleSearch.css'


export default class ApiResults extends Component {

    state = {
        comics: [],
        volumes: [],
        entries: [],
        isLoaded: false,
    }


    activeUser = parseInt(sessionStorage.getItem("activeUser"))
    componentDidMount() {
        console.log("Event LIST: ComponentDidMount");
        //getAll from CollectionManager and hang on to that data; put it in state
        CollectionManager.getAllEntries(this.activeUser)
            .then((entries) => {
                this.setState({
                    entries: entries
                })
            })
    }

    // getVolumeIssues(userSearch) {

    //     fetch(`https://cors-anywhere.herokuapp.com/http://comicvine.gamespot.com/api/volumes?limit=100&api_key=29f523a340e2f41efd60b3cbcfb936da5fbba4d2&filter=name:${userSearch}&format=json`)
    //         .then(result => result.json())
    //         .then(volumes => {
    //             this.setState({
    //                 isLoaded: true,
    //                 volumes: volumes.results
    //             })
    //         })
    // }

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

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

}
