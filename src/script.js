
$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemp();

  $('#city').change(function(){
    var city = $('#city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=9ecba4652a14069c1e2d09e14d2c93c9&units=metric', function(data) {
    $('#temp').text(data.main.temp);
    $('#sea-level').text(data.main.sea_level);
    $('#wind-speed').text(data.wind.speed);
  });
});

  $('button').mouseenter(function(){
    $(this).fadeTo('fast',0.25);
  });

  $('button').mouseleave(function(){
    $(this).fadeTo('slow',1);
  });

  $('#up').click(function() {
    thermostat.increaseTemperature();
    updateTemp();
  });

  $('#down').click(function() {
    thermostat.decreaseTemperature();
    updateTemp();
  });

  $('#powerSaveOn').click(function() {
    thermostat.powerSaveOn();
    updateTemp();
  });

  $('#powerSaveOff').click(function() {
    thermostat.powerSaveOff();
    updateTemp();
  });

  $('#reset').click(function() {
    thermostat.resetTemp();
    updateTemp();
  });

  function updateTemp(){
    $('#temperature').text(thermostat.getTemperature());
    $('#temperature').attr('class', thermostat.colour());
  }
});
