<template lang="pug">
  #app
    .pages-index
      .bg-image
      navbar
      <router-view/>
      about(:viewprotH="viewprotH"
            :navLinksH="navLinksH")
</template>

<script>
import Navbar from './components/navbar'
import About from './components/about'
export default {
  name: 'app',
  components: {
    Navbar,
    About
  },

  data() {
    return {
      viewprotH: 0,
      navLinksH: {}
    }
  },

  mounted() {
    const about = document.querySelector('#about')
    this.navLinksH.about = about.offsetTop

    //紀錄視窗跟元件滾動位置
    window.addEventListener('scroll', ()=> {
      this.viewprotH = window.pageYOffset
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
