import axios from 'axios';
import qs from 'qs';
// import { isCache, setCache } from './cache'; // 请求缓存

let baseURL = '';
// const env = process.env.NODE_ENV;
// if(env === 'development'){
//     baseURL = 'https://www.fangqi5.top';
// }

axios.defaults.withCredentials = true;

function axiosRequest(method, url, params, type){
    switch (method) {
        case 'get':
            return new Promise((resolve, reject)=>{
                // isCache(url, params) ? resolve(isCache(url, params)) : 
                axios({
                    url: baseURL + url,
                    method: 'get',
                    params: {
                        ...params,
                        t: new Date().getTime(),
                    },
                    // timeout: 10000,
                }).then((json)=>{
                    // setCache(url, params, json.data);
                    json.status === 200 && resolve(json.data);
                }).catch((error)=>{
                    reject(error);
                });
            });
        case 'post':
            return new Promise((resolve, reject)=>{
                axios({
                    url: baseURL + url,
                    method: 'post',
                    data: type === 'form' ? qs.stringify(params) : params,
                    timeout: 100000,
                }).then((json)=>{
                    json.status === 200 && resolve(json.data);
                }).catch((error)=>{
                    reject(error);
                });
            });
        case 'file':
            return new Promise((resolve, reject)=>{
                axios({
                    url: baseURL + url,
                    method: 'post',
                    data: type === 'form' ? qs.stringify(params) : params,
                }).then((json)=>{
                    json.status === 200 && resolve(json.data);
                }).catch((error)=>{
                    reject(error);
                });
            });
        default:
            break;
    }
}

export default axiosRequest;