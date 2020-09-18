let menuIcon = document.getElementById('menuIcon')
let menu = document.querySelector('.header__nav')
let isClick = false

menuIcon.addEventListener('click', () => {
  if(isClick === true)
  {
    menuIcon.classList.remove('fa-times')
    menuIcon.classList.add('fa-bars')
    menu.style.height = "0"
    isClick = false
  }else
  {
    menuIcon.classList.remove('fa-bars')
    menuIcon.classList.add('fa-times')
    menu.style.height = "100vh"
    isClick = true
  }
  
})