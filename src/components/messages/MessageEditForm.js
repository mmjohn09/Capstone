import React, { Component } from "react"
import MessagesManager from "../../modules/MessagesManager"

class MessageEditForm extends Component {
    //set the initial state
    state = {
        message: "",
        userId: "",
        loadingStatus: true,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingMessage = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedMessage = {
            message: this.state.message,
            userId: sessionStorage.getItem("credentials"),
            id: this.props.match.params.messageId,
            // userId: parseInt(sessionStorage.getItem("credentials"))
        };

        MessagesManager.update(editedMessage)
            .then(() => this.props.history.push("/messages"))
    }

    componentDidMount() {
        MessagesManager.get(this.props.match.params.messageId)
            .then(message => {
                this.setState({
                    message: message.message,
                    loadingStatus: false,
                });
            });
    }

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="message"
                                value={this.state.message}
                            />
                            <label htmlFor="message">Edit Message</label>
                        </div>
                        <div>
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingMessage}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default MessageEditForm