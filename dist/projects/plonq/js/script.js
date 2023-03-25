document.body.onload = function() {

  setTimeout(() => {
      var preloader  = document.getElementById('page-preloader');
      if ( !preloader.classList.contains('done'))
      {
          preloader.classList.add('done');
      }
  }, 3000);
};


document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
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
    };

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('anim-active');
    }
  });
}

let options = {
  threshold: [0.1] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.anim-left, .anim-right, .anim-down, .anim-show, .anim-hands');

for (let elm of elements) {
observer.observe(elm);
}   