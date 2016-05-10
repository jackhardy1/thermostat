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



});
