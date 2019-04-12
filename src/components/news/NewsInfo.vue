<template>
    <div>
        这里是newsInfo 详情页 --- {{ $route.params.bizId }}
         <!-- $route.params. bizId 取的是router.js 自定义的:bizId -->


        <hr>

        评论部分
        <comment-box></comment-box>

    </div>
</template>

<script>
import comment from "../zujian/comment.vue"

export default {
    data() {
        return {
            
        }
    },
    components : {
       'comment-box' : comment
    }
}
</script>

<style scoped>
</style>
