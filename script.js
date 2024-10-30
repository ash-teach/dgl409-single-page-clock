// script.js

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("time-display").textContent = timeString;
}

// Update the time immediately, then every second
updateTime();
setInterval(updateTime, 1000);
