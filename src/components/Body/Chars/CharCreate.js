import React, { Component } from 'react';
import Class from './Class';
import Race from './Race';
import Api from '../../../api'

class CharCreate extends Component {

    constructor() {
        super()
        this.state = {
            newChar: null,
            race: null,
            active: ""
        }
    }

    componentDidMount() {
        this.props.getStateFromUrl(this.props.match.params);
    }
    
    handleClassSelect = classSelected => {
        this.setState({ newChar: classSelected , active: "active"})
    }

    handleRaceSelect = raceSelected => {
        this.setState({ race: raceSelected })
    }

    charCreate = () => {
        let newChar = { ...this.state.newChar };
        newChar.id = null;
        newChar.user_id = this.props.user.id;
        newChar.name = this.state.nameInputValue;
        newChar.race = this.state.race;
        Api.post(`/character`, newChar)
            .then( res => this.setState({ newChar: res.data }))
            .then(() => {
                let forceGetUser = true;
                this.props.getStateFromUrl(this.props.match.params, forceGetUser)
            }
            ).then(() => this.goAccountMenu());
    };

    goAccountMenu = () => {
        this.props.history.push(`/${this.props.user.username}`);
    };

    render() {

        return (
            <div className="container-fluid ">
                <div className="row charChoices">
                    <div className="col-12 text-center">
                        <h2>Choix de la classe : </h2>
                    </div>
                    <div className="col-12">
                        <Class onClick={this.handleClassSelect} />
                    </div>
                </div>
                <div className="row charChoices">
                    <div className="col-12 text-center">
                        <h2>Choix de la race : </h2>
                    </div>
                    <div className="col-12">
                        <Race onClick={this.handleRaceSelect} />
                    </div>
                </div>

                {this.state.newChar && this.state.race != null ?
                    <div className="row justify-content-center charChoices">
                        <h2 className="text-center col-12"> Nom du personnage : </h2>
                        <input className="form-control col-4 text-center" type="text" required
                            name="name" id="name"
                            placeholder="Entrez le nom de votre personnage"
                            onChange={e => this.setState({ nameInputValue: e.target.value })}>
                        </input>

                        {this.state.nameInputValue != null ?
                            <div className="mt-3 col-12 text-center">
                                <button onClick={this.charCreate} className="btn btn-dark">Ajouter</button>
                            </div>
                            : 
                            <div className="mt-3 col-12 text-center">
                                <button className="btn btn-dark" disabled>Ajouter</button>
                            </div>
                        }
                    </div >
                    : ""
                }

            </div>
        );
    }
}

export default CharCreate;