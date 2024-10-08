import axios from "axios";

const myAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 3000
})

export default myAxios