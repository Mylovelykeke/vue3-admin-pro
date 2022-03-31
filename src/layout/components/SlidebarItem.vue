<template>
  <el-sub-menu v-if="item.children && item.children.length > 1 || item.meta && item.meta.alwaysShow" :index="item.path">
    <template #title>
      <Title v-if="item.meta" :icon="item.meta.icon" :name="item.meta.title"></Title>
    </template>
    <SlidebarItem v-for="child in item.children" :key="child.path" :item="child"></SlidebarItem>
  </el-sub-menu>
  <el-menu-item v-else :index="item.path">
    <Title v-if="item.meta" :name="item.meta.title"></Title>
  </el-menu-item>
</template>

<script setup>
import { h } from 'vue';
import { FunctionalTitle as Title } from './Title';

const { item } = defineProps({
    item: {
        type: Object,
        required: true,
    },
});
</script>

