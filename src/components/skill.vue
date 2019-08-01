<template lang="pug">
.skill-container#skill
  .container
    h1.my-title Skills
    .btn-groups
      .btn-groups-inner(aria-label="Basic example" role="group")
        button.button.is-info.is-large(@click="skillDispaly='gallery'")
          span.icon.is-large
            i.fa.fa-check-square
        button.button.is-primary.is-large(@click="skillDispaly = 'list'")
          span.icon.is-large
            i.fa.fa-list
    .row(v-if="skillDispaly == 'list'" style="justify-content:center")
      .col.col-list
        h3.title.has-text-white 前端(Front-end)
        ul.skill-list
          li.skill-item
            b HTML/CSS
            |  - 能撰寫語意化標籤、flex排版,SASS 預處理器使用
          li.skill-item
            b Javascript
            |  - 熟悉DOM模型
          li.skill-item
            b jQuery
            |  - 為網頁添加具互動性的效果
          li.skill-item
            b Bulma
            |  - css 框架
          li.skill-item
            b VueJs
            |  - data 雙向綁定、模板元件化、 SPA 單頁式應用、Router、Vuex
        h3.title.has-text-white 後端(Back-end)
        ul.skill-list
          li.skill-item
            b Ruby on rails
            |  - 懂MVC框架
        h3.title.has-text-white 其它(Other)
        ul.skill-list
          li.skill-item
            b Webpack
            |  - 轉換 ES6、SASS、BABEL 檔案，打包網站
          li.skill-item
            b Git
            |  - Github-Pages 前端部署、熟悉git相關指令
          li.skill-item
            b ES6
            |  - 了解 Promise 非同步處理、const、let、arrow function
          li.skill-item
            b Python
            |  - 網路爬蟲、爬取網路資料

    .row(v-if="skillDispaly == 'gallery'")
      .col.col-gallery
        .flip-card
          .flip-card-inner
            .flip-card-front
              img(src="../assets/skill/html.png" alt="Avatar" class="flip-card-image")
            .flip-card-back
              h2.flip-card-title HTML
              p.flip-card-subtitle 善用語意化標籤命名結構
              p.flip-card-subtitle SEO搜尋優化
      .col.col-gallery
        .flip-card
          .flip-card-inner
            .flip-card-front
              img(src="../assets/skill/css.png" alt="Avatar" class="flip-card-image")
            .flip-card-back
              h2.flip-card-title CSS
              p.flip-card-subtitle SASS 預處理器
              p.flip-card-subtitle  RWD 設計
              p.flip-card-subtitle  Flex 排版
      .col.col-gallery
        .flip-card
          .flip-card-inner
            .flip-card-front
              img(src="../assets/skill/js.png" alt="Avatar" class="flip-card-image")
            .flip-card-back
              h2.flip-card-title Javascript
              p.flip-card-subtitle 熟悉DOM模型
      .col.col-gallery
        .flip-card
          .flip-card-inner
            .flip-card-front
              img(src="../assets/skill/jquery.png" alt="Avatar" class="flip-card-image")
            .flip-card-back
              h2.flip-card-title jQuery
              p.flip-card-subtitle 靈活DOM元素操作
      .col.col-gallery
        .flip-card
          .flip-card-inner
            .flip-card-front
              img(src="../assets/skill/vue.png" alt="Avatar" class="flip-card-image")
            .flip-card-back
              h2.flip-card-title Vue
              p.flip-card-subtitle data 雙向綁定
              p.flip-card-subtitle 模板元件化
              p.flip-card-subtitle Vue CLI
              p.flip-card-subtitle Router、 Vuex
      .col.col-gallery
        .flip-card
          .flip-card-inner
            .flip-card-front
              img(src="../assets/skill/webpack.png" alt="Avatar" class="flip-card-image")
            .flip-card-back
              h2.flip-card-title Webpack
              p.flip-card-subtitle webpack 基本概念、配置
      .col.col-gallery
        .flip-card
          .flip-card-inner
            .flip-card-front
              img(src="../assets/skill/git.png" alt="Avatar" class="flip-card-image")
            .flip-card-back
              h2.flip-card-title Github
              p.flip-card-subtitle Github-Pages 前端部署
              p.flip-card-subtitle git 相關指令
      .col.col-gallery
        .flip-card
          .flip-card-inner
            .flip-card-front
              img(src="../assets/skill/es6.png" alt="Avatar" class="flip-card-image")
            .flip-card-back
              h2.flip-card-title ES6
              p.flip-card-subtitle 了解 Promise 非同步處理
      .col.col-gallery
        .flip-card
          .flip-card-inner
            .flip-card-front
              img(src="../assets/skill/python.png" alt="Avatar" class="flip-card-image")
            .flip-card-back
              h2.flip-card-title Python
              p.flip-card-subtitle python 爬蟲、爬取網路資料
      .col.col-gallery
        .flip-card
          .flip-card-inner
            .flip-card-front
              img(src="../assets/skill/ruby.png" alt="Avatar" class="flip-card-image")
            .flip-card-back
              h2.flip-card-title Ruby
              p.flip-card-subtitle 使用Ruby on rails框架
              p.flip-card-subtitle 了解MVC架構

</template>

<script>
export default {
  data() {
    return{
      skillDispaly: 'list'
    }
  }
}
</script>