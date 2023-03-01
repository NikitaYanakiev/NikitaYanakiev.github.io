const link = document.querySelectorAll('.header__link');


document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
});

link.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.header').classList.remove('active');
        document.querySelector('body').classList.remove('lock');
    });
  });



$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: false,
        navText: ['', ''],
        items: 1,
        nav: true,
    });
});

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });


const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const blockID = anchor.getAttribute('href').substr(1);
        
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }