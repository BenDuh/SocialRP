import React, { Component } from 'react';

class MessageForm extends Component {

    handleKeyUp = (e) => {
        if (e.key === "Enter") {
            this.props.event(e);
        }
    }

    render() {
        return (
                <form className="formMessage row align-self-end" onSubmit={this.props.event}>
                    <textarea className="col-11" rows="5" cols="30" type="text" name="content" defaultValue={this.props.text} placeholder="Send a message" required onKeyUp={this.handleKeyUp} >
                    </textarea >
                    {this.props.cancel !== undefined &&
                        <div className="w-100">
                            <button className="w-25 btn btn-dark btnfocus" type="submit" onClick={() => this.props.cancel(undefined)}><i class="fas fa-trash-alt"></i></button>
                            <button className="w-50 btn btn-dark btnfocus" type="submit" onClick={null}><i className="far fa-paper-plane"></i></button>
                        </div>
                    }
                    {this.props.cancel == undefined &&
                        <button className="col-1 btn btn-dark" type="submit" onClick={null}><i className="far fa-paper-plane"></i></button>
                    }
                </form>
        );
    }
}

export default MessageForm;