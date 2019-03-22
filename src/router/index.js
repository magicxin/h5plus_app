import Vue from 'vue'
import Router from 'vue-router'
import main from '../pages/main'
import news from '../pages/news/news'
import propertyCenter from '../pages/propertyCenter/property-center'
import fixPost from '../pages/propertyCenter/fix-post'
import fixList from '../pages/propertyCenter/fix-list'
import userCenter from '../pages/userCenter/user-center'
import accelerometer from '../pages/examples/accelerometer'
import launch from '../pages/launch'
import newsDetail from '../pages/news/news-detail'
import newsCreate from '../pages/news/news-create'
import houseInfo from '../pages/propertyCenter/house-info'
import signin from '../pages/userCenter/signin'
import signup from '../pages/userCenter/signup'
import userInfo from '../pages/userCenter/user-info'
import resetPassword from '../pages/userCenter/reset-password'
import dynamic from '../pages/news/dynamic'
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
      },{
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
        path: '/news_create',
        name: 'news_create',
        component: newsCreate,
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
    },{
        path: '/signup',
        name: 'signup',
        component: signup,
        meta: {
          exit: true,
          keepAlive: false
        }
    },
    {
        path: '/user-info',
        name: 'user-info',
        component: userInfo,
        meta: {
          exit: true,
          keepAlive: false
        }
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: resetPassword,
        meta: {
          exit: true,
          keepAlive: false
        }
    },
    {
        path: '/dynamic',
        name: 'dynamic',
        component: dynamic,
        meta: {
          exit: true,
          keepAlive: false
        }
    },{
        path: '/fix_post',
        name: 'fix_post',
        component: fixPost,
        meta: {
          exit: true,
          keepAlive: false
        }
      },{
        path: '/fix_list',
        name: 'fix_list',
        component: fixList,
        meta: {
          exit: true,
          keepAlive: false
        }
      }, 
  ]
})