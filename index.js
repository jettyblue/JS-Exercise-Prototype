/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from *** arguments. ***
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {  // person constructor that initializes from arguments
  this.name = name;
  this.age = age;
  this.stomach = []; // all instances of Person should initialize with an empty stomach array
}

Person.prototype.eat = function(edible){ // give instances of Person the ability to eat
  if(this.stomach.length < 10){
    this.stomach.push(edible);
  }
}

Person.prototype.poop = function(){ // give instances of Person the ability to poop
  this.stomach = [];  // set to empty array when poops
}

Person.prototype.toString = function(){ // give instances of Person a method .toString
  return `${this.name}, ${this.age}`;
}

const kyler = new Person('Kyler', 25); // create object to check work
const ben = new Person('Ben', 28);

console.log('task 1:', kyler.toString()); // logs a string with 'name' and 'age'
console.log('task 1:', ben.toString());

ben.eat('pizza');
ben.eat('tacos');
ben.eat('sushi');
ben.eat('ramen');
ben.eat('sandwich');
ben.eat('cake');

console.log('task 1 - Bens stomach:', ben.stomach); // logs everything in ben's stomach

ben.poop();

console.log('task 1 - Bens stomach after using the bathroom:', ben.stomach); // logs empty stomach (empty array)



/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons) { // get fill methods from their prototype
    this.tank = this.tank + gallons; // fill method increases the tank by the given gallons
  }

const mazda = new Car('Mazda', 20); // created my own car

console.log('task 2:', mazda.fill(10)); // adds 10 gallons to tank but returns undefined
// could also write as mazda.fill(10);

console.log('task 2:', mazda.tank); // logs 10 because I added 10 gallons to the tank that started at 0


// Stretch 1 - Give cars ability to .drive(distance)
Car.prototype.drive = function(distance) {
  const driveableMiles = this.tank * this.milesPerGallon;
  if(distance <= driveableMiles) {
    this.odometer = this.odometer + distance; // should cause odometer to go up
    this.tank = this.tank - (distance / this.milesPerGallon); // should cause tank to go down
  }else{ // Strech 2 - run out of gas
    this.odometer = this.odometer + driveableMiles;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles`;
  }
}


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age); // Baby constructor takes name and age arguments from Person
  this.favoriteToy = favoriteToy; // Baby takes their own argument to initialize
}

Baby.prototype = Object.create(Person.prototype); // Baby takes methods on Person prototypes
Baby.prototype.play = function() { // Adds Baby's ability to 'play' to prototypes
  return `Playing with ${this.favoriteToy}`;
}

const lindsay = new Baby('Lindsay', 2, 'stuffie'); // created my own new Baby

console.log('task 3:', lindsay.play()); // logs "Playing with stuffie"


/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  
  1. Window binding - If we haven't given 'this' any context it will return the window, the global object in node or undefined in strict mode.
  
  2. Implicit binding - Applies to objects with methods. When the function (method) is invoked, look the the left of the dot, that's what 'this' refers to.
  
  3. Explicit binding - We tell a function what the 'this' keyword should be using .call, .apply or .bind. Call will immediately invoke the function and you pass in your arguments 1 by 1. Apply will immediately invoke the function and you pass in your arguments as an array. Bind you pass in your arguments 1 by 1, but it will not immediately invoke the function, instead it returns a brand new function that can be invoked later.
  
  4. New binding - When a function is invoked with a new keyword the this keyword inside that function is bound to the new object being constructed. When a function is invoked as a constructor function using the new keyword, this points to the new object that’s created
*/



///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}