import React, {Component, Fragment} from 'react';

class AccountMenu extends Component {


    constructor(props) {
        super(props);
        this.state = {
            user: null,
            tabPerso : [],
            load: false,
        }
    }
    
    componentDidMount() {
        this.props.getStateFromUrl(this.props.match.params);
        
        // Pour retirer le character du state d'App quand on arrive ici avec le bouton GoBack
        this.props.setCharacter(null);
    }

    goRooms = (char) => {
        // Met à jour le state de <App /> avec ce personnage
        this.props.setCharacter(char);
        // Redirige vers la liste des rooms
        this.props.history.push(`${this.props.location.pathname}/${char.id}`);
    }
    renderListPerso = () => {
       return this.props.tabCharacter.map(perso => {
           perso.exp += '%';
           let monexp = {width: perso.exp};
       return (<li className="col-4" key={perso.id} id={perso.id} onClick={()=>this.goRooms(perso)}>
            <div className="myChar">
                <h2>{perso.name} - <span>lvl {perso.level}</span></h2>
                <div className="charInfoChar">
                    <h3>Race : <span>{perso.race}</span></h3>
                    <h3>Classe : <span>{perso.class}</span></h3>
                </div>
                <div className="expChar">
                    <h3>Expérience :</h3>
                    <div className="progress">
                        <div className='progress-bar bg-warning' role="progressbar" style={monexp} aria-valuenow={perso.exp} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
    </li>)})
    };

    goCharCreate = () => {
        this.props.history.push(`${this.props.location.pathname}/create-character`);
    };

    render() {

        return (
            <Fragment>
                {(this.props.user !== null && this.props.tabCharacter !== null) &&
                <Fragment> 
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="text-center titleChar">Bienvenue {this.props.user.username}</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-8">
                            <ul className="row mb-5">
                                {this.renderListPerso()}
                            </ul>
                            <div className="mt-2 text-center">
                                <button className="btn btn-dark" onClick={this.goCharCreate}>Créer nouveau personnage</button>
                            </div>
                        </div>

                    </div>
                </Fragment>
                }
            </Fragment>
        );
    }
}

export default AccountMenu;