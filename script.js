// Constant Variables //
const timerDisplay = document.querySelector("#timerDisplay");
const statusP = document.querySelector("#status");
const startButton = document.querySelector("#startButton");
const lapButton = document.querySelector("#lapButton");
const resetButton = document.querySelector("#resetButton");
const lapRecords = document.querySelector("#lapRecords");
const lapsBody = document.querySelector("tbody");
// Constant Variables //


// Helper Variables //
let enabled = false;
let watchTime = 0;
// Helper Variables //


// Start Flow //
function startEnable () {
    startButton.classList.remove("startButtonInactive");
    startButton.classList.add("startButtonActive");
    startButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z" stroke="rgb(244, 192, 37)" stroke-width="1.5"></path> <path d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z" stroke="rgb(244, 192, 37)" stroke-width="1.5"></path> </g></svg>Pause';

    timerDisplay.classList.remove("timerInactive");
    timerDisplay.classList.add("timerActive");
    statusP.innerHTML = "Running";
    statusP.style.color = "rgb(36, 181, 88)";
    lapButton.disabled = false;
    resetButton.disabled = false;
}
// Start Flow //


// End Flow //
function startDisable () {
    startButton.classList.remove("startButtonActive");
    startButton.classList.add("startButtonInactive");
    startButton.innerHTML = '<svg fill="black" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 576.555 576.555" xml:space="preserve" stroke="black"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M122.55,560.23c10.876,10.204,25.07,15.824,39.965,15.824c14.448,0,28.33-5.403,39.086-15.216l251.715-229.607 c12.049-10.99,18.959-26.647,18.959-42.954c0-16.309-6.91-31.964-18.959-42.954L201.602,15.716 C190.845,5.904,176.964,0.5,162.515,0.5c-14.896,0-29.089,5.619-39.965,15.823c-5.68,5.329-10.155,11.63-13.3,18.727 c-3.298,7.442-4.97,15.389-4.97,23.62v459.214c0,8.231,1.672,16.179,4.971,23.621C112.396,548.603,116.871,554.902,122.55,560.23 z M147.121,58.67c0-9.17,7.511-15.33,15.395-15.33c3.546,0,7.169,1.247,10.216,4.026l251.714,229.607 c6.651,6.068,6.651,16.54,0,22.607L172.731,529.188c-3.048,2.78-6.669,4.026-10.216,4.026c-7.883,0-15.396-6.161-15.396-15.33 L147.121,58.67L147.121,58.67z"></path> <path d="M162.515,576.555c-15.022,0-29.337-5.668-40.307-15.96c-5.729-5.374-10.242-11.729-13.415-18.888 c-3.327-7.506-5.014-15.521-5.014-23.823V58.67c0-8.301,1.687-16.316,5.013-23.822c3.172-7.159,7.686-13.514,13.415-18.889 C133.177,5.667,147.492,0,162.515,0c14.574,0,28.575,5.45,39.424,15.346l251.714,229.607 c12.152,11.085,19.122,26.875,19.122,43.324s-6.97,32.239-19.122,43.323L201.938,561.208 C191.09,571.104,177.089,576.555,162.515,576.555z M162.515,1c-14.769,0-28.84,5.571-39.624,15.688 c-5.63,5.283-10.066,11.529-13.185,18.565c-3.27,7.378-4.927,15.256-4.927,23.417v459.214c0,8.161,1.658,16.04,4.928,23.419 c3.118,7.035,7.554,13.28,13.185,18.563c10.784,10.117,24.855,15.688,39.623,15.688c14.324,0,28.085-5.357,38.749-15.085 l251.715-229.607c11.945-10.896,18.796-26.417,18.796-42.585c0-16.167-6.851-31.689-18.796-42.584L201.265,16.085 C190.601,6.357,176.839,1,162.515,1z M162.515,533.715c-7.645,0-15.896-6.053-15.896-15.83V58.67 c0.001-9.778,8.252-15.83,15.896-15.83c3.923,0,7.572,1.438,10.553,4.157l251.714,229.607c3.274,2.987,5.151,7.242,5.151,11.674 c0,4.432-1.878,8.686-5.151,11.672L173.068,529.558C170.087,532.277,166.438,533.715,162.515,533.715z M147.62,58.67v459.215 c0,9.16,7.732,14.83,14.896,14.83c3.669,0,7.085-1.347,9.879-3.896l251.714-229.608c3.066-2.798,4.825-6.783,4.825-10.934 c0-4.152-1.759-8.137-4.825-10.935L172.395,47.736c-2.794-2.549-6.21-3.896-9.879-3.896 C153.192,43.84,147.621,51.38,147.62,58.67L147.62,58.67z"></path> </g> </g> </g> </g></svg>Start';
    lapButton.disabled = true;

    timerDisplay.classList.remove("timerActive");
    timerDisplay.classList.add("timerInactive");
    statusP.innerHTML = "Paused";
    statusP.style.color = "rgb(244, 192, 37)";
}
// End Flow //


// Start Event Handler //
startButton.addEventListener("click", () => {
    if (!enabled) {
        startEnable();
        enabled = true;
        counter();
    } else {
        startDisable();
        enabled = false;
    }
});
// Start Event Handler //


// Time Parsing Helper Function //
function parseTime (time) {
    return `${String(Math.trunc(time / 6000)).padStart(2, "0")}:${String(Math.trunc(time / 100)).padStart(2, "0")}:${String(time % 100).padStart(2, "0")}`;
}
// Time Parsing Helper Function //


// Recursive Counting Function //
function counter () {
    if (enabled) {
        timerDisplay.innerHTML = parseTime(watchTime);
        setTimeout(() => {
            watchTime++;
            counter();
        }, 10);
    }
}
// Recursive Counting Function //


// Reset Button Handler //
resetButton.addEventListener("click", () => {
    enabled = false;
    startDisable();

    watchTime = 0;
    timerDisplay.innerHTML = "00:00.00";

    timerDisplay.classList.remove("timerActive");
    timerDisplay.classList.remove("timerInactive");

    statusP.innerHTML = "Ready";
    statusP.style.color = "rgb(143, 150, 163)";

    lapRecords.classList.remove("tableVisible");
    lapRecords.classList.add("tableHidden");

    lapsBody.innerHTML = "";

    resetButton.disabled = true;
});
// Reset Button Handler //


// Lap Button Handler //
lapButton.addEventListener("click", () => {
    lapRecords.classList.remove("tableHidden");
    lapRecords.classList.add("tableVisible");

    let row = document.createElement("tr");
    let lapTime;
    if (lapsBody.children.length !== 0) {
        lapTime = watchTime - Number(lapsBody.children[0].dataset.lapTime);
    } else {
        lapTime = 0;
    }

    row.dataset.lapTime = watchTime;
    row.innerHTML = `<td>#${lapsBody.children.length + 1}</td><td>${parseTime(lapTime)}</td><td>${parseTime(watchTime)}</td>`;

    lapsBody.prepend(row);
});
// Lap Button Handler //