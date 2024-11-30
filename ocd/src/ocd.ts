import "./ocd.css";

let toggle: HTMLDivElement | null = document.querySelector("#toggleRadius") as HTMLDivElement;
let toggleButton: Element | null = document.querySelector("#toggle") as HTMLButtonElement;

let bufferZone = 10
let maxToggleX = window.innerWidth - toggle.offsetWidth - bufferZone;
let maxToggleY = window.innerHeight - toggle.offsetHeight - bufferZone;
let toggleX: number = Math.floor(Math.random() * maxToggleX);
let toggleY: number = Math.floor(Math.random() * maxToggleY);
let clicked: boolean = false;

toggle.style.setProperty("--Xpos", toggleX + "px");
toggle.style.setProperty("--Ypos", toggleY + "px");

console.log(toggleX);
console.log(toggleY);

toggle!.addEventListener("mouseover", event => {
    toggleButton!.style.visibility = "visible";
});

toggleButton.addEventListener("click", event => {
    document.querySelector("#content")!.style.visibility = "visible";
    document.documentElement.style.setProperty("--background", "#242424");
    toggleButton.remove();
    clicked = true;
});

let search = document.querySelector("#search");
let searchPlaceholder = document.querySelector("#searchPlaceholder");
let secret = document.querySelector("#secret");

secret?.addEventListener("click", event => {
    secret.textContent = "drag me to the ALL the way to the bottom, exactly the way i like it ^-^";
});

search?.addEventListener("dragover", event => {
    event.preventDefault();
});

search?.addEventListener("drop", event => {
    searchPlaceholder?.remove();
    location.replace("./mental.html");
});