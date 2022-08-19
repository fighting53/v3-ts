<template>
    <el-container>
        <el-header height="80px">
            <el-row :gutter="20">
                <el-col :span="4">
                    <img src="../assets/react.png" alt="" class="logo" />
                </el-col>
                <el-col :span="16"><h2>后台管理系统</h2></el-col>
                <el-col class="btn-text" :span="4">
                    <el-button type="text">Tina</el-button>
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu router active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="1" text-color="#fff" @open="handleOpen" @close="handleClose">
                    <el-menu-item v-for="i in list" :key="i.path" :index="i.path">
                        <el-icon><icon-menu /></el-icon>
                        <span>{{ i.meta.title }}</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main><router-view /></el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'HomeView',
    components: {
        // HelloWorld,
    },
    setup() {
        const router = useRouter();
        const list = router.getRoutes().filter(item => item.meta); //动态获取路由下面的所有路由
        console.log(list);
        return {
            list,
        };
    },
});
</script>
<style lang="scss" scoped>
.logo {
    height: 80px;
    background-size: cover;
}
h2 {
    height: 80px;
    color: #fff;
    line-height: 80px;
    text-align: center;
}
.el-header {
    background: #545c64;
}
.btn-text {
    line-height: 80px;
    text-align: center;
    text-align: right;
    .el-button-text {
        color: #fff;
    }
}
.el-aside {
    .el-menu {
        height: calc(100vh - 80px);
    }
}
</style>
