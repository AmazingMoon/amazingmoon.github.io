/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
import router from "./router";
import {message} from 'ant-design-vue';


const BASE_URL = 'xxxx/v1/';
let defaultConfig = {
    baseURL: BASE_URL,
    timeout: 30000,
};

// 创建axios实例
let instance = axios.create(defaultConfig);
/**
 * 请求拦截器
 * 每次请求前，如果存在token，在请求头中携带token
 */
instance.interceptors.request.use(
    config => {
        // 登录流程中，根据本地是否存在token判断用户的登录情况
        const token = localStorage.getItem('token');
        token && (config.headers.Authorization = `Bearer ${token}`);
        return config;
    },
    error => Promise.error(error))

// 响应拦截器
instance.interceptors.response.use(
    // 请求成功
    res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
    // 请求失败
    error => {
        const {response} = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围
            let vm = '';
            if (error.config.config) {
                vm = error.config.config.vm ? error.config.config.vm : '';
            }
            errorHandle(response, vm);
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            return Promise.reject(error);
        }
    });

const http = {
    get: (url, data, config) => {
        return instance.get(BASE_URL + url, {params: data, config});
    },
    post: (url, data, config) => {
        return instance.post(BASE_URL + url, data, {config});
    },
    // put,patch...
};


/**
 * 跳转登录页
 * 携带当前页面路由，以便登录成功后返回当前页面
 */
const toLogin = () => {
    router.replace({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullPath
        }
    });
}

/**
 * 请求失败后的错误统一处理
 * @param {Object} response 请求失败的对象
 * @param {Object} vm vue component实例
 */
const errorHandle = (response, vm) => {
    // 状态码判断
    if (vm) vm.loading = false;
    switch (response.status) {
        // 401: 未登录状态，跳转登录页
        case 401:
            toLogin();
            break;
        // 404请求不存在
        case 404:
            message.error('请求的资源不存在');
            break;
        case 422:
            message.error(response.data.message);
            break;
        default:
            return;
    }
}

export default http;
