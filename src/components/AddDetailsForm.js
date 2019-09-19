import React, { Component } from "react"
// import { withRouter } from 'react-router-dom'
import CollectionManager from "../modules/CollectionManager"
import { Rating } from 'semantic-ui-react'
import './IssueDetailAdd.css'

class AddDetailsForm extends Component {
    //set the initial state
    state = {
        collection: [],
        title: "",
        volume: "",
        issueNumber: "",
        description: "",
        publishDate: "",
        coverImg: "",
        rating: "",
        condition: "",
        notes: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateCollectionDetails = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedCollectionObject = {
            id: this.props.match.params.collectionId,
            condition: this.state.condition,
            rating: this.state.rating

        };
        console.log(editedCollectionObject)

        CollectionManager.updateCollectionDetails(editedCollectionObject)
            .then(() => this.props.history.push(`/collection/${this.props.match.params.collectionId}`))
    }



    render() {
        return (
            <>
                <form>
                    <h3>Add some details...</h3>
                    <fieldset>
                        <div className="issue-detail-form">
                            <input className="rating-input"
                                type="text"
                                required
                                placeholder="How would you rate this title?"
                                onChange={this.handleFieldChange}
                                id="rating"
                                value={this.state.rating}
                            />


                            <input className="condition-input"
                                type="text"
                                required
                                placeholder="What is the condition of your item?"
                                onChange={this.handleFieldChange}
                                id="condition"
                                value={this.state.condition}
                            />

                        </div>
                        <div className="save-edits-btn">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateCollectionDetails}
                                className="save-edit"
                            >Save</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default AddDetailsForm