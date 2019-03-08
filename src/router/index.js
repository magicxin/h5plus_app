import Vue from 'vue'
import Router from 'vue-router'
import main from '../pages/main'
import news from '../pages/news/news'
import propertyCenter from '../pages/propertyCenter/property-center'
import userCenter from '../pages/userCenter/user-center'
import accelerometer from '../pages/examples/accelerometer'
import launch from '../pages/launch'
import newsDetail from '../pages/news/news-detail'
import houseInfo from '../pages/propertyCenter/house-info'
import signin from '../pages/userCenter/signin'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      meta: {
        exit: true,
        keepAlive: true
      },
      children: [{
        path: 'news',
        name: 'news',
        component: news,
        meta: {
          exit: true,
          keepAlive: false
        }
      }, {
        path: 'property_center',
        name: 'property_center',
        component: propertyCenter,
        meta: {
          exit: true,
          keepAlive: false
        }
      }, {
        path: 'user_center',
        name: 'user_center',
        component: userCenter,
        meta: {
          exit: true,
          keepAlive: false
        }
      }]
    },
    {
        path: '/house_info',
        name: 'house_info',
        component: houseInfo,
        meta: {
          exit: true,
          keepAlive: false
        }
    },
    {
        path: '/news_detail/:_id',
        name: 'news_detail',
        component: newsDetail,
        meta: {
          exit: true,
          keepAlive: false
        }
    },
    {
        path: '/signin',
        name: 'signin',
        component: signin,
        meta: {
          exit: true,
          keepAlive: false
        }
    }
  ]
})