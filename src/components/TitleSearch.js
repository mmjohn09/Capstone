import React, { Component } from 'react'


class TitleSearch extends Component {

  state = {
    volumes: [],
    isLoaded: false,
    searchInput: ""
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




  render() {

    // const { isLoaded} = this.state;

    // if (!isLoaded) {
    //   return <div>Loading...</div>;
    // }

    // else {

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
                  <img className='card-img-top' src={volume.image.thumb_url} onClick={() => this.getVolumeByName(volume.name)} />
                  <div className='card-body'>
                    <h5 className='card-title'>{volume.name}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )
    }
  // }




}

export default TitleSearch