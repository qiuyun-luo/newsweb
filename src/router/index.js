import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Home from '../components/Home.vue'
import Title from '../components/title.vue'
import User from '../components/user.vue'
import Manuscript from '../components/manuscript.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect:'home' },
  { path: '/login', component: Login },
  { path: '/home', component: Home, redirect:'/title', children:[
    {path: '/title', component: Title}
  ]},
  { path:'/user', component: User,children:[
    {path:'/manuscript', component: Manuscript}
  ]}

]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.path=='/login') return next()//访问login时直接放行
  if(to.path=='/title') return next()
  let username=window.sessionStorage.getItem('status')
  if(!username) return next('/login')//访问非login页面时检查session中的值，为空则跳转到login不为null则放行
  next()
})

export default router
