// import axios from 'axios';
// import queryString from 'query-string';

// const AxiosClient = axios.create({
//    baseURL: process.env.REACT_APP_API_URL,
//    header:{
//     'content-type': 'application/json',
//    },
//    paramsSerializer: param => queryString.stringify(param),
// });

// AxiosClient.interceptors.request.use(async (config) =>{

//     return config;
// })

// AxiosClient.interceptors.response.use((response) => {
//     if( response && response.data ){
//         return response.data
//     }
//     return response;
// }, (error) => {
//     throw error;
// })

// export default AxiosClient

import axios from 'axios';
import queryString from 'query-string';

const AxiosClient = axios.create({
 baseURL: process.env.REACT_APP_API_URL,
 headers: {
 'content-type': 'application/json',
 },
 paramsSerializer: params => queryString.stringify(params),
});
AxiosClient.interceptors.request.use(async (config) => {
 // Handle token here ...
 return config;
})
AxiosClient.interceptors.response.use((response) => {
 if (response && response.data) {
 return response.data;
 }
 return response;
}, (error) => {
 // Handle errors
 throw error;
});
export default AxiosClient
