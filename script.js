
const toggleLogo = document.getElementById('openMenu');
const menu = document.querySelector('.navbar');
 

toggleLogo.addEventListener('click',function(){
    menu.classList.toggle ('active')
})