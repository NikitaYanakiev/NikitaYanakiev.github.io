document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('active');
});

document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('lock');
});


$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});
