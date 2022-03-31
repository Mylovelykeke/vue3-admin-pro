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
import Sidebar from './components/Sidebar.vue';
import TagsView from './components/TagsView.vue';

const model = ref<'vertical' | 'horizontal'>('horizontal');
</script>

<style lang="scss" scoped>
.layout-container {
    height: 100vh;
}
</style>
<style>
.el-header {
    padding-left: 0 !important;
}

.content {
    height: calc(100vh - 60px);
    background: #f0f2f5;
}
</style>
