describe('thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe("change temperature", function(){
    it("can increase temp", function(){
      thermostat.increaseTemp(5);
      expect(thermostat.temperature).toBe(25);
    });

    it("can decrease temp", function(){
      thermostat.decreaseTemp(5);
      expect(thermostat.temperature).toBe(15);
    });

    it("cannot go below 10 degrees celsius", function(){
      expect(function(){thermostat.decreaseTemp(11);}).toThrowError("cannot go below 10 degrees");
    });
  });

  describe("power saving mode on", function(){
    it("changes maximum temperature to 25 degrees", function() {
      thermostat.powerSavingOn();
      expect(thermostat.maxTemp).toBe(25);
    });

    it("raises error if temperature too high", function() {
      thermostat.powerSavingOn();
      expect(function(){thermostat.increaseTemp(6);}).toThrowError("cannot go above 25 degrees");
    });
  });

  describe("power saving mode off", function(){
    it("changes maximum temperature to 32 degrees", function() {
      thermostat.powerSavingOff();
      expect(thermostat.maxTemp).toBe(32);
    });
  });

  describe("reset button", function(){
    it("resets the current temperature to 20 degrees", function() {
      thermostat.increaseTemp(5);
      thermostat.reset();
      expect(thermostat.temperature).toBe(20);
    });
  });
});
