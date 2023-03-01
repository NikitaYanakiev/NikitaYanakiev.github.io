document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('active');
});

document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('lock');
});


$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 2
            },

            576: {
                items: 3
            },

            1000: {
                items: 5
            }
        }
    });
});
