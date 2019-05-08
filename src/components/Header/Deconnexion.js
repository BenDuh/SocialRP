import React, { Component } from 'react';


class Deconnexion extends Component {
    /*
        Lorsqu'on clique sur le bouton de déconnexion :
            - Process de déconnexion
            - Retour sur la page de connexion
    */
    deconnexion = () => {
        const { history, setUser, setCharacter, setTabCharacter, setRoom } = this.props;
        setUser(null);
        setCharacter(null);
        setTabCharacter(null);
        setRoom(null);
        history.push('/');
    }

    render() {
        return (
            <div>
                <i className="fas fa-skull btnHeader" onClick={this.deconnexion}/>
            </div>
        );
    }
}

export default Deconnexion;