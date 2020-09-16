import axios from 'axios'
import qs from 'qs';
import Vue from 'vue'

let instance = axios.create({
    // baseURL: 'http://192.168.1.23:8888',
    baseURL: 'http://ds.dsbdc.cn:8888',
    // baseURL: 'http://192.168.1.169:9999',
    // baseURL: 'http://192.168.1.27:8888',
    timeout: 30000,
});


function getHttp(url, params) {
    return instance.get(url, params)
}

function postHttp(url, params) {
    let newParams = qs.stringify(params);
    return instance.post(url, newParams)
}

export { getHttp, postHttp }



