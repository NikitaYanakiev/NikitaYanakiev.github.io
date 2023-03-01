const bannerTitle = document.querySelector('.banner__title');
bannerTitle.classList.add('show');

const aboutContent = document.querySelector('.about__title');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  if (isElementInViewport(aboutContent)) {
    aboutContent.classList.add('show');
    window.removeEventListener('scroll', handleScroll);
  }
}

window.addEventListener('scroll', handleScroll);


// получаем элемент, который нужно анимировать
const element = document.querySelector('.invest__img');

// функция, которая будет вызвана при прокрутке страницы
function animateOnScroll() {
  // получаем координаты верхней и нижней границы элемента
  const elementTop = element.getBoundingClientRect().top;
  const elementBottom = element.getBoundingClientRect().bottom;

  // если верхняя граница элемента находится внутри видимой области окна
  if (elementBottom < window.innerHeight) {
    // добавляем элементу класс с нужной анимацией
    element.classList.add('animate');
  }
}

// вызываем функцию при загрузке страницы и при скроллинге
document.addEventListener('DOMContentLoaded', animateOnScroll);
document.addEventListener('scroll', animateOnScroll);



const elementTwo = document.querySelector('.statistic__img');

// функция, которая будет вызвана при прокрутке страницы
function animateOnScrollTwo() {
  // получаем координаты верхней и нижней границы элемента
  const elementTopTwo = elementTwo.getBoundingClientRect().top;
  const elementBottomTwo = elementTwo.getBoundingClientRect().bottom;

  // если верхняя граница элемента находится внутри видимой области окна
  if (elementBottomTwo < window.innerHeight) {
    // добавляем элементу класс с нужной анимацией
    elementTwo.classList.add('animate');
  }
}

// вызываем функцию при загрузке страницы и при скроллинге
document.addEventListener('DOMContentLoaded', animateOnScrollTwo);
document.addEventListener('scroll', animateOnScrollTwo);


const elementThree = document.querySelector('.table__img');

// функция, которая будет вызвана при прокрутке страницы
function animateOnScrollThree() {
  // получаем координаты верхней и нижней границы элемента
  const elementTopThree = elementThree.getBoundingClientRect().top;
  const elementBottomThree = elementThree.getBoundingClientRect().bottom;

  // если верхняя граница элемента находится внутри видимой области окна
  if (elementBottomThree < window.innerHeight) {
    // добавляем элементу класс с нужной анимацией
    elementThree.classList.add('animate');
  }
}

// вызываем функцию при загрузке страницы и при скроллинге
document.addEventListener('DOMContentLoaded', animateOnScrollThree);
document.addEventListener('scroll', animateOnScrollThree);

const body = document.querySelector("body");



const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const link = document.querySelectorAll('.header__link');

burger.addEventListener('click', function() {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
});

burger.addEventListener("click", function() {
  body.classList.toggle("lock");
});

link.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    burger.classList.remove('active');
    body.classList.remove('lock');
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


const banner = document.querySelector('.banner');
const illustration = document.querySelector('.banner__illustration');

banner.addEventListener('mousemove', e => {
  const x = e.clientX - banner.offsetLeft;
  const y = e.clientY - banner.offsetTop;
  const centerX = banner.offsetWidth / 2;
  const centerY = banner.offsetHeight / 2;
  const offsetX = (x - centerX) / 70;
  const offsetY = (y - centerY) / 70;
  illustration.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});


const about = document.querySelector('.about');
const aboutImg = document.querySelector('.about__illustration');

about.addEventListener('mousemove', e => {
  const x = e.clientX - about.offsetLeft;
  const y = e.clientY - about.offsetTop;
  const centerX = about.offsetWidth / 2;
  const centerY = about.offsetHeight / 2;
  const offsetX = (x - centerX) / 70;
  const offsetY = (y - centerY) / 70;
  aboutImg.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});


function calculate() {
  // Get input values
  const hashRateInput = document.querySelector('.earn__input');
  const hashRate = parseFloat(hashRateInput.value);
  const hashType = document.querySelector('.earn__hash').value;

  // Calculate revenue
  let revenue = 0;
  if (hashType === 'TH/s') {
    revenue = hashRate * 0.00055 * 24;
  } else if (hashType === 'GH/s') {
    revenue = hashRate * 0.00000055 * 24;
  } else if (hashType === 'MH/s') {
    revenue = hashRate * 0.00000000055 * 24;
  }

  // Update calculated coins
  const calculatedCoins = document.querySelector('.earn__calculated-coins');
  calculatedCoins.innerText = revenue.toFixed(8) + ' ETH';

  // Update calculated money
  const ethPrice = 1275; // Replace with current ETH price
  const calculatedMoney = document.querySelector('.earn__calculated-money');
  calculatedMoney.innerText = '($' + (revenue * ethPrice).toFixed(2) + ')';
}

const input = document.querySelector('.earn__input');
// Event listener for the input keypress
input.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    calculate();
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

    document.body.onload = function() {

      setTimeout(() => {
          var preloader  = document.getElementById('page-preloader');
          if ( !preloader.classList.contains('done'))
          {
              preloader.classList.add('done');
          }
      }, 2000);
  };