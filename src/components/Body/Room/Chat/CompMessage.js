import React, { Component } from 'react';
import MessageForm from './MessageForm';

class CompMessage extends Component {
    render() {
        // console.log(this.props.mod)
        return (
            <div>
                <div className='row justify-content-between'>
                    <div className='col-8'>
                        <strong>{this.props.message.charName} : </strong>
                        {this.props.message.content}
                    </div>
                    <div className='col-2'>
                        {new Date(this.props.message.date).toLocaleString()}
                    </div>
                    {this.props.message.charName === this.props.character ?
                    <div className='col-2'>
                        {this.props.message === this.props.mod ?
                            <MessageForm event={(e) => this.props.upd(e, this.props.message.id)} text={this.props.message.content} cancel={this.props.get} />
                            :
                            <div className='row btnMessage'>
                                <div className="col-6">
                                    <button className="btn btn-dark " onClick={() => this.props.del(this.props.message)}><i className="fas fa-times"></i></button>
                                </div>
                                <div className="col-6">
                                    <button className="btn btn-dark" onClick={() => this.props.get(this.props.message)}><i className="fas fa-edit"></i></button>
                                </div>
                            </div>
                        }
                    </div>
                    :
                    <div className='col-2'>
                    </div>
                }
                </div>
            </div>
        );
    }
}

export default CompMessage;