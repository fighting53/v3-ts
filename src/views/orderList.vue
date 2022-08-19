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
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="ID" width="180" />
            <el-table-column prop="title" label="标题" width="180" />
            <el-table-column prop="body" label="详情" />
        </el-table>
    </div>
</template>

<script lang="ts">
import { onMounted, reactive } from 'vue';
// import { onMounted, reactive, toRefs, ref } from 'vue';
// import { InitData } from '../type/order';
// import { getList } from '../http/api';
import { tableData } from '../data/order.js';
export default {
    setup() {
        // const data = reactive(new InitData());
        const selectData: { page: number; count: number; title?: string; body?: string } = reactive({
            title: '',
            body: '',
            page: 0,
            count: 0,
        });
        onMounted(() => {
            // getList({ page: data.selectData.page }).then(res => {
            //     console.log(res);
            // });
        });
        return {
            // ...toRefs(data),
            tableData,
            selectData,
        };
    },
};
</script>

<style lang="scss" scoped></style>
