<template>
    <div>
        <div class="banner">
            <mt-swipe :auto="4000" :defaultIndex="1">
                <mt-swipe-item v-for="(item, index) in bannerList" :key="index">
                    <img :src="item.imgsrc" />
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="navList">
            <ul>
                <li>
                    <router-link to="/home/newslist">新闻列表</router-link>
                </li>
                <li>
                    <router-link to="/home/photolist">图片分享</router-link>
                </li>
                <li>商品购买</li>
                <li>留言反馈</li>
                <li>视频专区</li>
                <li>联系我们</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            bannerList : []
        }
    },
    created() {
        this.getBanner ();  //这个this至关重要，别忘记
    },
    methods: {
        getBanner () {
            let url = 'http://mas.daoxila.com/Api/slot?city_id=7&slot_ids=163,1554345077906'
            this.$http.jsonp(url).then(res =>{
                console.log(res.body);
                let d = res.body;
                if (d.code == 1) {
                    console.log(d.admList[0].adContent);
                    this.bannerList = d.admList[0].adContent;
                }
            }).catch()
        }
    },
}
</script>

<style scoped>
    .banner{ height:200px;}
    .banner img{ width: 100%; height: 100%;}
    .navList li{ width: 80px; float: left; margin:10px;}
</style>