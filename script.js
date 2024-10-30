// script.js

// Function to display the current time
function displayCurrentTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("time-display").textContent = timeString;
}
setInterval(displayCurrentTime, 1000);

// Stopwatch logic
let stopwatchTime = 0; // in seconds
let stopwatchInterval = null;

// Get the stopwatch display and buttons
const stopwatchDisplay = document.querySelector(".timer-time");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");

// Format the time as H:MM:SS
function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Update the display with the formatted time
function updateStopwatchDisplay() {
  stopwatchDisplay.textContent = formatTime(stopwatchTime);
}

// Start the stopwatch
function startStopwatch() {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(() => {
      stopwatchTime++;
      updateStopwatchDisplay();
    }, 1000);
  }
}

// Stop the stopwatch
function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

// Reset the stopwatch
function resetStopwatch() {
  stopStopwatch();
  stopwatchTime = 0;
  updateStopwatchDisplay();
}

// Attach event listeners to buttons
startButton.addEventListener("click", startStopwatch);
stopButton.addEventListener("click", stopStopwatch);
resetButton.addEventListener("click", resetStopwatch);

// Initialize display on load
updateStopwatchDisplay();
