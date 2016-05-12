$.ajax({
  url: 'api.openweathermap.org/data/2.5/weather?'
});

$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemp();

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
