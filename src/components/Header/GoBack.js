import React, { Component } from 'react';

class GoBack extends Component {
  render() {
    return (
      <div>
        <i onClick={this.props.history.goBack} className="fas fa-arrow-left"/>
      </div>
    );
  }
}

export default GoBack;