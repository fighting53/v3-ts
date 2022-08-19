// http封装
import axios from 'axios';
import { ElMessage } from 'element-plus';

enum MEGS {
    '操作成功' = 200,
    '密码错误',
    '账号错误',
    '请求异常',
}
// 创建一个http实例
const $http = axios.create({
    baseURL: 'http://www.fasrmock.site/mock/323354e56ef21147c3f550e184350e18435baa1/api',
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json; charset=utf-8 ',
    },
});
// 请求拦截
$http.interceptors.request.use(config => {
    config.headers = config.headers || {}; //要么从上面去取一个数据
    if (localStorage.getItem('token')) {
        //此时能拿到数据
        config.headers.token = localStorage.getItem('token') || ''; //token此时只支持string|null类型
    }
    return config;
});

// 响应
$http.interceptors.response.use(
    res => {
        // 从上面拿出code码
        const code: number = res.data.code;
        if (code !== 200) {
            //不等于200就拿出错误
            ElMessage.error(MEGS[code]);
            return Promise.reject(res.data);
        }
        return res.data;
    },
    err => {
        console.log(err);
    }
);

export default $http;
