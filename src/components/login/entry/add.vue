<script lang="ts" setup>
import tearoom from '@/components/pojo/Tearoom';
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import axiosRequest from "@/api/axiosRequest";

const tearoomObject = reactive(tearoom)
const addTearoomUser =()=>{
  let tear = tearoom;
  axiosRequest({
    url:'/insert',
    method:'post',
    data: tear
  }).then(req=>{
    console.log(req);
  }).catch(err=>{
    console.log(err);
  })
}

//
// const ruleFormRef = ref<FormInstance>()
//
//
// const checkAge = (rule: any, value: any, callback: any) => {
//   if (!value) {
//     return callback(new Error('Please input the age'))
//   }
//   setTimeout(() => {
//     if (!Number.isInteger(value)) {
//       callback(new Error('Please input digits'))
//     } else {
//       if (value < 18) {
//         callback(new Error('Age must be greater than 18'))
//       } else {
//         callback()
//       }
//     }
//   }, 1000)
// }
//
// const validatePass = (rule: any, value: any, callback: any) => {
//   if (value === '') {
//     callback(new Error('Please input the password'))
//   } else {
//     if (ruleForm.checkPass !== '') {
//       if (!ruleFormRef.value) return
//       ruleFormRef.value.validateField('checkPass', () => null)
//     }
//     callback()
//   }
// }
// const validatePass2 = (rule: any, value: any, callback: any) => {
//   if (value === '') {
//     callback(new Error('Please input the password again'))
//   } else if (value !== ruleForm.pass) {
//     callback(new Error("Two inputs don't match!"))
//   } else {
//     callback()
//   }
// }
//
// const ruleForm = reactive({
//   pass: '',
//   checkPass: '',
//   age: '',
// })
//
// const rules = reactive<FormRules<typeof ruleForm>>({
//   pass: [{ validator: validatePass, trigger: 'blur' }],
//   checkPass: [{ validator: validatePass2, trigger: 'blur' }],
//   age: [{ validator: checkAge, trigger: 'blur' }],
// })
//
// const submitForm = (formEl: FormInstance | undefined) => {
//   if (!formEl) return
//   formEl.validate((valid) => {
//     if (valid) {
//       console.log('submit!')
//     } else {
//       console.log('error submit!')
//       return false
//     }
//   })
// }
//
// const resetForm = (formEl: FormInstance | undefined) => {
//   if (!formEl) return
//   formEl.resetFields()
// }
console.log(tearoom);
</script>

<template>
<div>

<!--  <h1>{{ name }}</h1>-->
  <el-form

      :model="tearoomObject"
      status-icon
      label-width="120px"
  >
    <el-form-item label="账号" prop="user_id">
      <el-input v-model="tearoomObject.user_id" type="text" placeholder="请输入账号" />
    </el-form-item>
    <el-form-item label="名字" prop="checkPass">
      <el-input v-model="tearoomObject.nickname" type="text" placeholder="请输入你的名字"/>
    </el-form-item>
    <el-form-item label="初始值" prop="age">
      <el-input v-model="tearoomObject.snacks" placeholder="零食(可为空)" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="addTearoomUser()">提交添加</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<style scoped>

</style>
