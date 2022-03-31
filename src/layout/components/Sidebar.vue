<template>
  <el-aside width="auto">
    <el-scrollbar style="background:#304156">
      <el-menu class="el-menu-vertical-demo" mode="vertical" :collapse="isCollapse" background-color="#304156" text-color="rgb(191, 203, 217)">
        <SlidebarItem v-for="(item,key) in filterRoutes" :key="key" :item="item" />

        <!-- <el-menu-item>
          <el-icon>
            <Document />
          </el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-sub-menu>
          <template #title>
            <el-icon>
              <Document />
            </el-icon>
            <span>权限</span>
          </template>
          <el-menu-item index="1-4-1">item 1</el-menu-item>
          <el-menu-item index="1-4-2">item 2</el-menu-item>
          <el-menu-item index="1-4-3">item 3</el-menu-item>
          <el-menu-item index="1-4-4">item 4</el-menu-item>
        </el-sub-menu> -->

      </el-menu>
    </el-scrollbar>
  </el-aside>

</template>

<script setup lang="ts">
import SlidebarItem from './SlidebarItem.vue';
import { useAppStore } from '/@/store/app';
import { usePermission } from '/@/store/permission';
import { storeToRefs } from 'pinia';

const appStore = useAppStore();
const permission = usePermission();
const { isCollapse } = storeToRefs(appStore);
const { filterRoutes } = storeToRefs(permission);
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 250px;
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
