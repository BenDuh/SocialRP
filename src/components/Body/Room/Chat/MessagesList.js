import React, { Component } from 'react';
import CompMessage from './CompMessage';

class MessagesList extends Component {

    constructor(props) {
        super(props);
        this.afflist = [];
        this.createList();
    }

    createList() {
        for (let i = 1; i < 4; i++) {
            this.afflist.push(this.props.list[this.props.list.length - i])
        }
    }

    displayList(list) {
        // console.log('Liste des messages dans displayList');
        // console.log(list);
        let aux = list.filter( (item, i) => i > (list.length-10));
        // console.log(aux);
        return  aux.map((item) => 
            <div className="mb-3" key={item.id}>
                <CompMessage message={item} mod={this.props.mod} user={this.props.user} test={this.props.test} del={this.props.del} upd={this.props.upd} get={this.props.get} character={this.props.character} />
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className='row flex-column h-80'>
                  {this.displayList(this.props.list)}
                </div>
            </div>
        );
    }
}

export default MessagesList;