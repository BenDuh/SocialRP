import React, {Component, Fragment} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Api from './api'
import User from "./classes/User";
import Character from "./classes/Character";
import Room from "./classes/Room";
import Header from "./components/Header/Header";
import LoginForm from "./components/Body/Login/LoginForm";
import AccountMenu from "./components/Body/AccountMenu/AccountMenu";
import CharCreate from "./components/Body/Chars/CharCreate";
import RoomList from './components/Body/RoomMenu/RoomList';
import CompRoom from './components/Body/Room/CompRoom';
import RoomCreate from './components/Body/Room/RoomCreate';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            tabCharacter: null,
            character: null,
            room: null
        }
    }

    // SET APP STATE
    setUser = (_user) => {
        this.setState({ user: _user })
    }
    setCharacter = (_character) => {
        this.setState({ character: _character })
    }
    setTabCharacter = (_tabCharacter) => {
        this.setState({ tabCharacter: _tabCharacter })
    }
    setRoom = (_room) => {
        this.setState({ room: _room })
    }

    // GET USER, CHARACTER, AND ROOM FROM THE URL PARAMETERS
    getStateFromUrl = (params, forceGetUser) => {
        // GET USER
        if ((params.user !== undefined && this.state.user === null) || forceGetUser) {
            Api.get(`/user?username=${params.user}`).then( res => {
                // console.log('GET USER FROM URL');
                const data = res.data[0];
                const user = new User(data.id, data.username);
                this.setState({ user });
                // console.log(user);
            }).then(() => {
                Api.get(`/character?user_id=${this.state.user.id}`).then(res => {
                    this.setState({tabCharacter: res.data});
                });
            });
        }
        // GET CHARACTER
        if (params.character !== undefined && this.state.character === null) {
            Api.get(`/character?id=${params.character}`).then( res => {
                // console.log('GET CHARACTER FROM URL');
                const data = res.data[0];
                const character = new Character(data.id, data.name, data.race, data.classe, data.user_id, data.stats, data.level, data.exp);
                this.setState({ character });
                // console.log(character);
            });
        }

        // GET ROOM
        if (params.room !== undefined && this.state.room === null) {
            Api.get(`/room?id=${params.room}`).then( res => {
                // console.log('GET ROOM FROM URL');
                const data = res.data[0];
                // console.log(res.data[0])
                const room = new Room(data.name, data.userMax, data.adminName, data.description, data.id, data.charIds);
                this.setState({ room });
                // console.log(room);
            });
        }
    }

    // RENDER
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Route path="/:user"
                        render={(props) => <Header {...props}
                            character={this.state.character}
                            setUser={this.setUser}
                            setCharacter={this.setCharacter}
                            setTabCharacter={this.setTabCharacter}
                            setRoom={this.setRoom}
                        />}
                    />

                    <Switch>
                        <Route exact path="/"
                               render={(props) => <LoginForm {...props}
                                                             setUser={this.setUser}
                               />}
                        />

                        <Route exact path="/:user"
                               render={(props) => <AccountMenu {...props}
                                                               getStateFromUrl={this.getStateFromUrl}
                                                               setCharacter={this.setCharacter}
                                                               user={this.state.user}
                                                               tabCharacter={this.state.tabCharacter}
                               />}
                        />

                        <Route exact path="/:user/create-character"
                               render={(props) => <CharCreate {...props}
                                                              getStateFromUrl={this.getStateFromUrl}
                                                              user={this.state.user}
                               />}
                        />

                        <Route exact path="/:user/:character"
                               render={(props) => <RoomList {...props}
                                                            getStateFromUrl={this.getStateFromUrl}
                                                            setRoom={this.setRoom}
                                                            user={this.state.user}
                                                            character={this.state.character}
                               />}
                        />

                        <Route exact path="/:user/:character/:create-room"
                               render={(props) => <RoomCreate {...props}
                                                              getStateFromUrl={this.getStateFromUrl}
                                                              setRoom={this.setRoom}
                                                              user={this.state.user}
                                                              character={this.state.character}
                               />}
                        />

                        <Route exact path="/:user/:character/:room"
                               render={(props) => <CompRoom {...props}
                                                            getStateFromUrl={this.getStateFromUrl}
                                                            user={this.state.user}
                                                            room={this.state.room}
                                                            character={this.state.character}
                               />}
                        />
                    </Switch>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;