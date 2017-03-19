
// Variables must not start with a number Can contain letters, numbers, underscore(_) and dollar sign($) Case sensitive Types are assigned by value
console.warn("Variables");

var myName = "Sample name"; // String
var myAge = 23; // Integer
var myHeight = 1.76; // Float
var myAccount = null; // Null

console.log("My name is:", myName, ", my age is", myAge, ", my height is", myHeight, ", and my bank account has", myAccount, "total.");

// Arrays
console.info("Arrays")

var myArr = ["val1", "val2", 2, 3.14, "etc"];
console.log("First in array: " + myArr[0]); // Index starts with zero
console.log("Third in array: " + myArr[3]);

// Overwrite a value
console.log("Second in array was: " + myArr[2]);
myArr[2] = 4;
console.log("Now I changed to: " + myArr[2]);

// Splice
var fruits = ["Banana", "Orange", "Apple", "Mango"];
// First argument is index number to start
// Second argument is how many should be removed
// Arguments after are going to be added to array
fruits.splice(3, 1, "Lemon", "Kiwi");
console.log(fruits);

// Value of
console.log("Array, valueOf(): " + fruits.valueOf());

// Join, can define the separator
console.log("Array, join(): " + fruits.join(" - "));

// Order
// Sort string array
console.log("Array with strings, sort(): " + fruits.sort());

// Reverse sort string array
console.log("Array with strings, sort() and reverse(): " + fruits.sort().reverse());

console.log("Before pop and shift: " + fruits);
// Pop: Remove last item
fruits.pop();
// Shift: Remove first item
fruits.shift();
console.log("After pop and shift " + fruits);

// Push: Add an item to the end of array
fruits.push("Tomato");
// Unshift: Add an item to the beggining of array
fruits.unshift("Pineapple")
console.log("Push and unshift: " + fruits);

var numberArr = [3, 4, 2, 1, 5];
// Sort number array ascending
console.log("Numbers array, ascending sort(): " + numberArr.sort(function(a, b) {
    return a - b
}));
// Sort number array descending
console.log("Array with numbers, descending sort(): " + numberArr.sort(function(a, b) {
    return b - a
}));

// Delete an index
delete fruits[0];

// Combine two arrays
var combinedArr = fruits.concat(numberArr);
console.log("Combined: ", combinedArr);

// Objects
console.info("Objects");
var myObj = {
    name: "PC",
    ram: 16,
    hd: 500,
    proc: "AMD"
};
console.log(myObj.name + " has " + myObj.ram + "gb ram, and an HD of " + myObj.hd + "gb.");

// With functions
var customer1 = {
	name: "John Doe",
	age: 30,
	street: "Imaginary Street",
	number: 123,
	state: "Neverland",
	money: 1234.56,
	email: "johndoe@imagine.com",
	removeMoney: function(amount) {
		this.money -= amount;
	},
	addMoney: function(amount) {
		this.money += amount;
	}
};

// Add value to money
customer1.addMoney(100);
console.log("Customer money: " + customer1.money);

// Remove value from money
customer1.removeMoney(500);
console.log("Customer money: " + customer1.money);

// Change property
customer1.age = 40;
console.log("Customer age: " + customer1.age);

// Add a property
customer1.city = "Quantum";
console.log("Customer city: " + customer1.city);

// Delete a property
delete customer1.city;

// Get all properties from a obj
for(var property in customer1){
	if(customer1.hasOwnProperty(property)){
		console.log(property);
	}
}

// Check if property exists
console.log("Name in customer: ", "name" in customer1);
console.log("Country in customer: ", "country" in customer1);

// Pass in a function
function getInfo(cust){
	return "The name of the customer is " + cust.name + ", has " + cust.age + " years old, and lives in " + cust.street + ".";
}

console.log(getInfo(customer1));

// Object constructor - Generic objects
function Customer(name, age, money, street, number, city) {
	this.name = name;
	this.age = age;
	this.adress = {
		street: street,
		number: number,
		city: city
	};
	this.money = money;
	this.removeMoney = function(amount) {
		this.money -= amount;
	};
	this.addMoney = function(amount) {
		this.money += amount;
	};
}

var customerBob = new Customer("Robert Bob", 25, 9876.54, "Invisible Avenue", 321, "Neverland");
customerBob.addMoney(1000)
console.log(customerBob);

// Static value, shared by all objects created
Customer.prototype.isAdult = true;

// Static method, also shared
// Can overwrite base js functions
Customer.prototype.information = function(){
	return this.name + " has " + this.age + " years old and lives in " + this.adress.street + " number " + this.adress.number + " in a city called " + this.adress.city;
};

console.log(customerBob.information());


// Math operations
console.warn("Numbers")
console.info("Simple operations")
var sum = 10 + 2;
console.log(sum);
var sub = 10 - 2;
console.log(sub);
var mult = 10 * 2;
console.log(mult);
var div = 10 / 2;
console.log(div);
var mod = 10 % 2;
console.log(mod);

// Do quick operations on vars Work with all operations
console.info("Short operation")
var rand = 5;
console.log(rand += 5); // Add 5 to variable rand

// Use parenthesis like in simple math to define a order of operations
console.info("Parenthisis")
console.log(1 + 1 * 2); // 3
console.log((1 + 1) * 2); // 4

// Max and min number to store in js
console.info("Max and min numbers");
var maxValue = Number.MAX_VALUE;
console.log(maxValue);
var minValue = Number.MIN_VALUE;
console.log(minValue);

// Js has 16 numbers for precision
console.info("Precision");
var goodSum = 0.1000000000000001 + 0.1000000000000001;
console.log(goodSum);
var badSum = 0.10000000000000001 + 0.10000000000000001;
console.log(badSum);

// Mixing types
console.info("Mixing Types")
console.log("2 + 2 = ", 2 + 2); // Print 2 + 2 = 4
console.log("2 + 2 = " + 2 + 2); // Print 2 + 2 = 22

// To Fixed
console.info("To fixed")
var hugeFloat = 1000 / 3;
console.log(hugeFloat);
console.log(hugeFloat.toFixed(2));

// Increment and decrement var++ or var-- displays and then do the operation ++var or --var do the operation and then displays
console.info("Increment and decrement");
var inc = 10;
var dec = 10;

console.log("Display: ", inc++, " Result: ", inc);
console.log("Display: ", --dec, " Result: ", dec);

// Math Constants
console.info("Math.");
console.log("Math.E = ", Math.E);
console.log("Math.PI = ", Math.PI);
console.log("Math.abs(-8) = ", Math.abs(-8));
console.log("Math.cbrt(1000) = ", Math.cbrt(1000));
console.log("Math.ceil(6.45) = ", Math.ceil(6.45));
console.log("Math.floor(6.45) = ", Math.floor(6.45));
console.log("Math.round(6.45) = ", Math.round(6.45));
console.log("Math.log(10) = ", Math.log(10)); // Natural log
console.log("Math.log10(10) = ", Math.log10(10)); // Base 10 log
console.log("Math.max(10,5) = ", Math.max(10, 5));
console.log("Math.min(10,5) = ", Math.min(10, 5));
console.log("Math.pow(4,2) = ", Math.pow(4, 2));
console.log("Math.sqrt(1000) = ", Math.sqrt(1000));

// Random numbers
console.info("Random");
// Define a max number
var randMax = 1000;
// Use the floor to make an integer add the one to not start with 0
var randNumber = Math.floor((Math.random() * randMax) + 1);
console.log(randNumber);

// Convert strings to numbers
console.log("Converted String : ", Number("3.14"));
console.log("Converted Int : ", parseInt("6"));
console.log("Converted Float : ", parseFloat("5.555"));

// Strings
console.warn("Strings");

// For repeated quotes use \"
var randStr = " A long string that goes on and on. \"By Rodrigo\" ";

// Remove whitespace from beggining or end of string
randStr = randStr.trim();

// Length
console.log(randStr.length);

// Number index for word, case sensitive
var firstIndex = randStr.indexOf("goes");
console.log(firstIndex);
var lastIndex = randStr.indexOf(" ", firstIndex)
console.log(lastIndex);

// Slice uses indexes for length to catch
console.log(randStr.slice(firstIndex, lastIndex));
// Get everything after the index
console.log(randStr.slice(firstIndex));

// Substr use the second argument as length to catch
console.log(randStr.substr(firstIndex, 4));

// Replace
console.log(randStr.replace("and on", "forever"));

// Get the char for the index
console.log(randStr.charAt(39));

// Split to array from spaces
console.log(randStr.split(" "));

// To uppercase and to lowercase
console.log(randStr.toUpperCase(), ". In upper");
console.log(randStr.toLowerCase(), ". In lower");

// Conditionals
console.warn("Conditions");

// Relational operators: === == != < > <= >= Logical operators: && || !

var age = 17;

// Ternary
var canISleep = (age > 17) ? "Yeah, it sucks." : "Great, enjoy while you can.";
console.log(canISleep);

// If statement
if (age < 18) {
    console.log("You should be studying your age is: " + age);
} else if (age >= 18 && age <= 60) {
    console.log("You should be working or in college, your age is: " + age + ". Enjoy this years");
} else {
    console.log("You should be retired. Your age is: " + age);
}

// Switch
switch (age) {
    case 16:
    case 17:
        console.log("Hey you're " + age + ". Cool, you can vote.");
        break;
    case 18:
        console.log("Nice, you're 18 you can drink already.");
        break;
    case 21:
        console.log("You are 21, probably are considering living alone, I hope.");
        break;
    default:
        console.log("Hey, you are " + age + ". Good for you");
}

// Double equals, ignore types, strings equals number
console.log("Double equals: ", ("5" == 5));

// Triple equals, must be of the same type
console.log("Triple equals ", ("5" === 5));

// Or
console.log("True or false ", true || false);

// And
console.log("True and false ", true && false);

// Not
console.log("!True equals false ", !true);

// Looping
console.warn("Loop");

// While Only run if condition is true Create the increment before Don't forget to increment inside
var i = 0;
var loops = 10;
var show = "";

while (i <= loops) {
    show += i.toString();
    ++i;
    if (i === loops) {
        console.log("While: " + show);
    }
}

// Do Run at least once even if while is false Create the increment before Don't forget to increment
var a = 0;
var b = 10;
do {
    console.log("Do while: Hey once. My while is false");
}
while (a > b);

// For Only run if condition is true Can create the increment on the run
var size = 10;
var show = "";
for (var i = 0; i <= size; i++) {
    // ++i; Not necessary
    show += i.toString();
    if (i === size) {
        console.log("For: " + show);
    }
}

// continue and break
for (var i = 0; i <= 20; ++i) {
    // continue restart the loop from the beginning
    if ((i % 2) == 0)
        continue
        // break quits the loop completely
    if ((i > 8))
        break

    console.log("I'm " + i + ", an odd number");
}

// Loop through an array
var fruits = ["Tomato", "Pineapple", "Peach", "Grape"];
for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Loop through an obj values
var person = {
    name: "Bob",
    adress: "123 main street",
    balance: 50.50
};
for (info in person) {
    console.log(person[info]);
}

// Functions eliminate repetitive code
console.warn("Functions");

// In the creation you can define the parameters that the function will receive
function inArray(arr, val) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return true;
        }
    }
    return false;
}
var testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(inArray(testArr, 5));

// Local variables are the ones inside a function
function add2(val) {
    // This variable only exists in this function
    var n = 2;
    return val + n;
}
console.log(add2(2));
// Outside of it two is not defined and it will break
// console.log(two);

// Global Variables are the ones outside a function
var n = 2;

function sub2(val) {
    // Four works in here if not overwrite
    return val - n;
}
console.log(sub2(8));

// With overwrite
// This value exists outside, and can be used after
var n = 5;

function times2(val) {
    // This value only exists in the function
    var n = 2;
    return val * n;
}
// The one below is the global
console.log(times2(n));

// A function can be used as a parameter for another function
function calc(fnc, val) {
    return fnc(val);
}
// With times2
console.log(calc(times2, 9));

// Functions can be made inside a variable
// So can be stored in a array
var triple = function(val) {
    return val * 3;
};
console.log(triple(3));

// Loop array from function
function doubleArr(arr) {
    var funcArr = [];
    for (var i = 0; i < arr.length; i++) {
        funcArr.push(arr[i] * 2);
    }
    return funcArr;
}
console.log(doubleArr([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Use "arguments" variable to loop through undefined arguments
function getSum() {
    sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(getSum(1, 2, 3, 4, 5, 6, 7));

// Recursive function (that calls itself)
function factorial(val) {
    if (val <= 1) {
        return 1;
    } else {
        return val * factorial(val - 1);
    }
}
console.log(factorial(5));

console.warn("Dates");

// Posix date
// Started on 1970/01/01 on 0 UTC (timezone)

// Create a date variable
var now = new Date();
// Get the date from the os/browser
console.log(now);
// Miliseconds
console.log(now.getTime());

// Christmas date by milliseconds
// At 10h30m30s of 2015/12/25 UTC -2 (timezone)
// Be carefull with the timezone
var xmas = new Date(1451046630000);
console.log(xmas);

// Date methods
// Read this for more: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
console.info("Date Methods");
console.log("getYear() = " + xmas.getYear()); // Old style, after 2000 will ouput 100
console.log("getFullYear() = " + xmas.getFullYear()); // New style, will output 2xxx
console.log("getMonth() = " + xmas.getMonth()); // Months 0 to 11
console.log("getDate() = " + xmas.getDate()); // Number of the day
console.log("getDay() = " + xmas.getDay()); // Day of the week, starts at sunday as 0 and ends at 6
console.log("getHours() = " + xmas.getHours());
console.log("getMinutes() = " + xmas.getMinutes());
console.log("getSeconds() = " + xmas.getSeconds());
console.log("getMilliseconds() = " + xmas.getMilliseconds()); // If the date provided milliseconds
console.log("getTime() = " + xmas.getTime()); // The actual milliseconds since Posix
console.log("toString() = " + xmas.toString());

// Date strings
console.info("Date Strings");

// There is two different formats RFC2822 and ISO8601
// Default is RFC2822

// RFC 2822

// Valid, starts from the broser timezone
console.log(new Date("12/25/2015"));
console.log(new Date("2015/12/25"));
// Invalid
console.log(new Date("25/12/2015"));
console.log(new Date("2015/25/12"));

// Oher formats
// Fri = Friday, Dec = December
console.log(new Date("Fri Dec 25 2015")); // Date
console.log(new Date("Fri Dec 25 2015 10:30:00")); // Date + Hour
console.log(new Date("Fri Dec 25 2015 10:30:00 GMT-0200")); // Date + Hour + Timezone
// Parse returns the milliseconds
console.log(Date.parse("2015/12/25"));

// ISO 8601
// Timezone starts on 0 if not specified
// YYYY-MM-DDThh:mm:ssTZD

// Valid
console.log(new Date("12-25-2015"));
// Valid
console.log(new Date("2015-12-25T00:00:00"));
// Valid with -2 timezone
console.log(new Date("2015-12-25T00:00:00-02:00"));
// Invalid
console.log(new Date("25-12-2015"));
console.log(new Date("2015-25-12"));

// milliseconds
console.log(Date.parse("2015-12-25"));

// With parameters
// Months starts with 0
// January is 0, December is 11

// System timezone
console.log(new Date(2015, 11, 25, 10, 30, 30, 2));
// To set timezone 0
console.log(new Date(Date.UTC(2015, 11, 25, 10, 30, 30)));
