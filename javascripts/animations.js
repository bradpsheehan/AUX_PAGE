$(document).ready(function (){
  $(".skills-button-fixed").click(function() {
      $('html, body').animate({
          scrollTop: $("#animation-target").offset().top
      }, 700);
  });


  // $('.circle').click(function(){
  //   $(this).toggleClass('active')
  // });

  // $('.circle').click(function(){
  //   console.log($(document).find(this));
  // });

  $('#skills-content-left-top').toggle();
  $('#skills-content-left-bottom').toggle();
  $('#skills-content-bottom').toggle();
  $('#skills-content-right-bottom').toggle();
  $('#skills-content-right-top').toggle();

  // $('#skills-wrapper-place').click(function(){
  //   $('#skills-content-left-top').toggle();
  //   $('#skills-content-left-bottom').toggle();
  //   $('#skills-content-bottom').toggle();
  //   $('#skills-content-right-bottom').toggle();
  //   $('#skills-content-right-top').toggle();
  //   $('.circle').toggleClass('active');
  // });

  $('#skills1').click(function(){
    $(this).find('.circle').toggleClass('active');
    $('#skills-content-left-top').toggle();
  });

  $('#skills2').click(function(){
    $(this).find('.circle').toggleClass('active');
    $('#skills-content-left-bottom').toggle();
  });

  $('#skills3').click(function(){
    $(this).find('.circle').toggleClass('active');
    $('#skills-content-bottom').toggle();
  });

  $('#skills4').click(function(){
    $(this).find('.circle').toggleClass('active');
    $('#skills-content-right-bottom').toggle();
  });

  $('#skills5').click(function(){
    $(this).find('.circle').toggleClass('active');
    $('#skills-content-right-top').toggle();

  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 700) {
      // $('#skills-wrapper').attr('id', 'skills-wrapper-place');
      $('#skills1').addClass('transition');
      $('#skills2').addClass('transition-2');
      $('#skills3').addClass('transition-3');
      $('#skills4').addClass('transition-4');
      $('#skills5').addClass('transition-5');
      $('.skills-button-fixed').hide();
    }
  });
});
