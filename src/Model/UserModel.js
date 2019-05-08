class UserModel {

    uri = "http://localhost:3000/user";

    getAllUser = (action) => {
        fetch(this.uri)
            .then(response => {
            if (response.ok && response.status === 200){
                return response.json();
            }})
            .then( data =>  action(data) )
            .catch(error => console.log(error));
    };

    getUserByName = (username, action) => {
        const url = `${this.uri}?username=${username}`;

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

    addUser = (user) => {
        fetch(this.uri, {
            method: "post",
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(user)

        }).then(response => {
            if (response.ok && response.status === 200){
                return response.json();
            }
        })
            .catch(error => console.log(error))
    }



}

export default UserModel;