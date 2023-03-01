$(document).ready(function(){
    $(".owl-one").owlCarousel({
        loop: false,
        rewind: true,
        items: 4,
        startPosition: 0,
        nav:true,
        margin:32,
        responsive : {
            0 : {
                items: 2,
                autoWidth: true,
            },
            480 : {
                items: 3,
                autoWidth: true,
            },
            768 : {
                items: 4,
            },
            992: {
                startPosition: 1,
            }
        }
    });
    $(".owl-two").owlCarousel({
        items: 2,
        margin:32,
        nav:true,
        rewind: true,
        responsive : {
            0 : {
                items: 1,
                autoWidth: true,
            },
            480 : {
                items: 1.5,
                margin: 8,
                autoWidth: true,
            },
            769 : {
                items: 2,
                margin:32,
            }
        }
    });
    $(".owl-three").owlCarousel({
        items: 2,
        margin:17,
        nav:true,
        rewind: true,
        responsive : {
            0 : {
                items: 1,
                autoWidth: true,
            },
            480 : {
                items: 1.5,
                margin: 8,
                autoWidth: true,
            },
            768 : {
                items: 2,
                margin:17,
            }
        }
    });
    $(".owl-four").owlCarousel({
        items: 5,
        margin:16,
        nav:true,
        rewind: true,
        responsive : {
            0 : {
                items: 2,
                autoWidth: true,
            },
            480 : {
                items: 3,
                autoWidth: true,
            },
            769 : {
                items: 4,
                margin: 8,
            },
            1201 : {
                items: 5,
                margin:16,
            }
        }
    });
});


document.querySelector('.search-form__icon').addEventListener('click', () => {
    document.querySelector('.search-form').classList.toggle('_active');
});

document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('active');
});

document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('lock');
});


$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    $('.header').toggleClass('active');
    return false;
});

