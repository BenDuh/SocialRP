import Character from "./Character";

export default class Warrior extends Character{
    constructor(id, name, race, charClass="Guerrier"){
        super(id, name, race, charClass);
        this.stats = {life:100, strength: 100,intelligence: 50, dexterity:35};
    }
}