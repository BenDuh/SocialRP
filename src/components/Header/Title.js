import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <div>
                <h2 className="text-big">{this.props.title}</h2>
            </div>
        );
    }
}

export default Title;