
const toggleLogo = document.getElementById('openMenu');
const closeToggle= document.getElementById('closeMenu')
const menu = document.querySelector('.navbar');

toggleLogo.addEventListener('click',function(){
    menu.classList.add ('active')
})

closeToggle.addEventListener('click',function(){
    menu.classList.remove('active')
})
$('.main-carousel').flickity({
    // options
    cellAlign: 'center',
    freeScroll: true,
    wrapAround: true,
    autoPlay: true,
    prevNextButtons: false,
    draggable: false,
    lazyLoad:true,
    pauseAutoPlayOnHover: false
  });


