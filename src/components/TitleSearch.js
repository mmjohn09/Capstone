import React, { Component } from 'react'
import './TitleSearch.css'
import CollectionManager from '../modules/CollectionManager';


class TitleSearch extends Component {

  state = {
    volumes: [],
    searchInput: "",
    small_url:"",
    name: "",
    publisher: "",
    start_year: "",
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
        console.log(volumes)
        this.setState({
          isLoaded: true,
          volumes: volumes.results
        })
        
      })
  }

  createNewEntry = (evt, id) => {
    evt.preventDefault()
    const selectedVolumeObject = this.state.volumes.find(volume => {
      return volume.id === id
    })
    // this.state({ isLoaded: true })
      const entry = {
        coverImg: this.state.small_url,
        title: this.state.name,
        publisher: this.state.publisher,
        date: this.state.start_year,
        userId: parseInt(sessionStorage.getItem("activeUser"))
      }

      CollectionManager.createNewEntry(selectedVolumeObject)
      .then(() => this.props.history.push("/collection"))
  }



  render() {

      return (
        <>
          <div>
            <fieldset>
              <h3>Search</h3>
              <div className="formgrid">
                <input onChange={this.handleFieldChange} type="text"
                  id="searchInput"
                  placeholder="e.g. Superman"
                  required="" autoFocus="" />
                <label htmlFor="searchInput">Search</label>

              </div>
              <button type="button"
              onClick={this.getVolumeByName}>
                Submit
          </button>
            </fieldset>
          </div>

          <div className='card-deck-wrapper'>
            <div className='card-deck'>
              {this.state.volumes.map(volume => (
                <div className='card' key={volume.id}>
                  <img className='card-img-top' src={volume.image.small_url} />
                  <div className='card-body'>
                    <h2 className='card-title'>{volume.name}</h2>
                    <p className='card-content'>
                    Number of Issues: {volume.count_of_issues}<br></br>
                    Publisher: {volume.publisher.name}<br></br>
                    First Published: {volume.start_year}</p>
                    <div>
                    <button type="button" onClick={(evt) => this.createNewEntry(evt, volume.id)}>Add to Collection</button>
                    <button type="button">Add to Wishlist</button>
                  </div>
                  </div>
                 
                </div>
              ))}
            </div>
          </div>
        </>
      )
    }
 }

export default TitleSearch