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
        coverImg: "",
        // collectionId: 0

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
                    coverImg: collection.coverImg,
                    id: collection.id
                });
            });
    }

    render() {
        return (
            <>
                <div className='cards'>
                    <div className='detail-container'>
                    <img className='detail-card-img' src={this.state.coverImg} alt='' />
                        <h5 className='detail-title'>{this.state.title}</h5>
                        {/* <h5>{this.state.volume} #{this.state.issueNumber}</h5> */}
                        {/* <h5>{this.state.publishDate}</h5> */}
                        <p className='p-description'>{this.state.description}</p>
                    <div className='btn-grp'>
                    <button className='add-detail-btn' type='button' onClick={() => {this.props.history.push(`/collection/${this.props.collectionId}/details`)}}>ADD DETAILS</button>
                    <button className='edit-detail-btn' type='button'>EDIT DETAILS</button>
                    </div>
                    </div>
                </div>

            </>
        )
    }
}

export default IssueDetail;

