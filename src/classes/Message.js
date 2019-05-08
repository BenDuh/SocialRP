export default class Message {
    constructor (charName, content, roomId, date = Date.now()) {
        this.id = undefined;
        this.roomId = roomId;
        this.charName = charName;
        this.content = content;
        this.date = date;
    }
}