import axios from 'axios'

//https://viacep.com.br/
//01001000/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})
export default api;