import React, { Component } from 'react';
import Sidebar from './Sidebar';
import MessagesList from './Chat/MessagesList';
import Message from '../../../classes/Message'
import MessageForm from './Chat/MessageForm';
import Servicecrud from '../../../classes/Servicecrud';

class CompRoom extends Component {

    constructor(props) {
        super(props);
        this.room = this.props.room;
        // console.log(this.room);
        this.state = { messages: [], chars:[], url: `http://localhost:3000` , mod: undefined};
        this.id = 0;
    }

    componentDidMount(){
        this.props.getStateFromUrl(this.props.match.params);

        // Va chercher les messages de la room seulement si il y a une room
        // Du coup quand on actualise la page, this.getList() n'est pas directement lancé
        // Si on actualise, this.getList() sera lancé dans componentDidUpdate(prevProps)
        if (this.props.room !== null && this.props.room !== undefined) {
            this.getList();
            this.getChars();
        }
    }

    // Va chercher les messages de la room, si la room dans le state de App change
    // Si on a actualisé la page, this.getList() sera intrésèquement exécuté lorsqu'App aura reçu la room depuis getStateFromUrl(params)
    componentDidUpdate(prevProps) {
        if (this.props.room !== prevProps.room) {
            this.room = this.props.room;
            this.getList();
            this.getChars();
        }
    }

    getChars = () => {
        for (let i = 0; i < this.room.charIds.length; i++){
            Servicecrud.getCallBack(`${this.state.url}/character?id=${this.room.charIds[i]}`,
            (data) => {
                this.setState({ chars: [...this.state.chars, data[0]] })
            })
        }
    }

    getList = () => {
        Servicecrud.getCallBack(`${`${this.state.url}/messages`}?roomId=${this.props.room.id}`,
            (data) => {
                this.setState({messages: data});
            }
        );
    }

    getMod = (message) =>{
        this.setState({mod: message});
    }

    updateMessage = (e, id) =>{
        e.preventDefault()
        let aux = new Message(this.props.character.name, e.target.content.value, this.room.id);
        aux.id = id;
        this.setState({mod: undefined})
        Servicecrud.update(`${this.state.url}/messages`, aux, this.getList)
    }

    testUserName = (userName) => {
        return this.props.userName === userName;
    }

    deleteMessage = (message) =>{
        Servicecrud.delete(`${this.state.url}/messages`, message, this.getList);
    }

    sumbitMessage = (e) => {
        e.preventDefault();
        let aux = new Message(this.props.character.name, e.target.value, this.room.id);
        this.state.messages.push(aux);
        e.target.value = "";
        Servicecrud.add(`${this.state.url}/messages`, aux, this.getList);
    }

    render() {
        // return(null) si App ne passe pas de room en props, ce qui n'affiche rien
        if (this.props.room === null || this.props.room === undefined) return(null);

        // Affiche le contenu de la room si App passe une room en props
        return (
            <div className='container mw-100 compRoom'>
                <div className='row h-100 w-100'>
                    <div className='sidebarMain col-2'>
                        <Sidebar chars={this.state.chars} />
                    </div>
                    <div className='col-10'>
                        <div className="d-flex align-items-end flex-column h-100">
                            <div className="p-1 w-100 message">
                                <div className="pmessage">
                                    <MessagesList list={this.state.messages} user={this.props.user} test={this.testUserName} del={this.deleteMessage} upd={this.updateMessage} mod={this.state.mod} character={this.props.character.name} get={this.getMod} />
                                </div>
                            </div>
                            
                            <div className="mt-auto p-1 w-100">
                                <MessageForm event={this.sumbitMessage} />
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CompRoom;