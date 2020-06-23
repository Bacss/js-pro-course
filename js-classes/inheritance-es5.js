function Car(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;
    this.fuelConsumption = fuelConsumption;
}


Car.prototype.getAge = function () {
    return 'Current year - ' + this.year;
}

Car.prototype.getFullName = function () {
    return this.name +' '+ this.model;
}

Car.prototype.changeColor = function(color) {
    if(this.color === color) {
        console.log('this car has like color');
    }else{
        this.color = color;
        console.log('new color: '+ this.color);
    }

}

Car.prototype.checkFuel = function() {
    if(this.fuelCapacity < 10) {
        let restDistance = this.fuelCapacity / this.fuelConsumption * 100;
        console.log('Please visit the gas station ' + restDistance);
    }else if(this.fuelCapacity > 10) {
        let distance = this.fuelCapacity / this.fuelConsumption * 100;
        console.log(`power reserve: ${distance} km`);
    }
}
      
    
let bmw = new Car('BMW', 525, 98, 'red', 190, 125);

let lexus = new Car('Lexus', 'RX', 2010, 'silver', 215, 9, 12);

let vaz = new Car('Vaz', 2101, 1973, 'Green', 160, 5, 8);
    