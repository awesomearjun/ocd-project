import "./mental.css";

let transition: number = 1;
let green: number = 255;
let blue: number = 255;

setInterval(() => {
    green -= transition;
    blue -= transition
    document.querySelector("#special").style.color = `rgb(255, ${green}, ${blue})`;
}, 800);
