import axios from 'axios';

const BACkEND_URL='http://localhost:3000';

export const login=({name,password})=>{
    debugger
    return axios.post(`${BACkEND_URL}/api/users/login`,{
        name,
        password
    }).then(res=>res.data)
}

export const getUsers=()=>{
    debugger
    return axios.get(`${BACkEND_URL}/api/users/`,{
        headers:{
            authorization:`bearer ${localStorage.getItem('token')}`
        }
    })
    .then(res=>res.data)
}

export const sendMsgs=({from,to,text})=>{
    debugger
    return axios.post(`${BACkEND_URL}/api/messages/`,{
        headers:{
            authorization:`bearer ${localStorage.getItem('token')}`
        },
            from,
            to,
            text
      
    })
    .then(res=>res.data)
}

export const inboxMessages=(id)=>{
    debugger
    return axios.get(`${BACkEND_URL}/api/users/${id}/to`)
    .then(res=>res.data)
}
export const sentMessages=(id)=>{
    debugger
    return axios.get(`${BACkEND_URL}/api/users/${id}/from`)
    .then(res=>res.data)
}

export const findUserByID=(id)=>{
    debugger
    return axios.get(`${BACkEND_URL}/api/users/${id}`)
    .then(res=>res.data)
}

export const Registeruser=({ name,email,password,age,gender,contry})=>{
    debugger
    return axios.post(`${BACkEND_URL}/api/users/`,{
        name,email,password,age,gender,contry
    })
    .then(res=>res.data)
}