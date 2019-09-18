import React, { Component } from 'react';
import CollectionManager from '../modules/CollectionManager';
import './IssueDetails.css'


class IssueDetail extends Component {

    state = {
        title: "",
        volume: "",
        description: "",
        publishDate: "",
        coverImg: ""

    }

    componentDidMount() {
        //get(id) from AnimalManager and hang on to the data; put it into state
        CollectionManager.getCollectionIssue(this.props.collectionId)
            .then((collection) => {
                this.setState({
                    title: collection.title,
                    volume: collection.volume,
                    description: collection.description,
                    publishDate: collection.publishDate,
                    coverImg: collection.coverImg
                });
            });
    }

    render() {
        return (
               <div className='details-card'>
                   <img className='card-img' src={this.state.coverImg} alt=''/>
                   
                   <div className='card-title'>
                       <h3>Title: {this.state.name}</h3>
                   </div>
                   <div className='issue-description'>
                       <p>{this.state.description}</p>
                   </div>
                   <div className='publish-date'>
                       <p>Publish Date: {this.state.publishDate}</p>
                   </div>
               </div>
        )
    }
}

    export default IssueDetail;