import Vue from 'vue'
import launch from './utils/launch'
import App from './App'
import router from './router'
import Vant from 'vant'
import FastClick from 'fastclick';
import store from 'store'
//import '@/css/common.scss'
import 'vant/lib/index.css'
import '@/css/_reset.scss'

import utils from 'utils/rest'
import filters from 'utils/filters'

Vue.config.productionTip = false
Vue.use(Vant)
FastClick.attach(document.body);

import init from './utils/init'

router.beforeEach((to,from,next)=>{
  let user = store.state.admin.user
  if(user) {
    next()
  }else {
    if(to.name === 'signin' || to.name === 'signup') {
      next()
    }else {
      router.push('signin')
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store: store,
  template: '<App/>',
  data() {
    return{
      theme:'theme',
      isLogin: false,
      showLoginBox:false,
      user:''
    }
  }
})
