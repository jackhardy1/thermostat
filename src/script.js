$(document).ready(function(){
  var thermostat = new Thermostat();

  $('button').mouseenter(function(){
    $(this).fadeTo('fast',0.25);
  });
  $('button').mouseleave(function(){
    $(this).fadeTo('slow',1);
  });

  $('#temperature').text(thermostat.getTemperature());

  $('#up').click(function() {
    thermostat.increaseTemperature();
    $('#temperature').text(thermostat.getTemperature());
  });

  $('#down').click(function() {
    thermostat.decreaseTemperature();
    $('#temperature').text(thermostat.getTemperature());
  });

  $('#powerSaveOn').click(function() {
    thermostat.powerSaveOn();
    $('#temperature').text(thermostat.getTemperature());
  });

  $('#powerSaveOff').click(function() {
    thermostat.powerSaveOff();
    $('#temperature').text(thermostat.getTemperature());
  });

  $('#reset').click(function() {
    thermostat.resetTemp();
    $('#temperature').text(thermostat.getTemperature());
  });

});
