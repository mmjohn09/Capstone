import React, { Component } from 'react'
import { Link } from "react-router-dom";

class MessageCard extends Component {
    render() {
        return (
            <>
                <div>
                    {this.props.message.user.username}: {this.props.message.message}
                </div>
                <button type="button" onClick={() => { this.props.history.push(`/messages/${this.props.message.id}/edit`) }}>Edit</button>
                <button type="button" onClick={() => this.props.deleteMessage(this.props.message.id)}>Delete</button>
            </>
        );
    }
}

export default MessageCard;