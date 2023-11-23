<template>
  <div>
    <div id="list">
      <el-button class="addBut" style="float: left;" @click="list.add()">添加</el-button>
    <el-form>

        <table>
          <thead>
            <tr>
              <td>用户标识</td>
              <td>姓名</td>
              <td>好感度</td>
              <td>余额</td>
              <td>登录时间</td>
              <td>结婚对象</td>
              <td>结婚签到时间</td>
              <td>操作</td>
            </tr>
          </thead>
          <tbody>
          <tr v-for="(tearoom,index) in list.tearooms.value" :key="index">
            <td>{{ tearoom.user_id      }}</td>
            <td>{{ tearoom.nickname     }}</td>
            <td>{{ tearoom.favorability }}</td>
            <td>{{ tearoom.snacks       }}</td>
            <td>{{ tearoom.sign_in_time }}</td>
            <td>{{ tearoom.propose      }}</td>
            <td>{{ tearoom.propose      }}</td>
            <td>
              <el-button class="updateBut"  @click="list.update(tearoom)">修改</el-button>
              <el-button class="deleteBut" >删除</el-button></td>
          </tr>
          </tbody>
        </table>
      <div>
        <el-pagination
            v-model:currentPage="list.pageIndex"
            :page-sizes="[5,10,15,20]"
            v-model::page-size="list.pageEnd"
            layout="total, sizes, prev, pager, next, jumper"
            v-model:total="list.total.value"
            @size-change="list.handleSizeChange"
            @current-change="list.handleCurrentChange">
        </el-pagination>
      </div>
    </el-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import list from '@/components/login/utils/list.js';

list.onQuery();

</script>
<style scoped>
@import  '@/css/list.css';
tr td{
  border: 1px solid #f6bebe;
}
#list{
  position: absolute;
  width: 100%;
}
</style>
