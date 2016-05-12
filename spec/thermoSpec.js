'use strict';

describe('thermo', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('default settings', function() {

    it('temperate starts at 20 degrees', function() {
      expect(thermostat.temperature).toBe(20);
    });

    it('maxTemp is 25 degrees', function() {
      expect(thermostat.maxTemp).toBe(25);
    });
  });

  describe('change temperature', function() {

    it('can be increased', function() {
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toBe(21);
    });

    it('can be decreased', function() {
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toBe(19);
    });

    it('won\'t go below 10 degrees', function() {
      var times = 15;
      for(var i = 0; i < times; i++){
        thermostat.decreaseTemperature();
      }
      expect(thermostat.temperature).toBe(10);
    });

    it('Reset sets temperature to 20 degrees', function() {
      var times = 5;
      for(var i = 0; i < times; i++){
        thermostat.increaseTemperature();
      }
      thermostat.resetTemp();
      expect(thermostat.temperature).toBe(20);
    });
  });

  describe('Power saving mode', function() {

    it('\'on\' sets max temp to 25 degrees', function() {
      thermostat.powerSaveOn();
      var times = 6;
      for(var i = 0; i < times; i++){
        thermostat.increaseTemperature();
      }
      expect(thermostat.temperature).toEqual(25);
    });

    it('\'off\' sets max temp to 32 degrees', function() {
      thermostat.powerSaveOff();
      var times = 14;
      for(var i = 0; i < times; i++){
        thermostat.increaseTemperature();
      }
      expect(thermostat.temperature).toEqual(32);
    });

    it('reduces temperatue to 25 degrees if needed', function() {
      thermostat.powerSaveOff();
      var times = 14;
      for(var i = 0; i < times; i++){
        thermostat.increaseTemperature();
      }
      thermostat.powerSaveOn();
      expect(thermostat.temperature).toEqual(25);
    });
  });

  describe('Colour', function() {
    it('should be green below 18 degrees', function() {
      var times = 3;
      for(var i = 0; i < times; i++){
        thermostat.decreaseTemperature();
      }
      expect(thermostat.colour()).toBe('green');
    });

    it('should be yellow between 18 and 24 degrees', function() {
      expect(thermostat.colour()).toBe('yellow');
    });

    it('should be red above 24 degrees', function() {
      var times = 5;
      for(var i = 0; i < times; i++){
        thermostat.increaseTemperature();
      }
      expect(thermostat.colour()).toBe('red');
    });
  });

  describe('Get temperature', function(){
    it('Returns the current temperature', function() {
      expect(thermostat.getTemperature()).toBe(20);
    });
  });
});
