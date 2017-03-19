// Basic object
console.warn("Basic object");
var customer = {
    name: "Rodrigo Lima",
    speak: function() {
        return "My name is " + this.name;
    },
    address: {
        street: "Main Street",
        number: "123",
        city: "New City",
        state: "NC"
    }
};

console.log(customer.speak());
console.log("I live on " + customer.address.street + ", " + customer.address.number);

customer.address.country = "New Country";
console.log("And my country is " + customer.address.country);

// Constructor object
console.warn("Constructor object");

function Customer(name, age) {
    this.name = name;
    this.age = age;
    this.info = function() {
        return "Customer name is " + this.name + ", and he is " + this.age + " years old.";
    };
}

var bob = new Customer("Bob Smith", 24);
console.log(bob.info());
console.log("Bob is a Customer? " + (bob instanceof Customer));

// Change the name from a reference
function changeName(person) {
    person.name = "Robert Smith";
}

changeName(bob);
console.log(bob.info());

var person1 = new Customer("Paul", 30);
var person2 = new Customer("Paul", 30);

console.log("Are they equal? " + (person1 == person2));

// Prototypes
console.warn("Prototypes");

function addNum(num1, num2) {
    return num1 + num2;
}

console.log("Num of arguments = " + addNum.length);

function Mammal(name) {
    this.name = name;
    this.getInfo = function() {
        return "Mammal name is " + this.name;
    };
}

Mammal.prototype.sound = "Grrr";
Mammal.prototype.makeSound = function() {
    return this.name + " says " + this.sound;
};

var grover = new Mammal("Grover");
console.log(grover.makeSound());

// Without prototype created
for (var prop in grover) {
    if (grover.hasOwnProperty(prop)) {
        console.log(prop + ": " + grover[prop]);
    }
}

// With prototype created
for (var prop in grover) {
    console.log(prop + ": " + grover[prop]);
}

// Check if it has property name without prototype
console.log("Grover has name property? " + grover.hasOwnProperty("name"));
console.log("Grover has sound property? " + grover.hasOwnProperty("sound"));

// Change js base objects
// Check if value is in array
Array.prototype.inArray = function inArray(value) {
    for (i = 0; i < this.length; i++) {
        if (this[i] === value) {
            return true;
        }
    }
    return false;
};

var sampArray = [1, 2, 3, 4, 5];
console.log("sampArray has number 2? " + sampArray.inArray(2));
console.log("sampArray has number 6? " + sampArray.inArray(6));

// Private properties
console.warn("Private");

function SecretCode() {
    var secretNum = 42;

    this.guessNum = function(num) {
        if (num > secretNum) {
            return "Lower";
        } else if (num < secretNum) {
            return "Higher";
        } else {
            return "You nailed it!";
        }
    };
}

var secret = new SecretCode();
console.log("Value of secret num = " + secret.secretNum);
console.log("Try number 78 = " + secret.guessNum(78));
console.log("Try number 35 = " + secret.guessNum(35));
console.log("Try number 42 = " + secret.guessNum(42));

SecretCode.prototype.getSecret = function() {
    return this.secretNum;
    // return secretNum; Doesn't work as well
}

console.log("The secret number is = " + secret.getSecret());

// Getters and setters
console.warn("Getters and setters");

var address = {
    street: "No Street",
    number: 1,
    city: "No City",

    get getAddress() {
        return this.street + ", " + this.number + ", " + this.city + ".";
    },

    set setAddress(theAddress) {
        var parts = theAddress.toString().split(", ");
        this.street = parts[0].trim() || "";
        this.number = parts[1].trim() || "";
        this.city = parts[2].trim() || "";
    }
}

address.setAddress = "Main Street, 42, New City";
console.log(address.getAddress);
console.log(address.city);

// CONSTRUCTOR GETTERS AND SETTERS

// With __defineGetter__ and __defineSetter__
// (Deprecated) But still used
function Coordinates() {
    this.latitude = 0.0;
    this.longitude = 0.0;
}

// Define the getter with the prototype to assign it to with
// the property name and the getter function
Object.__defineGetter__.call(Coordinates.prototype, "getCoords", function() {
    return "Lat : " + this.latitude + " Long: " + this.longitude;
});

// Define the setter with the prototype to assign it to with
// the property name and the setter function
Object.__defineSetter__.call(Coordinates.prototype, "setCoords", function(coords) {
    var parts = coords.toString().split(", ");
    this.latitude = parts[0] || '';
    this.longitude = parts[1] || '';
});

var testCoords = new Coordinates();

testCoords.setCoords = "40.71, 74.00";

console.log("Coordinates : " + testCoords.getCoords);

// With defineProperty
function Point() {
    this.xPos = 0;
    this.yPos = 0;
}

Object.defineProperty(Point.prototype, "pointPos", {
    get: function() {
        return "X: " + this.xPos + " Y: " + this.yPos;
    },
    set: function(thePoint) {
        var parts = thePoint.toString().split(", ");
        this.xPos = parts[0] || '';
        this.yPos = parts[1] || '';
    }
});

var aPoint = new Point();

aPoint.pointPos = "100, 200";

console.log("Point position - X: " + aPoint.xPos + ", Y: " + aPoint.yPos);

// ES5.1 most updated

var Circle = function(radius) {
    this._radius = radius;
};

Circle.prototype = {
    set radius(radius) {
        this._radius = radius;
    },
    get radius() {
        return this._radius;
    },
    get area() {
        return Math.PI * (this._radius * this._radius);
    }
};

var circ = new Circle(10);
circ.radius = 15;
console.log("A circle with radius " + circ.radius + " has an area of " + circ.area.toFixed(2));

// Inheritance
console.warn("Inheritance");

function Animal(){
	this.name = "Animal";
	this.toString = function(){
		return "My name is " + this.name;
	};
}

function Canine(){
	this.name = "Canine";
}

Canine.prototype = new Animal();
Canine.prototype.constructor = Canine;

function Wolf(){
	this.name = "Wolf";
}

Wolf.prototype = new Canine();
Wolf.prototype.constructor = Wolf;

var direWolf = new Wolf();

// Output toString defined in Animal with the name Wolf
console.log(direWolf.toString());
console.log("direWolf is an Animal obj? " + (direWolf instanceof Animal));

Animal.prototype.sound = "Grrrrr";
Animal.prototype.getSound = function(){
	return this.name + " says " + this.sound;
};

Canine.prototype.sound = "Woooff";
Wolf.prototype.sound = "Grrrrr Woooff";

console.log(direWolf.getSound());

function Rodent(){
	this.name = "Rodent";
}

function Rat(){
	this.name = "Rat";
}

Rodent.prototype = new Animal();
Rat.prototype = Rodent.prototype;
Rodent.prototype.constructor = Rodent;
Rat.prototype.constructor = Rat;

var scienceRat = new Rat();

console.log(scienceRat.toString());

// Cleaner code using a function

function extend(Child, Parent){
	var Temp = function(){};
	Temp.prototype = Parent.prototype;

	Child.prototype = new Temp();
	Child.prototype.constructor = Child;
}

function Deer(){
	this.name = "Deer";
	this.sound = "Snort";
}

extend(Deer, Animal);
var reindeer = new Deer();

console.log(reindeer.getSound());

// Parent/Superclass
function Vehicle(name){
	this.name = (name || "Vehicle");
}

Vehicle.prototype = {
	drive: function(){
		return this.name + " drives forward.";
	},
	stop: function(){
		return this.name + " stopped."
	}
};

function Truck(name){
	this.name = (name || "Truck");
}

Truck.prototype = new Vehicle();
Truck.prototype.constructor = Truck;

Truck.prototype.drive = function(){
	var driveMsg = Vehicle.prototype.drive.apply(this);
	return driveMsg + " Through a field."
};

var jeep = new Truck("Jeep");
console.log(jeep.drive());
console.log(jeep.stop());

// Design Patterns
console.warn("Design Patterns");

console.info("Singleton");

// Only allow one instance of an object
function Hero(name) {
	if(typeof Hero.instance === 'object'){
		return Hero.instance;
	}

	this.name = name;
	Hero.instance = this;
	return this;
}

// Only can create one hero
var myHero = Hero("Myself");
console.log("Our hero is " + myHero.name);

var otherHero = Hero("Other");
console.log("Our hero is " + otherHero.name);

console.info("Factory");

function Sword(desc){
	this.weaponType = "Sword";
	this.material = desc.material || "Steel";
	this.style = desc.style || "Longsword";
	this.hasMagic = desc.hasMagic || false;
}

function Bow(desc){
	this.weaponType = "Bow";
	this.material = desc.material || "Wood";
	this.style = desc.style || "Longbow";
	this.hasMagic = desc.hasMagic || false;
}

function WeaponFactory(){};

WeaponFactory.prototype.makeWeapon = function (desc){
	var weaponClass = null;

	if(desc.weaponType === "Sword"){
		weaponClass = Sword;
	} else if (desc.weaponType === "Bow") {
		weaponClass = Bow;
	} else {
		return false;
	}

	return new weaponClass(desc);
};

var myWeaponFactory = new WeaponFactory();

// Can use just the weaponType Sword or Bow and it will work
var darkBlade = myWeaponFactory.makeWeapon({
	weaponType: "Sword",
	material: "Dark Steel",
	style: "Scythe",
	hasMagic: true
});

console.log(darkBlade.weaponType + " of material " + darkBlade.material + " and " + darkBlade.style + " style.");

console.info("Decorator");

function Pizza(price){
	this.price = price || 10;
}

Pizza.prototype.getPrice = function(){
	return this.price;
};

function ExtraCheese(pizza){
	var prevPrice = pizza.price;
	pizza.price = prevPrice + 1;
}

var myPizza = new Pizza();
ExtraCheese(myPizza);
console.log("Cost of Pizza is: " + myPizza.price);

console.info("Observer");

var Observable = function(){
	this.subscribers = [];
};

Observable.prototype = {
	subscribe: function(sub){
		this.subscribers.push(sub);
	},
	unsubscribe: function(unsub){
		for(i = 0; i < this.subscribers.length; i++ ){
			if(this.subscribers[i] == unsub){
				this.subscribers.splice(i, 1);
				return unsub.name + " unsubscribed";
			}
		}
	},
	publish: function(data){
		for(i = 0; i < this.subscribers.length; i++ ){
			this.subscribers[i].receiveData(data);
		}
	}
};

var OrganFanny = {
	name: "Organ Fanny",
	receiveData: function(data){
		console.log(this.name + " received your info " + data);
	}
}

var BoldmanYaks = {
	name: "Boldman Yaks",
	receiveData: function(data){
		console.log(this.name + " received your info " + data);
	}
}

var observe = new Observable();

observe.subscribe(OrganFanny);
observe.subscribe(BoldmanYaks);

observe.publish("IBM at $145,30");

console.log(observe.unsubscribe(OrganFanny));

observe.publish("Microsoft at $235,40");
