<template lang="pug">
.skill-container#skill
  .container
    h1.my-title Skills
    .btn-groups
      .btn-groups-inner(aria-label="Basic example" role="group")
        button.button.is-info.is-large
          span.icon.is-large
            i.fa.fa-check-square
        button.button.is-primary.is-large
          span.icon.is-large
            i.fa.fa-list
    .row
      .col
        .flip-card
          .flip-card-inner
            .flip-card-front
              img(src="../assets/skill/html.png" alt="Avatar" class="flip-card-image")
            .flip-card-back
              h2.flip-card-title HTML
              p.flip-card-subtitle 善用語意化標籤命名結構
              p.flip-card-subtitle SEO搜尋優化
      .col
        .flip-card
          .flip-card-inner
            .flip-card-front
              img(src="../assets/skill/css.png" alt="Avatar" class="flip-card-image")
            .flip-card-back
              h2.flip-card-title CSS
              p.flip-card-subtitle SASS 預處理器
              p.flip-card-subtitle  RWD 設計
              p.flip-card-subtitle  Flex 排版
      .col
        .flip-card
          .flip-card-inner
            .flip-card-front
              img(src="../assets/skill/js.png" alt="Avatar" class="flip-card-image")
            .flip-card-back
              h2.flip-card-title Javascript
              p.flip-card-subtitle 熟悉DOM模型
      .col
        .flip-card
          .flip-card-inner
            .flip-card-front
              img(src="../assets/skill/jquery.png" alt="Avatar" class="flip-card-image")
            .flip-card-back
              h2.flip-card-title jQuery
              p.flip-card-subtitle 靈活DOM元素操作
      .col
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
      .col
        .flip-card
          .flip-card-inner
            .flip-card-front
              img(src="../assets/skill/webpack.png" alt="Avatar" class="flip-card-image")
            .flip-card-back
              h2.flip-card-title Webpack
              p.flip-card-subtitle webpack 基本概念、配置
      .col
        .flip-card
          .flip-card-inner
            .flip-card-front
              img(src="../assets/skill/git.png" alt="Avatar" class="flip-card-image")
            .flip-card-back
              h2.flip-card-title Github
              p.flip-card-subtitle Github-Pages 前端部署
              p.flip-card-subtitle git 相關指令
      .col
        .flip-card
          .flip-card-inner
            .flip-card-front
              img(src="../assets/skill/es6.png" alt="Avatar" class="flip-card-image")
            .flip-card-back
              h2.flip-card-title ES6
              p.flip-card-subtitle 了解 Promise 非同步處理

</template>