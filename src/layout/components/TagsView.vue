<template>
  <div class="navbar">
    <Hamburger class="hamburger-container" />
    <div class="right-menu">
      
      <el-dropdown class="right-menu-item hover-effect" placement="bottom-end" trigger="click">
        <el-avatar shape="square" :size="45" :src="circleUrl" />
        <el-icon style="margin-left:10px">
          <caret-bottom />
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>首页</el-dropdown-item>
            <el-dropdown-item>项目地址</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import Hamburger from './Hamburger.vue';
import { CaretBottom } from '@element-plus/icons-vue';
const circleUrl =
    'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80';
</script>

<style lang="scss" scoped>
.navbar {
    height: 60px;
    overflow: hidden;
    .hamburger-container {
        line-height: 60px;
        padding: 0 15px;
        height: 100%;
        float: left;
        cursor: pointer;
        transition: background 0.3s;
        -webkit-tap-highlight-color: transparent;
        &:hover {
            background: rgba(0, 0, 0, 0.025);
        }
    }
    .right-menu {
        float: right;
        line-height: 60px;
        height: 100%;
        &:focus {
            outline: none;
        }
        .right-menu-item {
            display: inline-block;
            height: 100%;
            padding: 0 8px;
            padding-top: 8px;
            color: #5a5e66;
            box-sizing: border-box;
            &.hover-effect {
                cursor: pointer;
                transition: background 0.3s;
                &:hover {
                    background: rgba(0, 0, 0, 0.025);
                }
            }
        }
    }
}
</style>
