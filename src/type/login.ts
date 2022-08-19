import type { FormInstance } from 'element-plus';
import { ref } from 'vue';

// 限制类型
export interface loginFormInt {
    name: string;
    password: string;
    passwordNext: string;
}
// 导入出去
export class InitData {
    form: loginFormInt = {
        name: '',
        password: '',
        passwordNext: '',
    };
    loginFormRef = ref<FormInstance>();
}
