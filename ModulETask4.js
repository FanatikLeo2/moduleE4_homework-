function Device(name, power){
  this.name = name,
  this.power = power,
  this.plugIn = false;
}
let allPower = 0;
Device.prototype.turnOn = function() {
  this.plugIn = true;
  allPower = allPower + this.power;
  alert(`${this.name} включен. Мощность ${this.name}: ${this.power} Вт. Общая мощность ${allPower}`);
};

Device.prototype.turnOff = function() {
  this.plugIn = false;
  allPower = allPower - this.power;
  alert(`${this.name} выключен. Общая мощность ${allPower}`);
}

function Lamp(brightness) {
  this.brightness = brightness;
}

Lamp.prototype = new Device()

Lamp.prototype.changeBrightness = function() {
  this.brightness = prompt(`Сейчас яркость ${this.brightness}. Настройте новую яркость`);
  alert(`Яркость ${this.name} изменена на ${this.brightness}.`);
}

function Computer(brand, displaySize, memory) {
  this.brand = brand;
  this.displaySize = displaySize;
  this.memory = memory;
}

Computer.prototype = new Device()

Computer.prototype.changeMemory = function() {
  this.memory = prompt(`Сейчас памяти в устройстве ${this.name} - ${this.memory} МБ. Введите новое значение памяти`);
  alert(`Память устройства ${this.name} изменена на ${this.memory}.`);
}


const desklamp = new Lamp(100)
desklamp.name = 'newlamp'
desklamp.power = 15

console.log(desklamp)
desklamp.turnOn()
console.log(desklamp)
desklamp.changeBrightness()
console.log(desklamp)

const newLapTop = new Computer('hp', '17', '2000')
newLapTop.name = 'miFirstPC'
newLapTop.power = 30
console.log(newLapTop)

newLapTop.turnOn()
newLapTop.changeMemory()

desklamp.turnOff()