import React, { Component } from 'react';
import ProfileModal from '../common/ProfileModal';

// Props: character
class ProfileLogo extends Component {
    render() {
        const { character } = this.props;

        if (character === null || character === undefined) return(null);

        return (
            <div>
                {/* BUTTON */}
                <i data-toggle="modal" data-target={`#profile-modal-${character.id}`} className="fas fa-user btnHeader"/>

                {/* MODAL */}
                <div className="modal fade" id={`profile-modal-${character.id}`} tabIndex="-1" role="dialog" aria-labelledby="profile-modal" aria-hidden="true">
                    <ProfileModal character={character} />
                </div>
            </div>
        );
    }
}

export default ProfileLogo;