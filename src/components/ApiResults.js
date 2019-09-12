import React, { Component } from 'react'

export default class ApiResults extends Component {

    state = {
        comics: [],
        isLoaded: false,
    }


    componentDidMount() {

        fetch('https://cors-anywhere.herokuapp.com/http://comicvine.gamespot.com/api/volumes?limit=20&api_key=29f523a340e2f41efd60b3cbcfb936da5fbba4d2&format=json')
            .then(result => result.json())
            .then(results => {
                this.setState({
                    isLoaded: true,
                    comics: results.results
                })
            })
    }

    render() {

        const { isLoaded, comics } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>;
        }

        else {
            return (
                <div className='card-deck-wrapper'>
                    <div className='card-deck'>
                        {this.state.comics.map(comic => (
                            <div className='card' key={comic.id}>
                                <img className='card-img-top' src={comic.image.thumb_url} />
                                <div className='card-body'>
                                    <h5 className='card-title'>{comic.name}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
    }
}
