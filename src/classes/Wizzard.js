import Character from "./Character";

export default class Wizzard extends Character{
    constructor(id, name, race, charClass="Sorcier"){
        super(id, name, race, charClass);
        this.stats = {life:50, strength: 60,intelligence: 100, dexterity:90};
    }
}