import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import {Carousel,CarouselItem,Footer,Divider,Avatar,Dialog} from 'element-ui'

Vue.component(Carousel.name,Carousel)
Vue.component(CarouselItem.name,CarouselItem)
Vue.component(Footer.name,Footer)
Vue.component(Divider.name,Divider)
Vue.component(Avatar.name,Avatar)
Vue.component(Dialog.name,Dialog)
Vue.prototype.$http = axios
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:8081/'
import axios from 'axios'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
