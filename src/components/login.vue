<template>

  <div>
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="VUE图片" />
      </div>
    <el-form :model="LoginForm" :rules="rules" ref="LoginFormRef" label-width="100px" class="demo-ruleForm">

      <el-form-item label="用户名" prop="username">

        <el-input v-model="LoginForm.username"></el-input>

      </el-form-item>

      <el-form-item label="密码" prop="password">

        <el-input type="password" v-model="LoginForm.password"></el-input>

      </el-form-item>

      <el-form-item>

        <el-button type="primary" @click="login('LoginFormRef')">登录</el-button>

        <el-button type="infor" @click="reset('LoginFormRef')">重置</el-button>

      </el-form-item>

    </el-form>

  </div>

</template>

<script>

export default {

  data() {

    return {

      LoginForm: {

        username: "",

        password: ""

      },

      rules: {

        username: [

          {

            required: true,

            message: "请输入用户名",

            trigger: ["blur", "change"]

          },

          {

           max:20, min:3,

            message: "字符长度3-20",

            trigger: ["blur", "change"]

          }

        ],

        password: [

          {

            required: true,

            message: "请输入密码",

            trigger: ["blur", "change"]

          },

          {

            max:20,min:3,

            message: "字符长度3-20",

            trigger: ["blur", "change"]

          }

        ]

      }

    };

  },

  methods: {
    login(form){
        this.$refs[form].validate(async data=>{
          if(data){
            let{data:dd}=await this.$http.post('user/login',this.LoginForm)
            if(dd.status==200){
              this.$message({
                message:"登录成功",type:'success'
              })
              window.sessionStorage.setItem("status",dd.data)
              this.$router.push('/Home')
            }
            else{
              this.$message.error("登录失败")
            }
          }
        })
    },

   reset(form){
     this.$refs[form].resetFields();
   }

  }

};

</script>

<style lang="less" scoped>

.el-form {

  width: 500px;

  border: px solid #000;

  padding: 40px;

  margin: 0 auto;

  margin-top: 200px;

  padding-left: 0px;

  padding-bottom: 20px;

  border-radius: 10px;

}
.avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #EEEEEE;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #DDDDDD; /* 添加阴影*/
    position: absolute;           /* 绝对定位*/
    left: 50%;                    /* 距离左侧50%*/
    transform: translate(-50%,-100%);   /*回调50%*/
    background-color: #FFFFFF;
    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background-color: #EEEEEE;
    }
  }

</style>
