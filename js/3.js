prompt("FFFF");
var w = Math.round(Math.random() * 200);
var h = Math.round(Math.random() * 200);
var d = document.getElementById("div1");
d.style.width = w + "px";
d.style.height = h + "px";
d.style.lineHeight = h + "px"
d.innerHTML = w * h;
alert(w * h)