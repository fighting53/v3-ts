<template>
    <div class="login">
        <h1>登录页面</h1>
        <el-form ref="loginFormRef" :model="form" :rules="rules" label-width="70px" class="loginForm" :size="formSize" status-icon>
            <el-form-item label="用户名" prop="pass">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="密码" prop="checkPass">
                <el-input v-model="form.password" type="password" />
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input v-model="form.passwordNext" type="password" />
            </el-form-item>
            <el-form-item class="login__button">
                <el-button type="primary" @click="onSubmit(loginFormRef)" class="btn">登录</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { InitData } from '../type/login';
import type { FormInstance } from 'element-plus';
import { login } from '../http/api'; //export导出的，要花括号
import { useRouter } from 'vue-router';
const router = useRouter();

export default defineComponent({
    setup() {
        const data = reactive(new InitData()); //接收
        const rules = reactive({
            name: [
                { required: true, message: '请输入账号', trigger: 'blur' },
                { min: 3, max: 5, message: '账号长度', trigger: 'blur' },
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 3, max: 8, message: '密码长度', trigger: 'blur' },
            ],
            passwordNext: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 3, max: 8, message: '密码长度', trigger: 'blur' },
            ],
        });
        const onSubmit = (loginFormRef: FormInstance) => {
            loginFormRef.validate((valid: boolean) => {
                if (valid) {
                    login(data.form).then(res => {
                        localStorage.setItem('token', res.data.token); //存token到res里
                        router.push('/');
                    });
                }
            });
        };

        return {
            ...toRefs(data),
            ...toRefs(rules),
            onSubmit,
        };
    },
});
</script>

<style lang="scss" scoped>
.login {
    width: 100%;
    min-height: 745px;
    background-image: url('../assets/bg.png');
    background-size: cover;
    padding-top: 200px;
    .loginForm {
        width: 400px;
        padding: 20px;
        background: #fff;
        border-radius: 20px;
        margin: 0 auto;
        .btn {
            // width: 100%;
        }
    }
    h1 {
        text-align: center;
        margin: 20px auto;
    }
    .login__button {
        transform: translate(20%);
    }
}
</style>
