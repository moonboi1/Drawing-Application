function black() {
  context.strokeStyle = "black";
}
function sky() {
  context.strokeStyle = "paleturquoise";
}
function purple() {
  context.strokeStyle = "plum";
}
function darkpink() {
  context.strokeStyle = "palevioletred";
}
function pink() {
  context.strokeStyle = "pink";
}
function pgreen() {
  context.strokeStyle = "palegreen";
}
function green() {
  context.strokeStyle = "green";
}
function ygreen() {
  context.strokeStyle = "yellowgreen";
}
function yellow() {
  context.strokeStyle = "yellow";
}
function blue() {
  context.strokeStyle = "blue";
}
function red() {
  context.strokeStyle = "red";
}
function mint() {
  context.strokeStyle = "rgb(104, 245, 198)";
}
function lblue() {
  context.strokeStyle = "rgb(0, 212, 240)";
}
function grey() {
  context.strokeStyle = "rgb(190, 190, 190)";
}
function brown() {
  context.strokeStyle = "rgb(131, 62, 62)";
}
function orange() {
  context.strokeStyle = "orange";
}
function eraser() {
  context.strokeStyle = "white";
}

function save() {
  if (typeof localStorage != null) {
    localStorage.setItem("imageCanvas", canvas.toDataURL());
  } else {
    window.alert("Your browser does not support local storage");
  }
}

document.getElementById("thickness").addEventListener("input", slider);
function slider() {
  context.lineWidth = document.getElementById("thickness").value;
}
function a() {
  var canvas = document.getElementById("canvas");
  canvas.height = window.innerHeight - 220;
  canvas.width = window.innerWidth - 4;
}
a();
var context = document.getElementById("canvas").getContext("2d");
if(localStorage.getItem("imageCanvas") != null){
  var image = new Image();
  image.onload = function(){
      context.drawImage(image,0,0);
  }
  image.src = localStorage.getItem("imageCanvas");
};
window.addEventListener("resize", a);
var paint = false;
function startDraw() {
  paint = true;
}
function endDraw() {
  paint = false;
  context.beginPath();
}
function draw(event) {
  if (!paint) return;
  context.lineCap = "round";
  context.lineTo(event.clientX, event.clientY);
  context.stroke();
  context.beginPath();
  context.moveTo(event.clientX, event.clientY);
}

document.getElementById("canvas").addEventListener("mousedown", startDraw);
document.getElementById("canvas").addEventListener("mouseup", endDraw);
document.getElementById("canvas").addEventListener("mousemove", draw);
