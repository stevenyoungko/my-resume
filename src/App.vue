<template lang="pug">
  #app
    .pages-index
      .bg-image
      navbar
      <router-view/>
      about(:viewprotH="viewprotH"
            :navLinksH="navLinksH")
      skill
      project
      contact(:viewprotH="viewprotH"
              :navLinksH="navLinksH"
              :windowH="windowH")
</template>

<script>
import Navbar from './components/navbar'
import About from './components/about'
import Skill from './components/skill'
import Project from './components/project'
import Contact from './components/contact'
export default {
  name: 'app',
  components: {
    Navbar,
    About,
    Skill,
    Project,
    Contact
  },

  data() {
    return {
      viewprotH: 0,
      windowH: 0,
      navLinksH: {}
    }
  },

  mounted() {
    const about = document.querySelector('#about')
    const contact = document.querySelector('#contact')
    this.windowH = window.outerHeight

    //紀錄視窗跟元件滾動位置
    window.addEventListener('scroll', ()=> {
      this.viewprotH = window.pageYOffset
      this.navLinksH.about = about.offsetTop
      this.navLinksH.contact = contact.offsetTop
    })

    //紀錄視窗寬度
    window.addEventListener("resize",  ()=> {
      this.windowH = window.outerHeight;
    });
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
