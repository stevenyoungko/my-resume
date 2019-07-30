<template lang="pug">
.pages-index
  .bg-image
  navbar
  <!-- 這裡是 home  -->
  .home-container#home
    .container
      .row
        .col
          .image-hide
            .image-profile
        .col
          .title-hide
            h1.title Hello l'm Steven
            h4.subtitle 堅持就是
            h4.subtitle 在堅持不住的時候
            h4.subtitle 再堅持一下
  about
</template>

<script>
import Navbar from '../components/navbar'
import About from '../components/about'
export default {
  components: {
    Navbar,
    About
  }
  
}
</script>