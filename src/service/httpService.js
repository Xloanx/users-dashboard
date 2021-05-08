import axios from 'axios';
import { toSafeInteger } from 'lodash';

axios.interceptors.response.use(null, error =>{
    const expectedError = 
    error.response && 
    error.response.status >= 400 && 
    error.response.status < 500;

    if (!expectedError){
        console.log("Logging Error", error);
        alert("An Unxpected Error Occured");
    }
    return Promise.reject(error);
});

export default{
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};