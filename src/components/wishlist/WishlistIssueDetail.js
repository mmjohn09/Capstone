import React, { Component } from 'react';
import WishlistManager from '../../modules/WishlistManager';
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
            <>
                <div className='cards'>
                    <div className='detail-container'>
                    <img className='detail-card-img' src={this.state.coverImg} alt='' />
                        <h5 className='detail-title'>{this.state.title}</h5>
                        {/* <h5>{this.state.volume} #{this.state.issueNumber}</h5> */}
                        {/* <h5>{this.state.publishDate}</h5> */}
                        <p className='p-description'>{this.state.description}</p>

                    </div>
                </div>

            </>
        )
    }
}

export default WishlistDetail;

