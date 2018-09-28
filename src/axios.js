import axios from 'axios';

var instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.interceptors.request.use(config =>{
    // console.log(config);
    return config;
}),
(error => {
    return Promise.reject(error);
});

instance.interceptors.response.use(response =>{
   // console.log(response);
    return response;
}),
(error => {
    return Promise.reject(error);
});

export default instance;