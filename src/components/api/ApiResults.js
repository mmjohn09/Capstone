import React, { Component } from 'react'

export default class ApiResults extends Component {

   state = {
            comics: [],
            isLoaded: false,
        }
    

    componentDidMount() {

        fetch('https://cors-anywhere.herokuapp.com/http://comicvine.gamespot.com/api/issues?api_key=29f523a340e2f41efd60b3cbcfb936da5fbba4d2&format=json')
            .then(result => result.json())
            .then(results => {
                this.setState({
                    isLoaded: true,
                    comics: results
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
                    <ul>
                        {this.state.comics.map(comic => (
                            <li key={comic.id}>
                                Title: {comic.name}
                            </li>
                        ))}
                    </ul>
            )
        }
    }
}
