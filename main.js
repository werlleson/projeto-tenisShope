const hamburguer = document.querySelector('.hamburguer')

const menuBar = document.querySelector('.menu-bar') 
   hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active')

    menuBar.classList.toggle('show')
})