import React, { Component } from 'react';
import RoomLi from './RoomLi';
import RoomCreate from '../Room/RoomCreate';
import axios from 'axios';

const url = 'http://localhost:3000/room';
class RoomList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabroom : [],
            showForm: false,
            user: null,
            character: null,
        };
    }
    componentDidMount(){
        this.loadTabRoom();
        this.props.getStateFromUrl(this.props.match.params);

        // Pour retirer la room du state d'App quand on arrive ici avec l'écran Room
        this.props.setRoom(null);
    }
    loadTabRoom = () => {
        axios.get(url).then(
            (response) => {
                this.setState({tabroom: response.data}, ()=> {
                    // console.log('tabroom from loadTabRoom:');
                    // console.table(this.state.tabroom);
                });
            }
        ).catch((error)=>console.log(error));
    };
    giveRoom = (room) => {
        this.props.setRoom(room);

        let condition = false;
        for(let id of room.charIds){
            if(id===this.props.character.id){
                condition = true;
                break;
            } 
        }
        if (!condition) {
            room.charIds.push(this.props.character.id);
            axios.put(url+'/'+room.id, room).then(
                ()=>{}
            ).catch((error)=>console.log(error));
        }

        // Si le pathname finit par "/", enlève le "/"
        let pathname = this.props.location.pathname;
        if (pathname.charAt(pathname.length - 1) === '/') {
            pathname = pathname.slice(0, -1);
        }
        this.props.history.push(`${pathname}/${room.id}`);
    }
    goRoomCreate = () => {
        this.props.history.push(`${this.props.location.pathname}/create-room`);
    }
    render() {
        return (
            <div className="container" >
                <div className="roomlist">
                    <ul>
                        <RoomLi
                            tabroom={this.state.tabroom}
                            giveRoom={this.giveRoom}
                        />
                    </ul>
                </div>
                <div className="row justify-content-end">
                    <button className="btn btn-dark" onClick={this.goRoomCreate}>Creer</button>
                </div>
                {this.state.showForm ? <RoomCreate 
                            addRoom={this.addRoom} /> : ""}
            </div>
        );
    }
}

export default RoomList;