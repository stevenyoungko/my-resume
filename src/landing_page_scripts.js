const addMobileNavMenuTrigger = () => {
  document.querySelector('[data-behavior="nav-menu-trigger"]').addEventListener('click', openMobileNavMenu)
  document.querySelector('[data-behavior="nav-menu-close-button"]').addEventListener('click', closeMobileNavMenu)
}

const openMobileNavMenu = () => {
  document.querySelector('.popup-menu').classList.toggle('site-nav-active')
}

const closeMobileNavMenu = () => {
  document.querySelector('.popup-menu').classList.remove('site-nav-active')
}

const homeImageAddFadeIn = () => {
  setTimeout(() => {
    document.querySelector('.image-hide').classList.add('active')
  }, 2500)  
}

const homeTitleAddFadeIn = () => {
  setTimeout(() => {
    document.querySelector('.title-hide').classList.add('active')
  }, 2000)
}

const SmoothScrollTo =() => {
  const buttons = document.querySelectorAll('[data-scroll-to]')

  buttons.forEach(function(element) {

    element.addEventListener('click', event => {
      let target = event.currentTarget.dataset.scrollTo
      let offset = document.querySelector(target).offsetTop

      window.scroll({
        top: offset,
        behavior: "smooth"
      })
    })
  })
}

document.addEventListener("DOMContentLoaded", () => {
  addMobileNavMenuTrigger()
  homeImageAddFadeIn()
  homeTitleAddFadeIn()
  SmoothScrollTo()
})