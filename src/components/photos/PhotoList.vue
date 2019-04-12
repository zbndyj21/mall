<template>
  <div>
    <div class="photoTitle">
      <ul>
        <li>车子</li>
        <li>卡通</li>
        <li>美女</li>
        <li>动漫</li>
        <li>宠物</li>
        <li>星空</li>
      </ul>
    </div>

    <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide1: [
        {
          src:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg",
          msrc:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          alt: "picture1",
          title: "图片标题1",
          w: 600,
          h: 400
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "",    //可以不填
          w: 1200,
          h: 900
        }
      ]
    };
  },
  methods: {
      handleClose () {
        console.log('close event')
      }
  }
};
</script>

<style lang="css">
.photoTitle {
  width: 100%;
  height: 40px;
  overflow-x: auto;
}
.photoTitle ul {
  min-width: 500px;
}
.photoTitle li {
  float: left;
  width: 80px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}

/* 隐藏滚动条，但可以滚动 */
.photoTitle::-webkit-scrollbar {
  display: none;
}
</style>