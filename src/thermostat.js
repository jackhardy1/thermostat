function Thermostat(){

DEFAULT_TEMP = 20;
MINIMUM_TEMP = 10;

this.temperature = DEFAULT_TEMP;

  Thermostat.prototype.increaseTemp = function(temp){
    this.temperature += temp;
  };

  Thermostat.prototype.decreaseTemp = function(temp){
    if(this.temperature - temp < 10){
      throw new Error("cannot go below 10 degrees");
    }
    this.temperature -= temp;
  };

}
