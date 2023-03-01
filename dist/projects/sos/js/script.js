

$(document).ready(function(){
    
    $('.about__slider').slick({
        centerMode: true,
        slidesToShow: 1,
        infinite: false,
        dots: true,
        autoHeight: true,
        prevArrow: false,
        cssEase: 'ease',
    });
    $('.features__spoiler-title').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
    $('.header__burger').on('click', function(e) {
        e.preventDefault;
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
      });
  });
    
