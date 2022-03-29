<template>
  <el-container class="layout-container">
    <el-aside width="auto">
      <el-scrollbar>
        <el-menu 
          class="el-menu-vertical-demo" 
          mode="vertical" 
          :collapse="isCollapse" 
          background-color="#304156" 
          text-color="rgb(191, 203, 217)"
        >
          <Sidebar></Sidebar>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container :class="{'mainCustom':isCollapse}">
      <el-header>
        <div>
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px">
              <setting />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </div>
      </el-header>

      <el-main class="content">
        <el-scrollbar>
          <el-button @click="toggle">切换</el-button>
          <el-button @click="toggle1">切换</el-button>
          <div>
            <router-view></router-view>
          </div>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Sidebar from './components/Sidebar.vue';
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue';
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
