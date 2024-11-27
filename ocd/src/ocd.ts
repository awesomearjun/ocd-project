import "./ocd.css";

let toggle = document.querySelector("#toggle");

let bufferZone = 10
let maxToggleX = window.innerWidth - toggle.offsetWidth - bufferZone;
let maxToggleY = window.innerHeight - toggle.offsetHeight - bufferZone;
let toggleX: number = Math.floor(Math.random() * maxToggleX);
let toggleY: number = Math.floor(Math.random() * maxToggleY);

toggle.style.setProperty("--Xpos", toggleX + "px");
toggle.style.setProperty("--Ypos", toggleY + "px");

console.log(toggleX);
console.log(toggleY);
