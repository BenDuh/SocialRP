import Character from "./Character";

export default class Archer extends Character{
    constructor(id, name, race, charClass="Archer"){
        super(id, name, race, charClass);
        this.stats = {life:80, strength: 90,intelligence: 70, dexterity:100};
    }
}