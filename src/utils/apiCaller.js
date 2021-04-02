import axios from 'axios';
import * as configs from './../constants/Config';
export default function callApi(endpoint,method='GET',body){
    return axios({
        method,
        url: `${configs.API_URL}${endpoint}`,
        data: body
    });
}