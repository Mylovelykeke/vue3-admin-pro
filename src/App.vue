<script setup lang="ts">
import { ref } from 'vue';
import zhTW from 'element-plus/lib/locale/lang/zh-tw';
const locale = ref(zhTW);
const color1 = ref(null)
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>
