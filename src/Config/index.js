import axios from "axios";

export const baseURL= process.env.REACT_APP_API_URL;




const api = axios.create({ 
    baseURL:baseURL,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
 })


 export const logInfunc = (data) => api.post('/login', data);