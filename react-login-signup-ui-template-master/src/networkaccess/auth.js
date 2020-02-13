import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL="http://localhost:3333/"

const login=(data)=>{
    console.log("CAlling to backend Login")
    return axios.post('/auth/login',data)
}

const register=(data)=>axios.post('/auth/register',data)

export default {login,register}