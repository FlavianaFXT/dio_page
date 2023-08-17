import Axios from 'axios';

const Api = Axios.create({
    baseURL: 'http://localhost:8001'
});

export { Api };