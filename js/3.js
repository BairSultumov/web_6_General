prompt("FFFF");
var a, b, c
a = Math.random() * 255
b = Math.random() * 255
c = Math.random() * 255
var w = Math.round(Math.random() * 200);
var h = Math.round(Math.random() * 200);
var d = document.getElementById("div1");
d.style.width = w + "px";
d.style.height = h + "px";
d.style.lineHeight = h + "px"
d.style.backgroundColor = rgb(a, b, c);
d.innerHTML = w * h;
alert(w * h)