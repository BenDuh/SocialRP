export default class Character{
    // Seb : changé le paramètre "classe" en "charClass". On peut pas mettre juste "class" car c'est déjà pris un javascript (même raison que l'utilisation de className au lieu de class dans le jsx)
    constructor(id, name, race, charClass, user_id = null, stats={}, level  = 0, exp = 0, ) {
        this.id = id;
        this.name = name;
        this.race = race;
        this.class = charClass;
        this.level = level;
        this.exp = exp;
        this.stats = stats;
        this.user_id = user_id;
    } 
}