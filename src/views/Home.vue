<template lang="pug">
  .pages-index
    .bg-image
    navbar
    .home-container
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
</template>

<script>
import Navbar from '../components/navbar'
export default {
  components: {
    Navbar
  }
  
}
</script>