import React, { Component } from 'react';
import Archer from '../../../classes/Archer';
import Warrior from '../../../classes/Warrior';
import Wizzard from '../../../classes/Wizzard';

class Class extends Component {
    state = {
        activeBoxArcher: false,
        activeBoxWarrior: false,
        activeBoxWizzard: false
    }

    archer = new Archer()
    warrior = new Warrior();
    wizzard = new Wizzard();

    selectArcher = () => {        
        this.setState( {activeBoxArcher: true, activeBoxWarrior: false, activeBoxWizzard: false } )        
    }

    selectWarrior = () => {       
        this.setState( {activeBoxArcher: false, activeBoxWarrior: true, activeBoxWizzard: false } )
    }

    selectWizzard = () => {        
        this.setState( {activeBoxArcher: false, activeBoxWarrior: false, activeBoxWizzard: true } )
    }

    render() {
        const { onClick } = this.props
        return (
            <div className="row justify-content-around">
                <div onClick={this.selectArcher} 
                className="bg-1">                    
                    <label className={this.state.activeBoxArcher ? "active" : "charBox "}
                    
                        onClick={() => onClick(this.archer)}>
                        <div className="m-auto">
                            <h4>Archer</h4>
                            <div>Life : {JSON.stringify(this.archer.stats.life)}</div>
                            <div>Strenght : {JSON.stringify(this.archer.stats.strengh)}</div>
                            <div>Intelligence : {JSON.stringify(this.archer.stats.intelligence)}</div>
                            <div>Dexterity : {JSON.stringify(this.archer.stats.dexterity)}</div>
                        </div>
                    </label>
                </div>
                <div onClick={this.selectWarrior}
                className="bg-2">
                    <label className={this.state.activeBoxWarrior ? "active" : "charBox "}
                        onClick={() => onClick(this.warrior)}>
                        <div className="m-auto">
                            <h4>Warrior</h4>
                            <div>Life : {JSON.stringify(this.warrior.stats.life)}</div>
                            <div>Strenght : {JSON.stringify(this.warrior.stats.strengh)}</div>
                            <div>Intelligence : {JSON.stringify(this.warrior.stats.intelligence)}</div>
                            <div>Dexterity : {JSON.stringify(this.warrior.stats.dexterity)}</div>
                        </div>
                    </label>
                </div>
                <div onClick={this.selectWizzard}
                className="bg-3">
                    <label className={this.state.activeBoxWizzard ? "active" : "charBox "}
                        onClick={() => onClick(this.wizzard)}>
                        <div className="m-auto">
                            <h4>Wizzard</h4>
                            <div>Life : {JSON.stringify(this.wizzard.stats.life)}</div>
                            <div>Strenght : {JSON.stringify(this.wizzard.stats.strengh)}</div>
                            <div>Intelligence : {JSON.stringify(this.wizzard.stats.intelligence)}</div>
                            <div>Dexterity : {JSON.stringify(this.wizzard.stats.dexterity)}</div>
                        </div>
                    </label>
                </div>
            </div>
        );
    }
}

export default Class;