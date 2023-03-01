"use strict";

const burger = document.querySelector('.burger'),
        menu = document.querySelector('.menu'),
        overlay = document.querySelector('.menu__overlay'),
        closeElem = document.querySelector('.menu__close'),
        body = document.querySelector('body');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('lock');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    burger.classList.remove('active');
    body.classList.remove('lock');
});


overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    burger.classList.remove('active');
    body.classList.remove('lock');
});


const menuLinks = document.querySelectorAll('.menu__link-item');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    menu.classList.remove('active');
    burger.classList.remove('active');
    body.classList.remove('lock');
  });
});



    function digitsCountersInit(digitsCountersItems) {
        let digitsCounters = 
        digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
        if (digitsCounters) {
            digitsCounters.forEach(digitsCounter => {
                digitsCountersAnimate(digitsCounter);
            });
        }
    }

    function digitsCountersAnimate(digitsCounter) {
        let startTimestamp = null;
        const duration = 
        parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounter) : 2000;
        const startValue = parseInt(digitsCounter.innerHTML);
        let startPosition = 0;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            digitsCounter.innerHTML = (Math.floor(progress * (startPosition + startValue))) + '%';
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);

        const counters = document.querySelectorAll('.skills__ratings-counter'),
            lines = document.querySelectorAll('.skills__ratings-line span');

        counters.forEach( (item, i) => {
            lines [i].style.width = item.innerHTML;
            lines [i].style.left = 0;
        });
    }
    

    let options = {
        threshold: 0.8
    };
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetElement = entry.target;
                const digitsCountersItems = targetElement.querySelectorAll ("[data-digits-counter]");
                if (digitsCountersItems.length) {
                    digitsCountersInit(digitsCountersItems);
                }
                observer.unobserve(targetElement);
            }
        });
    }, options);

    let section = document.querySelectorAll('.skills__ratings');
    if (section.length) {
        section.forEach(section => {
            observer.observe(section);
        });
    }

    
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

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let formData = new FormData(form);

        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        });
        if (response.ok){
            let result = await response.json();
            alert(result.message);
            form.reset();
            
        } else {
            alert ("Ошибкa");
        }
    }
});

window.addEventListener('scroll', function() {
    const pageup = document.querySelector('.pageup');
    if (window.pageYOffset > 1600) {
        pageup.style.opacity = '1';
        pageup.style.visibility = 'visible';
    } else {
        pageup.style.opacity = '0';
        pageup.style.visibility = 'hidden';
    }
});
