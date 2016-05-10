function Thermostat(){

this.defaultTemp = 20;
this.maxTemp = 25;
this.minTemp = 10;

this.temperature = this.defaultTemp;

  Thermostat.prototype.increaseTemp = function(temp){
    if(this._isTooHot(temp)){
      throw new Error("cannot go above 25 degrees");
    }
    this.temperature += temp;
  };

  Thermostat.prototype.decreaseTemp = function(temp){
    if(this._isTooCold(temp)){
      throw new Error("cannot go below 10 degrees");
    }
    this.temperature -= temp;
  };

  Thermostat.prototype.powerSavingOn = function() {
    this.maxTemp = 25;
  };

  Thermostat.prototype.powerSavingOff = function() {
    this.maxTemp = 32;
  };

  Thermostat.prototype.reset = function() {
    this.temperature = 20;
  };

  Thermostat.prototype._isTooHot = function(temp) {
    return this.temperature + temp > this.maxTemp;
  };

  Thermostat.prototype._isTooCold = function(temp) {
    return this.temperature - temp < this.minTemp;
  };

}
