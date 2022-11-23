document.addEventListener("DOMContentLoaded", function (){
    const container = document.querySelector(".main_requestcalc_container")
    const swiper = new Swiper('.main_requestcalc_swiper', {
  // Default parameters
    loop: true,
    speed: 300,
    pagination: {
        el: '.main_requestcalc_pagination',
        type: 'bullets',
        clickable: true
  }

})
})