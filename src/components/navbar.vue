<template lang="pug">
<!-- 這裡是 navbar  -->
nav.navbar(role='navigation', aria-label='main navigation')
  .navbar-brand
    a(role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-behavior="nav-menu-trigger")
      span(aria-hidden="true" class="first")
      span(aria-hidden="true" class="second")
      span(aria-hidden="true" class="third")
    a(class="navbar-item" href="#")
      h1.title Steven Resume
    .popup-menu
      .popup-menu-close(data-behavior="nav-menu-close-button")
        span
        span
      ul.popup-menu-list
        li.popup-menu-item(href="#home" v-scroll-to="'#home'" :class="{'active':navActive == 'home'}") Home
        li.popup-menu-item(href="#about" v-scroll-to="'#about'" :class="{'active':navActive == 'about'}") About
        li.popup-menu-item(href="#skill" v-scroll-to="'#skill'" :class="{'active':navActive == 'skill'}") Skills
        li.popup-menu-item(href="#works" v-scroll-to="'#works'" :class="{'active':navActive == 'works'}") Projects
        li.popup-menu-item(href="#contact" v-scroll-to="'#contact'" :class="{'active':navActive == 'contact'}") Contact
  ul.navbar-menu
    li.navbar-item(href="#home" v-scroll-to="'#home'" :class="{'active':navActive == 'home'}") Home
      .line
    li.navbar-item(href="#about" v-scroll-to="'#about'" :class="{'active':navActive == 'about'}") About
      .line
    li.navbar-item(href="#skill" v-scroll-to="'#skill'" :class="{'active':navActive == 'skill'}") Skills
      .line
    li.navbar-item(href="#works" v-scroll-to="'#works'" :class="{'active':navActive == 'works'}") Projects
      .line
    li.navbar-item(href="#contact" v-scroll-to="'#contact'" :class="{'active':navActive == 'contact'}") Contact
      .line
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
    navActive() {
      let active = 'home'
      if (this.viewprotH + 5 > this.navLinksH.contact) {
        active = 'contact'
      } else if (this.viewprotH + 5 > this.navLinksH.works) {
        active = 'works'
      } else if (this.viewprotH + 5 > this.navLinksH.skill) {
        active = 'skill'
      } else if (this.viewprotH + 5 > this.navLinksH.about) {
        active = 'about'
      } else {
        active = 'home'
      }
      return active
    }
  }
}
</script>