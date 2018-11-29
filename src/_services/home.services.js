import axios from 'axios';
import {apiPath} from "../_constant/api.constant";

export const loadServices = {
    fetchRemoteSource
}

function fetchRemoteSource(){
    return axios.get(apiPath.REMOTE_SOURCE)
    .then(response => response);
}