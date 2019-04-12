<template>
    <div>
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入内容" v-model="cmtBody"></textarea>

        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

        <div class="cmt">
            <div class="cmt-item">
                <div class="cmt-title">第一楼， 用户：abc ， 发表时间：2012-12-12</div>
                <div class="cmt-body">
                    阿里斯顿看见了考六级
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
    data () {
        return {
            'cmtBody' : '',
        }
    },
    methods : {
        postComment () {
            //取到文字做一下判断
            if (this.cmtBody != '') {
                console.log(this.cmtBody);
            }else{
                Toast('不能为空');
            }
        }
    }
}
</script>

<style>

</style>
