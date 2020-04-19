import axios from "axios";

export const fetchUser = ()=>{
    return axios.get('/user')
}
export const fetchList = ()=>{
    return axios.get('/list')
}


export const getList = () => {
    axios.get('/list').then( data => {
        if(data.data.result === 0) {
            console.log('success')
        }
    })
}