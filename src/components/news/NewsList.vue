<template>
    <div>
        <ul class="newsList">
            <li v-for="(item, index) in newsList" :key="item.articleId" >
                <router-link :to="'/home/newsInfo/' + item.articleId">
                    <img class="pic" :src="item.pic" >
                    <div class="rightbox">
                        <h2>{{ item.title }}</h2>
                        <div class="ps">
                            <span>{{ item.postTime }} {{ index }}</span>
                            <span>喜欢( {{item.articleId }} )</span>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newsList : []
        }
    },
    created() {
        this.getNewsList (); //this.别忘记
    },
    methods: {
        getNewsList () {
            let url = 'https://marry.daoxila.com/ChouBei-QiuHun?test=dxl'
            this.$http.jsonp(url).then(res => {
                console.log( res.body.articleList.entitles );
                this.newsList = res.body.articleList.entitles ;
            }).catch()
        }
    },
}
</script>

<style scoped>
.newsList { padding: 0 0 150px 0;}
.newsList li{ clear: both; padding: 20px 0;}
.newsList .pic{ width: 80px; height: 80px; float: left; margin-right: 10px;}
.newsList .rightbox{ float: left; width: 200px;font-size: 14px;}
.newsList .rightbox h2{ font-size: 14px;}
.newsList .rightbox .ps{ display: flex; justify-content: space-between }
</style>
