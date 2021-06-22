<template >
<body style="background-color: #222222;">
  <div style="height: 30px; background-color: #222222; padding: 20px;">

<el-container style="background-color: #222222;">
    <el-header>

         <el-row :gutter="20" style="margin-left: auto; margin-right: auto; background-color: #222222;">
           <el-col :span="4"  style="height: 30px;"><div class="grid-content bg-purple" style="text-align: center;color: #EEEEEE ">
           <img src="../assets/logo.png" style="width: 30px;" />
           </div></el-col>
          <el-col :span="4" style="height: 30px;"><div class="grid-content bg-purple" style="text-align: center;color: #EEEEEE ">
            <a href="#" style="color: #EEEEEE; text-decoration: none;">新闻咨询</a>
          </div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"  style="text-align: center; color: #EEEEEE;">
           <a href="#" style="color: #EEEEEE; text-decoration: none;">新闻咨询</a>
          </div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple" style="text-align: center;color: #EEEEEE ">
           <a href="#" style="color: #EEEEEE; text-decoration: none;">新闻咨询</a>
          </div></el-col>
          <el-col  :span="4"><div class="grid-content bg-purple" style="text-align: center;color: #EEEEEE ">
           <a href="#" style="color: #EEEEEE; text-decoration: none;">新闻咨询</a>
          </div></el-col>
          <el-col  :span="4"><div v-if="status" @click="updateUser()" class="grid-content bg-purple" style="text-align: center;color: #EEEEEE ">
          <el-avatar  src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"  ></el-avatar>
          </div>
          <div v-else>
              <el-button type="primary" @click="dialogVisible = true">登录</el-button>
             <el-dialog title="登录"   :visible.sync="dialogVisible"   width="30%">
               <el-form>
                   <el-form-item label="用户名" >
                    <el-input type="text" v-model="user.username" style="width: 80%;"></el-input>
                   </el-form-item>
                   <el-form-item label="密码" >
                    <el-input type="password" v-model="user.password" style="width: 80%;"></el-input>
                   </el-form-item>
               </el-form>
               <span slot="footer" >
                 <el-button @click="Close()" >取 消</el-button>
                 <el-button type="primary" @click="login()">登录</el-button>
               </span>
             </el-dialog>
          </div>
          </el-col>
        </el-row>

        </el-header>


    <router-view></router-view>


    </el-container>
    </div>
    </body>
</template>

<script>
  export default{
    data(){
      return{
        status:'',
        dialogVisible: false,
        user:{
          username:'',
          password:''
        }
      }
    },
    methods:{
      async login(){
          let{data:dd}=await this.$http.post('user/login',{username:this.user.username,password:this.user.password})
            if(dd.status==200){
              this.$message({
                message:"登录成功",type:'success'
              })
              window.sessionStorage.setItem("status",dd.data.status)
              window.sessionStorage.setItem("user_id",dd.data.id)
               this.dialogVisible=false
              this.$router.go('/home')

            }
            else{
              this.$message.error("登录失败")
            }

        },
        Close(){
          this.user={}
          this.dialogVisible=false
        },

      updateUser(){
      this.$router.push('/user')
      }
    },
    mounted() {
    this.status=window.sessionStorage.getItem('status')
    }
  }
</script>

<style>

</style>
