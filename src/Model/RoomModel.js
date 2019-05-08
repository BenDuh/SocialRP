class RoomModel {

    uri = "http://localhost:3000/room";

    getAllRoom = (action) => {
        fetch(this.uri)
            .then(response => {
            if (response.ok && response.status === 200){
                return response.json();
            }})
            .then( data =>  action(data) )
            .catch(error => console.log(error));
    };

    getRoomByName = (name, action) => {
        const url = `${this.uri}?name=${name}`;

        fetch(url, {
            method: "get",
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        }).then(response => {
            if (response.ok && response.status === 200){
                 return response.json();
            }
        }).then( data =>  action(data) )
            .catch(error => console.log(error))
    }

    addRoom = (room) => {
        fetch(this.uri, {
            method: "post",
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(room)

        }).then(response => {
            if (response.ok && response.status === 200){
                return response.json();
            }
        })
            .catch(error => console.log(error))
    }



}

export default RoomModel;