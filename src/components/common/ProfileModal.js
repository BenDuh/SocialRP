import React, { Component } from 'react';

// Props: character
class ProfileModal extends Component {
    render() {
        let { character } = this.props;

        return (
            character.id !== undefined &&
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    {/* HEADER */}
                    <div className="modal-header">
                        <h4 className="modal-title" id="exampleModalLabel">{character.name}</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    {/* BODY */}
                    <div className="modal-body">
                        <h5>{character.race} {character.class} niveau {character.level}</h5>
                        <ul className="list-unstyled">
                            <li>Santé : {character.stats.life}</li>
                            <li>Force : {character.stats.strength}</li>
                            <li>Dextérité : {character.stats.dexterity}</li>
                            <li>Intelligence : {character.stats.intelligence}</li>
                        </ul>
                    </div>

                    {/* FOOTER */}
                    <div className="modal-footer">
                        <p>Experience : {character.exp}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileModal;