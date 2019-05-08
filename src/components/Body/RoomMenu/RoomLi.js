import React, { Component } from 'react';

class RoomLi extends Component {
    displayRoom(){
        return this.props.tabroom.map((room)=>
             <li key={room.id} className="row roomli align-items-center">
                <h2 className="col-8">{room.name}<span>Créé par {room.adminName}</span></h2>
                <b className="col-1">{room.charIds.length}/{room.userMax}</b>
                <div className="col-3">
                    <button className="btn btn-dark" onClick={() =>this.props.giveRoom(room)}>Rejoindre</button>
                </div>
            </li>
            )
    }
    render() {
        return (
            <div className="container">
                {this.displayRoom()}
            </div>
        );
    }
}

export default RoomLi;