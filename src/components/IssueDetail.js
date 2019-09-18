import React, { Component } from 'react';
import CollectionManager from '../modules/CollectionManager';
import './IssueDetails.css'


class IssueDetail extends Component {

    state = {
        title: "",
        volume: "",
        issueNumber: "",
        description: "",
        publishDate: "",
        coverImg: ""

    }

    componentDidMount() {
        CollectionManager.getCollectionIssue(this.props.collectionId)
            .then((collection) => {
                this.setState({
                    title: collection.title,
                    volume: collection.volume,
                    issueNumber: collection.issueNumber,
                    description: collection.description,
                    publishDate: collection.publishDate,
                    coverImg: collection.coverImg
                });
            });
    }

    render() {
        return (
            <div className='card'>
                <img className='card-img' src={this.state.coverImg} alt='' />
                <div className='card-body'>
                    <h3>Title: {this.state.title}</h3>
                    <h5>Volume: {this.state.volume}</h5>
                    <h5>Issue #: {this.state.issueNumber}</h5>
                    <p>{this.state.description}</p>
                    <p>Publish Date: {this.state.publishDate}</p>
                </div>
                <div className='edit-btn'><button type='button'>EDIT</button></div>
            </div>
        )
    }
}

export default IssueDetail;

