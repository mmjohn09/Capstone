import React, { Component } from 'react'
import './CollectionAdd.css'
import CollectionManager from '../modules/CollectionManager';
import { Link } from "react-router-dom"



class CollectionAdd extends Component {

  state = {
    volumes: [],
    searchInput: "",
    small_url: "",
    name: "",
    publisher: "",
    start_year: "",
    issues: [],
    volumeId: "",
    isLoaded: false
  }

  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)

  }

  getVolumeByName = (evt) => {
    evt.preventDefault()
    fetch(`https://cors-anywhere.herokuapp.com/http://comicvine.gamespot.com/api/volumes?limit=100&api_key=29f523a340e2f41efd60b3cbcfb936da5fbba4d2&filter=name:${this.state.searchInput}&format=json`)
      .then(data => data.json())
      .then(volumes => {
        this.setState({
          isLoaded: true,
          volumes: volumes.results
        })
      })
  }

  getIssueByVolume = (evt) => {
    evt.preventDefault()
    const volumeId = parseInt(evt.target.id.split("--")[1])
    // console.log(volumeId)
    fetch(`https://cors-anywhere.herokuapp.com/http://comicvine.gamespot.com/api/issues/?api_key=29f523a340e2f41efd60b3cbcfb936da5fbba4d2&filter=volume:${volumeId}&format=json`)
      .then(data => data.json())
      .then(issues => {
        console.log(issues)
        this.setState({
          isLoaded: true,
          issues: issues.results
        })
      })
  }

  

  render() {
    return (
      <>

        <div>
          <fieldset className="search-field">
            <h5>Add to your lists</h5>
            <div className="formgrid">
              <input onChange={this.handleFieldChange} type="text"
                id="searchInput"
                placeholder="e.g. Superman"
                required="" autoFocus="" />
              <label htmlFor="searchInput"></label>

            </div>
            <button type="button"
              onClick={this.getVolumeByName}>
                SEARCH
          </button>
          </fieldset>
        </div>

        <div className='card-container'>
          <div className="row hidden-md-up">
            {this.state.volumes.map(volume => (
              
                <div className="card-block" key={volume.id}>
                  <img className='card-img-top' src={volume.image.small_url} alt="" />
                  <div className='card-body'>
                    <p className='card-title'>{volume.name}</p>
                    <p className='card-content'>
                      Number of Issues: {volume.count_of_issues}<br></br>
                      Publisher: {volume.publisher.name}<br></br>
                      First Published: {volume.start_year}</p>

                      <Link to={`/volumes/${volume.id}`}><button className='volume-details-btn'id={`searchResultImg--${volume.id}`}>See All Issues</button></Link>
                    
                  </div>
                </div>
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default CollectionAdd