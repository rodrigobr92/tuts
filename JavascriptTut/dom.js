"use strict";

// Helper function to getElement by ID
function _id(val) {
    return document.getElementById(val);
}

console.log("Current URL: ", window.location.href);
console.log("Current Host: ", window.location.host);
console.log("Current Hostname: ", window.location.hostname);
console.log("Current pathname: ", window.location.pathname);

_id("location").onclick = function(e) {
	window.location.href = "https://google.com";
};

_id("forward").onclick = function(e) {
	history.forward();
};

_id("back").onclick = function(e) {
	history.back();
};

// To move more than one place in history do:
// Negative back, positive forward
// history.go(value);

_id("reload").onclick = function(e) {
	window.location.reload(true);
};

// Get by tag name
var para = document.getElementsByTagName("p");
console.log(para);
para[0].style.color = "red";

// Get it's childs
// Text nodes cannot be handled with dom methods
// It can be chained .childNodes[0].childNodes[0]
console.log(para[0].childNodes[0]); // Returns first text node
console.log(para[0].childNodes[1]); // Returns span
console.log(para[0].childNodes[2]); // Returns second text node

// Get the node type
console.log(para[0].childNodes[1].nodeType); // 1 means an element
console.log(para[0].childNodes[1].nodeName); // 1 means an element

// Get by id
var unique = document.getElementById('unique');
console.log(unique);
unique.style.color = "green";

// Get by Class name
var test = document.getElementsByClassName("test");
console.log(test);
test[0].style.color = "blue";
test[1].style.color = "blue";

// Query selector, similar to jQuery
// It will only select the child of .test
var span = document.querySelectorAll(".test .sp");
console.log(span);
span[0].style.color = "purple";

var abc = document.getElementsByName("abc");
abc[0].onkeyup = function(e){
	_id("txtAbc").innerHTML = e.key;
}

// Attributes
var link = _id("link");
console.log("Link has alt: " + link.hasAttribute("alt"));
link.setAttribute("alt", "test");
console.log("Link alt value: " + link.getAttribute("alt"));
console.log(link.attributes);

for(var i = 0; i < link.attributes.length; i++){
  console.log("Attribute ", i, " : ", link.attributes[i].nodeName, " : ", link.attributes[i].nodeValue);
}

// Add elements to page
var btn = document.createElement("button");
btn.setAttribute("id", "btnTest")
btn.innerHTML = "btnTest";
_id("main").appendChild(btn);

// To insert in an specific location
// _id("main").insertBefore(btn, _id("main").childNodes[0]);
