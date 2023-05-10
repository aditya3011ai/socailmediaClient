import axios from 'axios'
import { getItem, KEY_ACCESS_TOKEN, removeItem, setItem } from './localStorageManager';

export const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_SERVER_BASE_URL,
    withCredentials: true
})

axiosClient.interceptors.request.use(
    (request)=>{
        const accessToken =getItem(KEY_ACCESS_TOKEN);
        request.headers["authorization"]=`Bearer ${accessToken}`
        return request
    }
)

axiosClient.interceptors.response.use(
    async(response)=>{
        try {
        const data = response.data;
        if(data.status==="ok"){
            return data
        }
        const originalRequest = response.config;
        const status = data.statusCode;  
        const error = data.message;

        if(status===401 && !originalRequest._retry){  
            originalRequest._retry = true;
            
            const response = await axios.create({
                withCredntials:true,
            }).get(`${process.env.REACT_APP_SERVER_BASE_URL}/auth/refresh`)

            if(response.status==='ok'){
                setItem(KEY_ACCESS_TOKEN,response.result.accessToken)
                originalRequest.headers['authorization'] = `Bearer ${response.result.accessToken}`;
                return axios(originalRequest)
            }else{
                removeItem(KEY_ACCESS_TOKEN);
                window.location.replace('/login','_self')
                return Promise.reject(error)
            }
        }
        return Promise.reject(error)
    } catch (e) {
            console.log(e);
    }
    }
)
