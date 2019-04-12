import Vue from 'vue'

// 导入自己的路由模块router.js
import router from './router.js'

// 导入 app 跟组件
import app from './App.vue'

// 按需倒入 mint-Ui 的组件  
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import 'mint-ui/lib/style.css'

import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import { Button } from 'mint-ui';
Vue.component(Button.name, Button);

// 导入vue-resource 
import VueResource from 'vue-resource'
// 安装vue-resource
Vue.use(VueResource);

//全局引入 MintUi
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI);

//预览大图
import VuePreview from 'vue-preview'
Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: true,      // 图片标题是否显示
  fullscreenEl: true,   // 全屏按钮是否现实
  shareEl: false,        //  分享按钮
  bgOpacity: 0.85,      //  底色透明度
  tapToClose: false,    // 现实所有工具栏
  tapToToggleControls: false  
});


var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})