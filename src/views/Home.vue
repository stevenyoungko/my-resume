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
              h4.subtitle 這世上沒有困難的事情
              h4.subtitle 只要有熱誠跟興趣
              h4.subtitle 就能維持自己向前的動力
</template>

<script>
import Navbar from '../components/navbar'
export default {
  components: {
    Navbar
  }
  
}
</script>