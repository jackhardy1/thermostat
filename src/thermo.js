'use strict';

function Thermostat() {
  this.minTemp = 10;
  this.maxTemp = 25;
  this.defaultTemp = 20;
  this.temperature = this.defaultTemp;
}

Thermostat.prototype.increaseTemperature = function() {
  if (this.temperature === this.maxTemp){
    return;
  }
  this.temperature++;
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature === this.minTemp) {
    return;
  }
  this.temperature--;
};

Thermostat.prototype.powerSaveOn = function() {
  this.maxTemp = 25;
  if (this._isTooHot()) {
    this.temperature = this.maxTemp;
  }
};

Thermostat.prototype.powerSaveOff = function() {
  this.maxTemp = 32;
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = 20;
};

Thermostat.prototype._isTooHot = function() {
  return this.temperature > this.maxTemp;
};
