
import axios from "axios";
import cookies from 'js-cookie'
let cancelToken = axios.CancelToken; //取消请求
// let pending = [];
const source = cancelToken.source();
/**
 * 发起一个请求
 * @param {string} method HTTP method
 * @param {string} url 请求的目标 URL
 * @param {object} params 请求参数对象
 * @param {object} opts 请求选项
 */

// let cancelPending = (config) => {
//     pending.forEach((item, index) => {
//         if (!!config) {
//             if (item.u == config.url) {
//                 item.f(); //取消请求
//                 pending.splice(index, 1); //移除当前请求记录
//             };
//         } else {
//             item.f(); //取消请求
//             pending.splice(index, 1); //移除当前请求记录
//         }
//     });
// };
let HEADERS = {
    'Content-Type': 'application/json; charset=utf-8',
    'authorization': `Bearer ${cookies.get('token')}`,
    'Access-Control-Allow-Origin': '*',
    'Content-Security-Policy': 'upgrade-insecure-requests',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
}
export async function request(method, url, params, opts = {}) {
    const { headers = {}, ...rest } = opts
    let config;
    config = Object.assign({
        method: method,
        url: url,
        headers: Object.assign({}, HEADERS, headers),
        // timeout: 20000,
        timeout: 35000,
    }, rest);
    switch (method) {
        case "GET"://get请求
            config = Object.assign(config, { params: params });
            break;
        default: config = Object.assign(config, { data: params });
            break;
    }
    // http request 拦截器
    axios.interceptors.request.use(
        function (config) {
            // console.log('config:%o', config)
            // cancelPending(config);
            // config.cancelToken = new cancelToken((c) => {
            //     pending.push({ 'u': config.url, 'f': c });
            // })
            // config.cancelToken = source.token
            // console.log('看看取消的token:%o', config)
            //在请求发出之前进行一些操作
            return config;
        },
        function (err) {
            //Do something with request error
            return Promise.reject(err);
        }
    );
    axios.interceptors.response.use(
        response => {
            return response;
        },
        err => {// 请求超时，设置重新请求及错误提示   
            const res = JSON.parse(JSON.stringify(err));
            return res
        }
    );
    try {
        const res = await axios(config);
        return res;
    } catch (e) {
        return {};
    }

}

/**
 * 发起一个 get 请求
 * @param {*} args 参数：url,param,opts
 */
export function get(...args) {
    return request("GET", ...args);
}

/**
 * 发起一个 post 请求
 * @param {*} args 参数：url,param,opts
 */
export function post(...args) {
    return request("POST", ...args);
}

/**
 * 发起一个 put 请求
 * @param {*} args 参数：url,param,opts
 */
export function put(...args) {
    return request("PUT", ...args);
}

/**
 * 发起一个 delete 请求
 * @param {*} args 参数：url,param,opts
 */
export function deletes(...args) {
    return request("DELETE", ...args);
}
