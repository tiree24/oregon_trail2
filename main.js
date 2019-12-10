// function Dog (name, breed, isGoodBoy) {
//     this.name = name;
//     this.breed = breed;
//     this.isGoodBoy = isGoodBoy;
// }
// Dog.prototype.sit = function () {
//     // sitting code here
// }
// Dog.prototype.fetch = function () {
//     // fetching code here
// }

function Traveler(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
}
let testTraveler = new Traveler("tiree")
console.log(testTraveler)

function Wagon(capacity) {
    this.capacity = capacity
    this.passengers = []
}
let testWagon = new Wagon(3)
console.log(testWagon)

Traveler.prototype.hunt = function () {
    this.food = this.food + 2
}
testTraveler.hunt()
console.log(testTraveler)

Traveler.prototype.eat = function () {
    if (this.food > 0) {
        this.food = this.food - 1
    }
    else {
        this.isHealthy = false
    }
}
testTraveler.eat()
testTraveler.eat()
testTraveler.eat()
testTraveler.eat()
console.log(testTraveler)

Wagon.prototype.getAvailableSeatCount = function () {
    return this.capacity - this.passengers.length
}
testWagon.getAvailableSeatCount()
console.log(testWagon.getAvailableSeatCount())

Wagon.prototype.join = function (traveler) {

if(this.getAvailableSeatCount() > 0)
{this.passengers.push(traveler)}
}
testWagon.join(testTraveler)
console.log(testWagon)

Wagon.prototype.shouldQuarantine = function () {
    for (let i = 0; i < this.passengers.length; i++){
        if(this.passengers[i].isHealthy ===false){
            return true
        }

    }
    return false
}
console.log(testWagon.shouldQuarantine())

Wagon.prototype.totalFood = function () {
    let results = 0
    for (let i = 0; i < this.passengers.length; i++){
        results = results + this.passengers[i].food
    }
    return results
    
}
console.log(testWagon.totalFood())

// Create a wagon that can hold 2 people
let wagon = new Wagon(2);
// Create three travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
wagon.join(juan);
wagon.join(maude); // There isn't room for her!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
henrietta.hunt(); // get more food
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);