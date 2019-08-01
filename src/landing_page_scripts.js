const addMobileNavMenuTrigger = () => {
  document.querySelector('[data-behavior="nav-menu-trigger"]').addEventListener('click', openMobileNavMenu)
  document.querySelector('[data-behavior="nav-menu-close-button"]').addEventListener('click', closeMobileNavMenu)
}

const popupMenuTrigger = () => {
  let buttons = document.querySelectorAll('.popup-menu-item')
  buttons.forEach(function (button) {
    button.addEventListener('click', closeMobileNavMenu)
  })
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

document.addEventListener("DOMContentLoaded", () => {
  addMobileNavMenuTrigger()
  popupMenuTrigger()
  homeImageAddFadeIn()
  homeTitleAddFadeIn()
})