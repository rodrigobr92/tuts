// Helper function to getElement by ID
function _id(val) {
    return document.getElementById(val);
}

function regexWarn(id, regex){
	var input = document.querySelectorAll("#" + id + " input")[0];
	var span = document.querySelectorAll("#" + id + " span")[0];
	span.innerHTML = "" + regex;

	input.onkeyup = function(){
		if(this.value){
			if(!regex.test(this.value)){
				span.innerHTML = "Warn: " + regex;
				span.className = "warn";
			} else {
				span.innerHTML = "Success: " + regex;
				span.className = "success";
			}
		} else {
			span.innerHTML = "" + regex;
			span.className = "";
		}
	};
	input.onblur = function(){
		if(this.value && !regex.test(this.value)){
			span.innerHTML = "Error: " + regex;
			span.className = "error";
		}
	};
}

// Even if it has more chars in the string, it is still true if the match is found
regexWarn("abc", /abc/);
// [abc] - Find any character between the brackets
// [^abc] - Find any character NOT between the brackets
// [0-9] - Find any digit between the brackets
// [^0-9] - Find any digit NOT between the brackets
// (x|y) - Find any of the alternatives specified

// Only accept three lowercase letters
// Work with numbers as well with [0-9]
regexWarn("letters1", /^[a-z][a-z][a-z]$/);
// Only accept three letters
regexWarn("letters2", /^[a-zA-Z][a-zA-Z][a-zA-Z]$/);
// Do not accept letters
regexWarn("letters3", /^[^a-zA-Z][^a-zA-Z][^a-zA-Z]$/);
// Escape special chars with \ (backslash)
// Spaces are evaluated as well
regexWarn("phone1", /\(11\) 9999-9999/);
// Begin and end with ^ and $ respectively
// Can be used separately
regexWarn("phone2", /^9999-9999$/);
// Accept all numbers and limit to 4 then - then repeat
regexWarn("phone3", /^[1-9]{4}-[1-9]{4}$/);
// Quantify an minimum and maximum number
regexWarn("phone4", /^[1-9]{4,5}-[1-9]{4}$/);
// ? zero or one
// * zero or more
// + one or more
// After char
regexWarn("phone5", /^\(?[1-9]{2}\)?[1-9]{4,5}-?[1-9]{4}$/)
// Allow repetition of block between parenthesis
regexWarn("jump", /^go(jump)+go$/)
// Metachars
// . - Any char
// \w - [a-zA-Z-0-9_]
// \W - Deny above
// \d - [0-9]
// \D - Deny above
// \s - whitespace
// \S - Deny above
// \n - Line break
// \t - tab
regexWarn("phone6", /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/)

// String API
console.warn("String API");

// /g - get global
// /i - case insensitive
// /m - multiline

var phone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";

// Return exec array
var regExp1 = /\(\d{2}\)\s\d{4,5}-?\d{4}/;
console.log(phone.match(regExp1));

// Return simple array
var regExp2 = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
console.log(phone.match(regExp2));

// Return altered string with new values
var regExp3 = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
console.log(phone.replace(regExp3, "phone"));
