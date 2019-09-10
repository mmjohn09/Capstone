import React, { Component } from 'react';
import MessagesManager from '../../modules/MessagesManager';

class MessageAddForm extends Component {
    state = {
        message: "",
        userId: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create message object, invoke the MessagesManager post method, and redirect to the full message list
    */
    constructNewMessage = evt => {
        evt.preventDefault();
        if (this.state.message === "") {
            window.alert("Please input a new message");
        } else {
            this.setState({ loadingStatus: true });
            const message = {
                message: this.state.message,
                userId: sessionStorage.getItem("credentials")
            };

            // Create the message and redirect user to message list
            MessagesManager.post(message)
                .then(() => this.props.history.push("/messages"));
        }
    };

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
                                placeholder="Message"
                            />
                            <label htmlFor="message">Message</label>
                        </div>
                        <div>
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewMessage}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default MessageAddForm