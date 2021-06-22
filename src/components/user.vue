<template>

    <el-container  class="home-container">
    <el-header>
      <div>
      <span>gamebox-news </span>
      </div>
      <el-button @click="goout()" style="float: right;" type="info">注销</el-button>
    </el-header>
  <!-- 定义中间区域-->
    <el-container>


        <!--
          background-color 定义背景色
          text-color="#fff"  定义文字颜色
          active-text-color="#4094ff" 选中元素的颜色
          unique-opened 是否只保持一个子菜单的展开
          collapse      是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）
          collapse-transition	是否开启折叠动画 默认不要展现
          router 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
        -->
<el-aside >
          <el-col background-color="#545c64" :span="5">

           <el-menu
                background-color="#2C3E50" text-color="#fff" active-text-color="#4094ff" router="">

              <el-menu-item :index="menu.path" v-for="menu in menulist" :key="menu.id">
                <i class="el-icon-menu"></i>
                <span slot="title" v-text="menu.name"></span>
              </el-menu-item>



            </el-menu>
          </el-col>
</el-aside>




      <!-- 定义主页面结构-->
      <el-main>
        <!-- 定义路由展现页面-->
        <router-view></router-view>
      </el-main>
    </el-container>
    </el-container>



</template>

<script>
  export default{
    data(){
      return{
        user_id:'',
        status:'',
        menulist:[],

      }
    },
    methods:{
        goout(){
        window.sessionStorage.clear();
        this.$router.push('/home')
      },
      async getMuenList(){
          const {data:data}=await this.$http.get("menu/"+this.status)
          this.menulist=data.data;
      }
    },
    created() {
       this.status=window.sessionStorage.getItem('status')
        this.user_id=window.sessionStorage.getItem('user_id');
      this.getMuenList()
    },
    mounted(){

    }
  }
</script>

<style lang="less" scoped>
  .el-header {
    background-color: #2B4B6B;
    display: flex; //灵活的盒子容器
    justify-content: space-between; //左右对齐
    align-items: center; //文本元素居中对齐
    color: #FFFFFF; //设定字体颜色
    padding-left: 1px;

    >div {
      display: flex;
      align-items: center;

      span {
        margin-left: 15px;
        font-size: 25px; //设定字体高度
      }
    }
  }
  .el-aside {
    background-color: #2C3E50;
    height: 700px;

    .el-menu {
      border-right: none;
    }
  }
</style>
