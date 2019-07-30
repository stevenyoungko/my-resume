<template lang="pug">
<!-- 這裡是 about  -->
.about-container#about
  .container
    h1.mt-title About Myself
    .row.about-hide(:class="{'active':aboutShow}")
      .col
        img(src="../assets/about.jpg" alt="" class="about-image")
      .col
        .my-introduce
          p Hello 您好，我叫做 柯炫仰 ( Steven )
          p 我在大二開始接觸前端並產生濃厚興趣
          p 平時會看一些線上教學和購買相關書籍去做學習
          p 有碰過後端（Ruby on rails）也有相關作品
          p 現在致力於研究各種技術並整合使用，
          p 在不斷的追求、不斷的學習、不斷的創作的過程中，
          p 看到一件一件作品產出，
          p 這成就感使我覺得人生無比富有。
</template>

<script>
export default {
  props: {
    navLinksH: {
      type: Object,
      required: true
    },

    viewprotH: {
      type: Number,
      required: true
    }
  },

  computed: {
    aboutShow() {
      if (this.viewprotH > (this.navLinksH.about / 2)) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>