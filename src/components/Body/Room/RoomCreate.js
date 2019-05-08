import React, { Component } from 'react';
import Room from "../../../classes/Room";
import axios from 'axios';

const url = 'http://localhost:3000/room';
class RoomCreate extends Component {
    constructor(props) {
        super(props);
        this.state ={
            user:null,
            character:null,
        }
    }

    componentDidMount() {
        this.props.getStateFromUrl(this.props.match.params);
        
        // Pour retirer la room du state d'App quand on arrive ici avec l'écran Room
        this.props.setRoom(null);
    }
    giveRoom = (room) => {
        this.props.setRoom(room);

        // Si le pathname finit par "/", enlève le "/"
        let pathname = this.props.location.pathname;
        if (pathname.charAt(pathname.length - 1) === '/') {
            pathname = pathname.slice(0, -1);
        }

        // Seb : changé "this.state.user.username" en "this.props.use.username"
        // Seb : changé "this.state.character.id" en "this.props.character.id"
        this.props.history.push(`/${this.props.user.username}/${this.props.character.id}/${room.id}`);
    }   
    
    addRoom = (e) => {
        e.preventDefault();
        // Seb : changé "this.state.user.username" en "this.props.use.username"
        axios.post(url , new Room(e.target.name.value, parseInt(e.target.userMax.value), this.props.user.username,  e.target.description.value)).then(res => this.giveRoom(res.data));
    }
    render() {
        console.log('this.props.user in RoomCreate');
        console.log(this.props.user);
        return (
            <div className="container">
                <form className="formRoom row flex-column" onSubmit={this.addRoom}>
                    <div>
                        <label>Nom de la room :</label>
                        <input type="text" name="name" placeholder="Nom" required/>
                    </div>
                    <div>
                        <label>Description :</label>
                        <input type="text" name="description" placeholder="Descirption"/>
                    </div>
                    <div>
                        <label>Nombre de participants :</label>
                        <input className="number" name="userMax" type="number" max="20" defaultValue="7" required/>
                    </div>
                    <button className="btn btn-dark ml-auto">Créer Salon</button>
                </form>
            </div>
        );
    }
}

export default RoomCreate;