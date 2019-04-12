<template>
  <div class="wrap">
    <!-- 顶部 header 区域 -->
    <mt-header fixed title="黑马商城实战项目"></mt-header>

    <!-- 中间 router-view 区域 -->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部 tabbar 区域 -->
    <div class="navbox">
      <ul>
        <li><router-link class="nav1" to="/home">首页</router-link></li>
        <li><router-link class="nav2" to="/member">会员</router-link></li>
        <li><router-link class="nav3" to="/shopcar">购物车</router-link></li>
        <li><router-link class="nav4" to="/search">搜索</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style type="text/css">
* {
  padding: 0;
  margin: 0;
}
li{ list-style-type: none;}
.wrap {
  padding-top: 40px;
  overflow-x:hidden;
}
.v-enter{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity:0;
	transform: translateX(-100%);
	position:absolute;
}

.v-enter-active,
.v-leave-active {
	transition:all ease-in-out 0.3s;
}


.navbox{ position: fixed; bottom:0; left: 0; width: 100%; height: 60px; background: #f1f1f1;}
.navbox li{ float:left; list-style: none; width: 25%; text-align: center; height: 60px;  line-height: 60px;}
.navbox li a{ color: #000; text-decoration: none; }
.navbox li .cur{ background: darkgoldenrod; color: #fff; display: block}
</style>
