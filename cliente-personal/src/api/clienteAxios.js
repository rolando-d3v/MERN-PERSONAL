import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: "http://localhost:4000/api/V1"
})

export default clienteAxios