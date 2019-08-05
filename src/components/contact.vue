<template lang="pug">
<!-- 這裡是 contact  -->
.contact-container#contact
  .container
    .row
      .col
        .contact-card(:class="{'active':contactShow}")
          h1.title Contact Me
          .row
            .col
              .image-box
                figure.image
                  img(src="../assets/contact.jpg")
          h3.title.name 炫仰（ Steven ）
          h5.title.email
            span.icon
              i.fa.fa-envelope
            a(href="mailto:stevenke60815@gmail.com") stevenke60815@gmail.com
          h5.title.phone 
            span.icon
              i.fa.fa-phone
            | 0908162589
          a(href="https://www.facebook.com/profile.php?id=100002424888068&ref=bookmarks" target="_blank")
            span.icon
              i.fab.fa-facebook
          a(href="https://github.com/stevenyoungko/my-resume" target="_blank")
            span.icon
              i.fab.fa-github

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
    },

    windowH: {
      type: Number,
      required: true
    }
  },

  computed: {
    contactShow() {
      if (this.viewprotH > (this.navLinksH.contact - this.windowH / 2)) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
