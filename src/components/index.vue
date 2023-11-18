<template>
  <div>

    <div id="side-index">
      <div id="index-query">
        <span class="sp-top">欢迎用户: {{ name }}</span>
        <button id="logout" @click="loginOut()">注销登录</button>
      </div>
    </div>
  <el-container class="layout-container-demo" style="height: 500px">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu :default-openeds="['1', '3']">
          <el-sub-menu index="1">
            <template #title>
              首页
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="list()">用户管理</el-menu-item>
              <el-menu-item index="1-2" @click="tearoom()">茶室管理</el-menu-item>
              <el-menu-item index="1-3">Option 3</el-menu-item>
            </el-menu-item-group>
>
          </el-sub-menu>

        </el-menu>
      </el-scrollbar>
    </el-aside>


    <el-container>

      <el-header style="text-align: right; font-size: 12px">

      </el-header>

      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {useRoute} from "vue-router";
import router from "@/router/router"
let name = useRoute().query.username;
const list=() =>{
    router.push({
      path:'/list'
    })
}
const tearoom =()=>{
  router.push({
    path:'/tearoom'
  })
}

const  loginOut=()=>{
    router.push({path:'/'});
  }


</script>

<style scoped>
#side-index{
  height: 30px;
}
#index-query{
  background-color: #fcc9c9;
  width: 100%;
  height: 30px;

}
#logout{
  float: right;
  margin-right: 30px;
  line-height: 30px;
  height: 30px;
}
.ce-ni-ma{

  text-align: center;

}
.sp-top{

  position: relative;
  left: 40px;
  /*border: 1px solid lightcoral;*/
  text-align: center;
  top: 3px;
  width: 50px;
}
#side-body-s{
  -webkit-user-select:none;
  border: #3b3a25 solid 1px;
  -moz-user-select:none;
  -ms-user-select:none;
  position: relative;

  user-select:none;
  /*background-color: #888888;*/
  height: 60px;
  text-align: center;
  line-height: 60px;
}
#sid-body{
  height: auto;
  display:inline;
  transition: all 10s;

}
li{

  width: 100%;
}
.showAll{
  -webkit-user-select:none;
  position: relative;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  list-style-type: none;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border: #3b3a25 solid 1px;
  left: -10px;
  z-index: 0;
  top: -15px;
  width: 100%;
}
.outShow{
  display: none;
  list-style-type: none;

}
#index-fallback{

  position: relative;
  height: 60px;
  text-align: center;
  /*left: 100px;*/

  line-height: 60px;
}
#index-fallback{

  border: #3b3a25 solid 1px;
}
#side-body{

  width: 16%;

}

.sublist {
  /*display: none;*/
}
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
