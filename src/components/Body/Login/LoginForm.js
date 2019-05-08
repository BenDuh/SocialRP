import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
//import UserModel from "../../../Model/UserModel";
import User from "../../../classes/User";
import Api from "../../../api";

class LoginForm extends Component {

    state = {
        pseudo: "",
        login: false,
        user: null
    };    

    getUser = (user) => {
        if (user.length === 0) {
            this.setState({user: null}, () => {
                const user = new User(null, this.state.pseudo);
                //this.setState({user});
                Api.post(`/user`, user).then(() => {
                    this.getUser(user);
                    this.props.history.push(`/${this.state.pseudo}`);
                });
                //this.userModel.addUser(this.state.user);
            });
        } else {
            this.setState({user, login: true});
            this.props.setUser(user[0]);
        }
    };

    handleChange = e => {
        const pseudo = e.target.value;
        this.setState({pseudo});
    };

    handleLoginSubmit = e => {
        e.preventDefault();
        if (this.state.pseudo === "") {
            return;
        } else {
            Api.get(`/user?username=${this.state.pseudo}`).then(res => {
                this.getUser(res.data);
            });

        }

        //this.userModel.getUserByName(this.state.pseudo, this.getUser);
    };

    render() {

        if (this.state.login) {
            return <Redirect to={{
                pathname: `/${this.state.pseudo}`,
                state: {
                    user: this.state.user
                }
            }}/>
        }

        return (
            <div className="row container-fluid justify-content-center login">

                <div className="row align-items-center ">
                    <form onSubmit={this.handleLoginSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username" value={this.state.pseudo}
                                   onChange={this.handleChange}/>
                        </div>
                        <button className="btn btn-dark w-100">Connexion</button>
                    </form>

                </div>
            </div>

        );
    }
}

export default LoginForm;