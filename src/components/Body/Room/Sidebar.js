import React, { Component } from 'react';
import CharacterCard from '../../common/CharacterCard';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hoverId: -1
        }
    }

    displayList() {
        return this.props.chars.map((ch) =>
            <div key={ch.id}>
                <span 
                    id={`character-name-${ch.id}`}
                    className="character-name"
                    onMouseEnter={() => this.setState({ hoverId: ch.id })}
                    onMouseLeave={() => this.setState({ hoverId: -1 })}
                >
                    {ch.name}
                    <CharacterCard character={ch} hoverId={this.state.hoverId} />
                </span>
            </div>
        )
    }

    render() {
        return (
            <div className="sidebar table">
                <div>
                    <h2>Participants</h2>
                </div>
                <div className="characters-list">
                    {this.displayList()}
                </div>
            </div>
        );
    }
}

export default Sidebar;