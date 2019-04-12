import Vue from 'vue'
import Router from 'vue-router'


//设置4个大页面的路由
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'


Vue.use(Router)

export default new Router({
  linkActiveClass: 'cur',
  routes: [
    {
      path: '/',
      redirect: '/home' //域名重定向，如果是跟路径就跳到home页
    },  
    {
      path: '/home',
      component: HomeContainer
    },
    {
      path: '/member',
      component: MemberContainer
    },
    {
      path: '/shopcar',
      component: ShopcarContainer
    },
    {
      path: '/search',
      component: SearchContainer
    },
    {
      path: '/home/newslist',
      component: NewsList
    },
    {
      path: '/home/newsInfo/:bizId',
      component: NewsInfo
    },
    {
      path: '/home/photolist/',
      component: PhotoList
    }
  ]
})
