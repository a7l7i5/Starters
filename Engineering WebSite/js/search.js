let searchMore = document.querySelector('.header_search_button');
let searchCont = document.querySelector('.header_search');
let searchField = document.querySelector('.header_search_input');
let searchClose = document.querySelector('.header_search_closebtn');

searchMore.addEventListener('click',function() {
    searchCont.classList.toggle('header_search--active');
    searchField.classList.toggle('header_search_input--active');
    searchClose.classList.toggle('header_search_closebtn--active');
})

searchClose.addEventListener('click', function() {
    searchCont.classList.remove('header_search--active');
    searchField.classList.remove('header_search_input--active');
    searchClose.classList.remove('header_search_closebtn--active');
})
