<template>
  <el-container class="layout-container">
    <!-- 侧边栏 -->
    <Sidebar />
    <el-container>
      <el-header>
        <TagsView />
      </el-header>
      <el-main class="content">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useStore } from '/@/store';
import Sidebar from './components/Sidebar.vue';
import TagsView from './components/TagsView.vue';

const store = useStore();
const item = {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
};
let obj = Array.from({ length: 20 }).fill(item) as object[];
const tableData = ref(obj);
const isCollapse = ref(false);
const model = ref<'vertical' | 'horizontal'>('horizontal');
const toggle = () => {
    isCollapse.value = !isCollapse.value;
};
const toggle1 = () => {
    model.value = 'vertical';
};
</script>

<style lang="scss" scoped>
.layout-container {
    height: 100vh;
}
</style>
<style>
.el-header{
  padding-left: 0 !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}
.el-menu-vertical-demo {
    height: 100vh;
}

.toobar {
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
.content {
    height: calc(100vh - 60px);
    background: #f0f2f5;
}
</style>
