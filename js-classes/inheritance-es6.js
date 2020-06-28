// Clasess in JS ES2015 CLASSES
class NewCar {
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.fuelCapacity = fuelCapacity;
        this.fuelConsumption = fuelConsumption;
    }
    getAge() {
        return 'Current year - ' + this.year;
    }
    
    getFullName() {
        return this.name +' '+ this.model;
    }
    
    set changeColor(color) {
        if(this.color === color) {
            console.log('this car has like color');
        }else{
            this.color = color;
            console.log('new color: '+ this.color);
        }
    
    }
    
    checkFuel() {
        if(this.fuelCapacity < 10) {
            let restDistance = this.fuelCapacity / this.fuelConsumption * 100;
            console.log('Please visit the gas station ' + restDistance);
        }else if(this.fuelCapacity > 10) {
            let distance = this.fuelCapacity / this.fuelConsumption * 100;
            console.log(`power reserve: ${distance} km`);
        }
    }
          
}

class Ford extends NewCar {
    constructor (name, model, year, color, wheel, roofRack, twinTurbo) {
        super(name, model, year, color);
    
        this.wheel = wheel;
        this.roofRack = roofRack;
        this.twinTurbo = twinTurbo;
    }
    showOptionsFord() {
        console.log(`Wheel: ${this.wheel}, Roof rack: ${this.roofRack}, Twin turbo: ${this.twinTurbo}`);
    }
}

class Subaru extends NewCar {
    constructor(name, model, year, color, music, cruiseСontrol, airbag) {
        super(name, model, year, color);
        
        this.music = music;
        this.cruiseСontrol = cruiseСontrol;
        this.airbag = airbag;
    }
    showOptionsSubaru() {
        console.log(`Music system: ${this.music}, Cruise control: ${this.cruiseСontrol}, Airbag amount: ${this.airbag}`);
    }
}

let subaru = new Subaru('Subaru', 'Impreza', 2012, 'Blue', 'Sony', true, 10);
let ford = new Ford('Ford', "Focus", 2009, 'Red', 'R17', true, 'Yes');
