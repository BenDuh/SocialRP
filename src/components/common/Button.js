import React, { Component } from 'react';

// Props: text, onClick, data-toggle, target
class Button extends Component {
    render() {
        return (
            <button
                className="btn btn-dark btnHeader"
                onClick={this.props.onClick}
                type={this.props.type}

                data-toggle={this.props.dataToggle}
                data-target={this.props.dataTarget}
            >
                {this.props.text}
            </button>
        );
    }
}

export default Button;