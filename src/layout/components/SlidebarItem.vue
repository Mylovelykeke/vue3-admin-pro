<template>
  <el-sub-menu
    v-if="item.children && item.children.length > 1 || item.meta && item.meta.alwaysShow"
    :index="item.path"
    popper-append-to-body
  >
    <template #title>
      <el-icon>
        <setting />
      </el-icon>
      <Title v-if="item.meta" :icon="item.meta.icon" :name="item.meta.title"></Title>
    </template>
    <SlidebarItem v-for="child in item.children" :key="child.path" :item="child"></SlidebarItem>
  </el-sub-menu>
  <el-menu-item v-else :index="item.path">
    <el-icon>
      <setting />
    </el-icon>
    <template #title>
      <Title :icon="'22'" :name="resovleTitle(item)"></Title>
    </template>
  </el-menu-item>
</template>

<script setup lang="ts">
import { h } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import { FunctionalTitle as Title } from './Title';
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue';

const { item } = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const resovleTitle = (item: RouteRecordRaw | any) => {
  if (item.children) {
    return item.children[0].meta?.title
  }
  return item.meta?.title
}
</script>

