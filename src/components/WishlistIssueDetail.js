import React, { Component } from 'react';
import WishlistManager from '../modules/WishlistManager';
import './WishlistIssueDetail.css'


class WishlistDetail extends Component {

    state = {
        title: "",
        volume: "",
        issueNumber: "",
        description: "",
        publishDate: "",
        coverImg: ""

    }

    componentDidMount() {
        WishlistManager.getWishlistIssue(this.props.wishlistId)
            .then((wishlist) => {
                this.setState({
                    title: wishlist.title,
                    volume: wishlist.volume,
                    issueNumber: wishlist.issueNumber,
                    description: wishlist.description,
                    publishDate: wishlist.publishDate,
                    coverImg: wishlist.coverImg
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

export default WishlistDetail;

