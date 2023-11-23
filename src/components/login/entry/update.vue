<script lang="ts" setup>
import tearoom from '@/components/pojo/Tearoom';
import { reactive, ref } from 'vue';

import axiosRequest from "@/api/axiosRequest";

tearoom = reactive(JSON.parse(localStorage.getItem('tearoomOBJ')));





const updateTearoomUser = () =>{
  // console.log(tearoom);
  axiosRequest({
    url:'/update',
    method:'post',
    data: tearoom
  }).then(req=>{
    console.log(req);
    if (req.data.data!=null){
      alert("修改成功!")
    }
    // localStorage.removeItem('tearoomOBJ');
  }).catch(err=>{
    console.log(err);
  })
}



// console.log(tearoom.row);
</script>

<template>
  <div>

    <!--  <h1>{{ name }}</h1>-->
    <el-form
        :model="tearoom"
        status-icon
        label-width="120px"
    >
      <el-form-item label="账号" prop="user_id">
        <el-input v-model="tearoom.user_id" type="text" placeholder="Please input"/>
      </el-form-item>
      <el-form-item label="名字" prop="checkPass">
        <el-input v-model="tearoom.nickname" type="text" placeholder="请输入你的名字"/>
      </el-form-item>
      <el-form-item label="好感度" prop="age">
        <el-input v-model="tearoom.snacks"  />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updateTearoomUser()">提交修改</el-button>
      </el-form-item>
    </el-form>


  </div>
</template>

<style scoped>

</style>
