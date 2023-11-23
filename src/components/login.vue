<template>
  <div style="background-color: #f6bebe">
    <div class="image-back">
      <div id="login">
<!--        <el-image class="img-1" :src="img" alt="" width="132" height="92" style="width: 132px;margin-left: 50px;">-->
          <el-avatar :src="login.imageUrl.value" style="width: 150px;height: 150px;margin-left: 50px;"/>
        <h1 style="width: 222px;margin-left: 70px">请登录</h1>
        <div >
          <div style="width: 230px;position: relative;left: 10px">
            <label>账号:</label>
            <input type="text" @blur="login.blurUsername(login.use_id.value)" v-model="login.use_id.value" name="id">
          </div>
          <div style="width: 230px;position: relative;top: 10px;left: 10px">
            <label>密码:</label>
            <input v-model="login.nickname1.value" type="text" name="name">
          </div>
          <div style="position: relative;">
            <input type="button" value="注册" @click= "login.add()" class="input-a">
            <input type="button" value="登录" @click= "login.sub()" class="input-su">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/css/login.css";
.image-back{
  background-color: #f6bebe;
}
</style>

<script setup>

import login from '@/ts/login';


</script>

