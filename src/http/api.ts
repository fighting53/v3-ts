import $http from './index';

interface loginData {
    name: string;
    password: string;
    passwordNext: string;
}

export const login = (data: loginData) => $http({ url: '/login', method: 'post', data });
export const getList = (data: any) => $http({ url: '/getList', method: 'get', data });
