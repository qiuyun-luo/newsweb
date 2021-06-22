<template>
<div>
  <el-input v-model="title"></el-input>
    <span v-text="user_id"></span>
    <el-upload class="upload-demo">
      <el-button size="small" type="primary">稿件上传</el-button>
    </el-upload>
</div>
</template>

<script>
    export default{
      data(){
        return{
          user_id:'',
          title:''
        }
      },
      created() {
        this.user_id=window.sessionStorage.getItem("user_id");
      }
    }
</script>

<style>
</style>
