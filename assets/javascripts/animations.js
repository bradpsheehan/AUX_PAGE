$(document).ready(function (){
  $("#skills-button-fixed").click(function() {
      $('html, body').animate({
          scrollTop: $("#animation-target").offset().top
      }, 1000);
  });

  $('#skills-button').hide();

  $("#skills-button").click(function() {
      $('html, body').animate({
          scrollTop: $("#animation-target").offset().top
      }, 1000);
  });

  $("#rec-button").click(function() {
      $('html, body').animate({
          scrollTop: $("#animation-target-2").offset().top
      }, 1000);
  });

  $("#top-button").click(function() {
      $('html, body').animate({
          scrollTop: $("#animation-target-3").offset().top
      }, 1000);
  });

  $('#skills-content-left-top').toggle();
  $('#skills-content-left-bottom').toggle();
  $('#skills-content-bottom').toggle();
  $('#skills-content-right-bottom').toggle();
  $('#skills-content-right-top').toggle();

  $('#skills1').click(function(){
    $('#skills-content-left-top').toggle();
  });

  $('#skills2').click(function(){
    $('#skills-content-left-bottom').toggle();
  });

  $('#skills3').click(function(){
    $('#skills-content-bottom').toggle();
  });

  $('#skills4').click(function(){
    $('#skills-content-right-bottom').toggle();
  });

  $('#skills5').click(function(){
    $('#skills-content-right-top').toggle();

  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 700) {
      $('#skills1').addClass('transition');
      $('#skills2').addClass('transition-2');
      $('#skills3').addClass('transition-3');
      $('#skills4').addClass('transition-4');
      $('#skills5').addClass('transition-5');
      $('#skills-button-fixed').hide();
      $('#skills-button').show();
    }
  });
});
