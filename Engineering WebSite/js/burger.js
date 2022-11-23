let burger = document.querySelector('.header_burger');
let menu = document.querySelector('.header_nav');
let menuLinks = menu.querySelectorAll('.header_navlist_item_link');

burger.addEventListener('click',
                       function(){

                           burger.classList.toggle('header_burger-active');

                           menu.classList.toggle('header_nav-active');

                           document.body.classList.toggle('stop-scroll');
                       })

menuLinks.forEach(function(el){
    el.addEventListener('click', function() {
        burger.classList.remove('header_burger-active');

        menu.classList.remove('header_nav-active');

        document.body.classList.remove('stop-scroll');
    })
})