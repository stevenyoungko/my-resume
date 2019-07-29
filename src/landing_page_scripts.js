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

document.addEventListener("DOMContentLoaded", () => {
  addMobileNavMenuTrigger()
})