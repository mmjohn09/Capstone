import React, { Component } from 'react'
import CollectionManager from '../modules/CollectionManager'
import './IssueDetailAdd.css'
import StarRatingComponent from 'react-star-rating-component';
import './Captain-Shield-512.png'

class AddDetailsForm extends Component {
    //set the initial state
    state = {
        collection: [],
        title: '',
        volume: '',
        issueNumber: '',
        description: '',
        publishDate: '',
        coverImg: '',
        rating: 0,
        condition: '',
        notes: '',
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }

    updateCollectionDetails = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedCollectionObject = {
            id: this.props.match.params.collectionId,
            condition: this.state.condition,
            rating: this.state.rating

        };

        CollectionManager.updateCollectionDetails(editedCollectionObject)
            .then(() => this.props.history.push(`/collection/${this.props.match.params.collectionId}`))
    }



    render() {
        const { rating } = this.state;
        return (
            <>
                <form>
                    {/* <h2 className='form__heading'>Add some details...</h2> */}
                    <fieldset>
                        <div className='issue-detail-form'>
                            <h4>How would you rate this title?</h4>
                            <div className='stars'>
                                <StarRatingComponent className='rating-input'
                                    name="rate1"
                                    starCount={5}
                                    // renderStarIcon={() => <span><img src="Captain-Shield-512.png"></img></span>}
                                    starColor={"#ffd700"}
                                    emptyStarColor={"#d3d3d3"}
                                    value={rating}
                                    onStarClick={this.onStarClick.bind(this)}
                                />
                            </div>
                            <h4 className='condition-label'>What is the condition of your item?</h4>
                            <select className='dropdown' onChange={this.handleFieldChange}
                                id='condition'
                                value={this.state.condition}>
                                <option value="EXCELLENT">Excellent</option>
                                <option value="GOOD">Good</option>
                                <option value="FAIR">Fair</option>
                                <option value="POOR">Poor</option>
                                
                            </select>
                            
                            {/* <input className='condition-input'
                                type='text'
                                required
                                placeholder='What is the condition of your item?'
                                onChange={this.handleFieldChange}
                                id='condition'
                                value={this.state.condition}
                            /> */}

                        </div>
                        <div className='save-edits-btn'>
                            <button
                                type='button' disabled={this.state.loadingStatus}
                                onClick={this.updateCollectionDetails}
                                className='save-edit'
                            >Save</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default AddDetailsForm