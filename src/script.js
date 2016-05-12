$(document).ready(function(){
  $('button').mouseenter(function(){
    $(this).fadeTo('fast',0.25);
  });
  $('button').mouseleave(function(){
    $(this).fadeTo('slow',1);
  });

  $('#temperature')
});
