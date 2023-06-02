
const toggleLogo = document.getElementById('openMenu');
const closeToggle= document.getElementById('closeMenu')
const menu = document.querySelector('.navbar');
const body = document.querySelector('body');


toggleLogo.addEventListener('click',function(){
    menu.classList.add ('active')
    body.style.overflow='hidden';

})

closeToggle.addEventListener('click',function(){
    menu.classList.remove('active')
    body.style.overflow='overlay';

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

 $(document).ready(function(){
    $('.menu-btn.search-bar').click(function(e){
        e.preventDefault();
        $('#search-input').focus();
    })
 })


