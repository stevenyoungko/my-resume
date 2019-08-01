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
        li.popup-menu-item(href="#about" data-scroll-to="#about") About
        li.popup-menu-item(href="#skill" data-scroll-to="#skill") Skills
        li.popup-menu-item(href="#works" data-scroll-to="#works") Projects
        li.popup-menu-item(href="#experience" data-scroll-to="#experience") Experience
        li.popup-menu-item(href="#contact" data-scroll-to="#experience") Contact
  ul.navbar-menu
    li.navbar-item(href="#about" data-scroll-to="#about") About
      .line
    li.navbar-item(href="#skill" data-scroll-to="#skill") Skills
      .line
    li.navbar-item(href="#works" data-scroll-to="#works") Projects
      .line
    li.navbar-item(href="#experience" data-scroll-to="#experience") Experience
      .line
    li.navbar-item(href="#contact" data-scroll-to="#contact") Contact
      .line
</template>

<script>
export default {
  
}
</script>