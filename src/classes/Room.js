export default class Room {
  constructor(name, userMax, adminName, description = "No descirption", id = undefined, charIds = []) {
    this.id = id;
    this.name = name
    this.description = description;
    this.userMax = userMax;
    this.adminName = adminName;
    this.charIds = charIds;
  }
}