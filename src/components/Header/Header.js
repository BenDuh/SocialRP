import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ProfileLogo from '../common/ProfileLogo';
import GoBack from './GoBack';
import Title from './Title';
import Deconnexion from './Deconnexion';

// Props: showProfileLogo, showDeconnexion, title
// Titles: "Social RP", "Personnages", "Nouveau Personnage", "Nouvelle Room"
class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            show: {
                ProfileLogo: true,
                GoBack: true,
                Title: true,
                Deconnexion: true
            }
        }
    }

    // COMPONENT DID MOUNT
    componentDidMount() {
        this.updateTitle();
    }

    // UPDATE TITLE WHEN COMPONENT UPDATES
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.updateTitle();
        }
    }

    // UPDATE TITLE
    updateTitle = () => {        
        let _title = 'En cours...';

        // Récupère le pathname, du type "/Leo/2/1" et le split à chaque "/"
        // la variable split est un tableau du type : ["", "Leo", "2", "1"]
        let pathname = this.props.location.pathname;
        let split = pathname.split('/');

        // "/"
        if (pathname === "/") {
            _title = 'Social RP';
        // "/Leo"
        } else if (split.length === 2) {
            _title = 'Mes Personnages'
        // "/Leo/create-character" ou "/Leo/2"
        } else if (split.length === 3) {
            if (split[2] === 'create-character') {
                _title = 'Créer Personnage'
            } else {
                _title = 'Rooms'
            }
        // "/Leo/2/create-room" ou "/Leo/2/1"
        } else if (split.length === 4) {
            if (split[3] === 'create-room') {
                _title = 'Créer Room'
            } else {
                _title = 'Room'
            }
        }

        this.setState({ title: _title }, this.updateShow);
    }

    // UPDATE this.state.show TO KNWO WHICH CHILDREN COMPONENTS SHOULD BE DISPLAYED
    updateShow = () => {
        let _show = {
            ProfileLogo: true,
            GoBack: true,
            Title: true,
            Deconnexion: true
        }
        if (this.state.title === "Social RP") {
            _show.ProfileLogo = false;
            _show.GoBack = false;
            _show.Deconnexion = false;
        } else if (this.state.title === "Mes Personnages") {
            _show.ProfileLogo = false;
            _show.GoBack = false;
        }

        this.setState({ show: _show });
    }

    // RENDER
    render() {
        return (
            <nav className="navbar row bg-light border">

                <div className="col-2 row align-items-center text-center pl-3">
                    {/* PROFILE LOGO */}
                    <div className="col-7 p-0">
                        {this.state.show.ProfileLogo &&
                            <ProfileLogo character={this.props.character} />
                        }
                    </div>
                    {/* GO BACK */}
                    <div className="col-5 p-0">
                        {this.state.show.GoBack &&
                            <GoBack
                                location={this.props.location}
                                history={this.props.history}
                            />
                        }
                    </div>
                </div>

                {/* TITLE */}
                <div className="col-8 text-center p-0">
                    {this.state.show.Title &&
                        <Title title={this.state.title} />
                    }
                </div>

                {/* DECONNEXION */}
                <div className="col-2 p-0 text-right pr-4">
                    {this.state.show.Deconnexion &&
                        <Deconnexion
                            history={this.props.history}
                            setUser={this.props.setUser}
                            setCharacter={this.props.setCharacter}
                            setTabCharacter={this.props.setTabCharacter}
                            setRoom={this.props.setRoom}
                        />
                    }
                </div>
            </nav >
        );
    }
}

export default withRouter(Header);