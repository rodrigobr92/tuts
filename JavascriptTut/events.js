// Helper function to getElement by ID
function _id(val) {
    return document.getElementById(val);
}

_id("btnClick").onclick = function() {
    this.style.border = "2px solid red";
    this.innerHTML = "Hey, you clicked me";
};

_id("btnDblClick").ondblclick = function() {
    this.style.border = "2px solid green";
    this.innerHTML = "Hey, double click. Nice!";
};

_id("btnMouseOverOut").onmouseover = function(e) {
    this.style.border = "2px solid blue";
    this.innerHTML = "Hey, nice mouse over. Stay.";
};

_id("btnMouseOverOut").onmouseout = function() {
    this.style.border = "2px solid lightblue";
    this.innerHTML = "Hey, you mouse out. Don't leave me.";
};

_id("btnMouseDownUp").onmousedown = function(e) {
    this.style.border = "2px solid purple";
    var downStamp = e.timeStamp;
    this.innerHTML = "Don't mouse down too strong man.";
};

_id("btnMouseDownUp").onmouseup = function() {
    this.style.border = "2px solid violet";
    this.innerHTML = "Bye now.";
};

var timer;
_id("btnMouseMove").onmousemove = function(e) {
    this.style.border = "2px solid lime";
    var now = new Date().getTime();
    this.innerHTML = "Stop moving.";

    clearTimeout(timer); // Make only the last one run
    timer = setTimeout(function() {
        _id("btnMouseMove").style.border = "2px solid yellow";
        _id("btnMouseMove").innerHTML = "Thanks";
    }, 300);
};

_id("mouseXY").onmousemove = function(e) {
    e = e || window.event;
    document.getElementById('mouseX').innerHTML = e.x;
    document.getElementById('mouseY').innerHTML = e.y;
    document.getElementById('clientX').innerHTML = e.clientX;
    document.getElementById('clientY').innerHTML = e.clientY;
    document.getElementById('layerX').innerHTML = e.layerX;
    document.getElementById('layerY').innerHTML = e.layerY;
    document.getElementById('movementX').innerHTML = e.movementX;
    document.getElementById('movementY').innerHTML = e.movementY;
    document.getElementById('offsetX').innerHTML = e.offsetX;
    document.getElementById('offsetY').innerHTML = e.offsetY;
    document.getElementById('pageX').innerHTML = e.pageX;
    document.getElementById('pageY').innerHTML = e.pageY;
    document.getElementById('screenX').innerHTML = e.screenX;
    document.getElementById('screenY').innerHTML = e.screenY;
};

_id("iptKeyUp").onkeyup = function(e) {
	_id("txtKeyUp").innerHTML = "onkeyup: " + e.key + "<br>Only after you let go the key";
};

_id("iptKeyDown").onkeydown = function(e) {
	_id("txtKeyDown").innerHTML = "onkeydown: " + e.key + "<br>Before you let go the key";
};

_id("iptKeyPress").onkeypress = function(e) {
	console.log(e);
	_id("txtKeyPress").innerHTML = "onkeypress: " + e.key + "<br>Doesn't get the special keys on e.key but on e.'special'Key";
	if (e.ctrlKey) {
		switch (e.key) {
			case ".": this.style.backgroundColor = "aqua"; break;
			case ",": this.style.backgroundColor = "lime"; break;
			case "/": this.style.backgroundColor = "white"; break;
		}
	}
};

_id("copyCutPaste").oncopy = function() {
    _id("ccp").innerHTML = "Copycat";
};

_id("copyCutPaste").oncut = function() {
    _id("ccp").innerHTML = "Samurai";
};

_id("copyCutPaste").onpaste = function() {
    _id("ccp").innerHTML = "Glue sniffer";
};

_id("iptBlur").onblur = function() {
    this.style.backgroundColor = "LemonChiffon";
    this.value = "This means you left."
};

_id("iptChange").onchange = function() {
    this.style.backgroundColor = "Coral";
    this.value = "Don't change what you don't know"
};

_id("iptFocus").onfocus = function() {
    this.style.backgroundColor = "LightCyan";
    this.value = "Focus on me"
};

_id("iptSelect").onselect = function(e) {
	console.log(e);
    this.value = this.value.slice(e.target.selectionStart, e.target.selectionEnd);
    this.style.backgroundColor = "SpringGreen";
};

_id("iptCombo").onfocus = function(e) {
    _id("txtCombo").innerHTML = "Keep focusing";
};

_id("iptCombo").onblur = function(e) {
    if (this.value.trim() == "That'll be fun") { // Change is activated on blur
        _id("txtCombo").innerHTML = "Blurred lines";
    }
};

_id("iptCombo").onchange = function() {
    this.style.backgroundColor = "cyan";
    _id("txtCombo").innerHTML = "You changed man...";
};

_id("iptCombo").onselect = function(e) {
    var selection = this.value.slice(e.target.selectionStart, e.target.selectionEnd);
    _id("txtCombo").innerHTML = "Why did you selected " + selection + "?";
};

_id("formEvents").onsubmit = function(e) {
	_id("iptSubmit").value = "I won't allow submition";
	return false;
};
