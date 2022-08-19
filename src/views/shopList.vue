<template>
    <div>
        <div class="select-box">
            <el-form :inline="true" :model="selectData" class="demo-form-inline">
                <el-form-item label="标题">
                    <el-input v-model="selectData.title" placeholder="请输入关键字" />
                </el-form-item>
                <el-form-item label="详情">
                    <el-input v-model="selectData.body" placeholder="请输入关键字" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import { InitData } from '../type/shop';
export default {
    setup() {
        const data = reactive(new InitData());
        return {
            ...toRefs(data),
        };
    },
};
</script>

<style lang="scss" scoped></style>
