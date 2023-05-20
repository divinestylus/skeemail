// Getting page items
let menu = document.querySelector('.menu');
let navBar = document.querySelector(".hero-section nav div");

// Mobile menu display toggle
// Hamburger to cancel toggle
menu.addEventListener('click', function(){
    navBar.classList.toggle('showMenu');
    menu.classList.toggle('fa-times');
})


