import axios  from 'axios';

export default class ServiceCrud {

    static getCallBack = (url,cb) => {
        axios.get(url).then(
            (response) =>
            cb(response.data)
        ).catch();
    }

    static getId = (url,id) =>{
        return axios.get(url+'/'+id);
    }
    static get = (url) =>{
        return axios.get(url);
    }
    static add = (url,data,cb) => {
        axios.post(url,data).then(
            ()=>{
                cb();
            }
            ).catch((error)=>console.log(error));
    }

    static update = (url,data,cb) => {
        axios.put(url+'/'+data.id,data).then(
            ()=>{
                cb();
            }
            ).catch((error)=>console.log(error));
    }
    static delete = (url,data,cb) => {
        axios.delete(url+'/'+data.id).then(
            ()=>{
                cb();
            }
            ).catch((error)=>console.log(error));
    }
}