<template lang="pug">
<!-- 這裡是 works  -->
.works-container#works
  vue-particles(color="#dedede"
                :particleOpacity="0.7"
                :particlesNumber="80"
                shapeType="circle"
                :particleSize="4"
                linesColor="#dedede"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push")
  .container
    h1.my-title Projects
    .row
      .col
        .transform_3d
          .my-card
            img(src="../assets/project/shinyue.png" class="my-card-image" alt="img" @click="openModal(works[0])")
          h3.title OA辦公家具
  b-modal(:active.sync="openModalisActive")
    .container
      h5.title {{ works_modal.title}}
      img(:src="works_modal.imgURL" alt="img" class="image")
      ul.works-list
        li.works-item(v-for="(content, index) in works_modal.content" :key="index") {{ content }}
      button.button.is-large.is-info.is-outlined
        a(:href="works_modal.href" target="_blank" class="link") 點擊前往作品網頁

</template>

<script>
export default {
  data() {
    return {
      works_modal: {},
      openModalisActive: false,
      works: [{
        title: '新悅辦公家具',
        imgURL: require('../assets/project/shinyue.png'),
        href: 'https://shinyue.odd.tw/',
        content: [
          '使用後端框架 Ruby on rails',
          '使用 Bulma SASS 製作 RWD 網頁',
          '擁有可編輯的後台 dashboard',
          '使用各式 gem 套件開發'
        ]
      }]
    }
  },

  methods: {
    openModal(item) {
      this.works_modal = item
      this.openModalisActive = true
    }
  }
}
</script>