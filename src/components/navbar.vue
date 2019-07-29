<template lang="pug">
  nav.navbar(role='navigation', aria-label='main navigation')
    .navbar-brand
      a(role="button" class="navbar-burger" aria-label="menu" aria-expanded="false")
        span(aria-hidden="true" class="first")
        span(aria-hidden="true" class="second")
        span(aria-hidden="true" class="third")
      a(class="navbar-item" href="#")
        h1.title Steven Resume
      .popup-menu
        .popup-menu-close
          span
          span
        .popup-menu-list
          .popup-menu-item(href="#about") About
          .popup-menu-item(href="#skill") Skills
          .popup-menu-item(href="#works") Projects
          .popup-menu-item(href="#experience") Experience
          .popup-menu-item(href="#contact") Contact
    ul.navbar-menu
      li.navbar-item(href="#about") About
        .line
      li.navbar-item(href="#skill") Skills
        .line
      li.navbar-item(href="#works") Projects
        .line
      li.navbar-item(href="#experience") Experience
        .line
      li.navbar-item(href="#contact") Contact
        .line
</template>

<script>
export default {
  
}
</script>