/*
 *  Minesweeper Emoji
 *  Copyright (c) 2022 Michael Kolesidis
 *  GNU General Public License v3.0
 *
 * main.js contains the rest of the UI of the game,
 * anything that happens outside of the board. It
 * also handles the storage and the display of
 * the saved stats.
 */

/**
 * Data Storage
 */
// Level: beginner || intermediate || expert
let gameLevel = window.localStorage.getItem("level");
if (gameLevel === null) {
  window.localStorage.setItem("level", "beginner");
}

// Flower Mode
let isFlower = window.localStorage.getItem("flower");
if (isFlower === null) {
  window.localStorage.setItem("flower", "false");
}
let flower = JSON.parse(isFlower);

// Games Played
let beginnerPlayed = window.localStorage.getItem("beginnerPlayed");
if (beginnerPlayed === null) {
  window.localStorage.setItem("beginnerPlayed", "0");
}

let intermediatePlayed = window.localStorage.getItem("intermediatePlayed");
if (intermediatePlayed === null) {
  window.localStorage.setItem("intermediatePlayed", "0");
}

let expertPlayed = window.localStorage.getItem("expertPlayed");
if (expertPlayed === null) {
  window.localStorage.setItem("expertPlayed", "0");
}

// Games Won
let beginnerWon = window.localStorage.getItem("beginnerWon");
if (beginnerWon === null) {
  window.localStorage.setItem("beginnerWon", "0");
}

let intermediateWon = window.localStorage.getItem("intermediateWon");
if (intermediateWon === null) {
  window.localStorage.setItem("intermediateWon", "0");
}

let expertWon = window.localStorage.getItem("expertWon");
if (expertWon === null) {
  window.localStorage.setItem("expertWon", "0");
}

// Win Percentage
let beginnerWinPercentage = window.localStorage.getItem(
  "beginnerWinPercentage"
);
if (beginnerWinPercentage === null) {
  window.localStorage.setItem("beginnerWinPercentage", "");
}

let intermediateWinPercentage = window.localStorage.getItem(
  "intermediateWinPercentage"
);
if (intermediateWinPercentage === null) {
  window.localStorage.setItem("intermediateWinPercentage", "");
}

let expertWinPercentage = window.localStorage.getItem("expertWinPercentage");
if (expertWinPercentage === null) {
  window.localStorage.setItem("expertWinPercentage", "");
}

// Best Time
let beginnerBestTime = window.localStorage.getItem("beginnerBestTime");
if (beginnerBestTime === null) {
  window.localStorage.setItem("beginnerBestTime", "");
}

let intermediateBestTime = window.localStorage.getItem("intermediateBestTime");
if (intermediateBestTime === null) {
  window.localStorage.setItem("intermediateBestTime", "");
}

let expertBestTime = window.localStorage.getItem("expertBestTime");
if (expertBestTime === null) {
  window.localStorage.setItem("expertBestTime", "");
}

// Best Moves
let beginnerBestMoves = window.localStorage.getItem("beginnerBestMoves");
if (beginnerBestMoves === null) {
  window.localStorage.setItem("beginnerBestMoves", "");
}

let intermediateBestMoves = window.localStorage.getItem(
  "intermediateBestMoves"
);
if (intermediateBestMoves === null) {
  window.localStorage.setItem("intermediateBestMoves", "");
}

let expertBestMoves = window.localStorage.getItem("expertBestMoves");
if (expertBestMoves === null) {
  window.localStorage.setItem("expertBestMoves", "");
}

let won, played, winPercentage, bestTime, bestMoves;

switch (gameLevel) {
  case "beginner":
    played = beginnerPlayed;
    won = beginnerWon;
    winPercentage = beginnerWinPercentage;
    bestTime = beginnerBestTime;
    bestMoves = beginnerBestMoves;
    break;
  case "intermediate":
    played = intermediatePlayed;
    won = intermediateWon;
    winPercentage = intermediateWinPercentage;
    bestTime = intermediateBestTime;
    bestMoves = intermediateBestMoves;
    break;
  case "expert":
    played = expertPlayed;
    won = expertWon;
    winPercentage = expertWinPercentage;
    bestTime = expertBestTime;
    bestMoves = expertBestMoves;
    break;
}

/**
 * Basics
 */
// Title
if (flower) {
  document.title = `Flower Field Emoji`;
} else {
  document.title = `Minesweeper Emoji`;
}

// Favicon
if (flower) {
  const favicon =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  favicon.rel = "icon";
  favicon.href =
    "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌺</text></svg>";
  document.getElementsByTagName("head")[0].appendChild(favicon);
} else {
  const favicon =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  favicon.rel = "icon";
  favicon.href = "../assets/favicon.ico";
  document.getElementsByTagName("head")[0].appendChild(favicon);
}

/**
 * Elements
 */
// Header
const header = document.createElement("div");
header.className = `header`;
header.innerHTML =
  flower === true
    ? `<span style="--i:1">F</span>
<span style="--i:2">l</span>
<span style="--i:3">o</span>
<span style="--i:4">w</span>
<span style="--i:5">e</span>
<span style="--i:6">r</span>
<span style="--i:12">&nbsp;</span>
<span style="--i:7">F</span>
<span style="--i:8">i</span>
<span style="--i:9">e</span>
<span style="--i:9">l</span>
<span style="--i:9">d</span>
<span style="--i:12">&nbsp;</span>
<span style="--i:13">E</span>
<span style="--i:14">m</span>
<span style="--i:15">o</span>
<span style="--i:16">j</span>
<span style="--i:17">i</span>
`
    : `<span style="--i:1">M</span>
<span style="--i:2">i</span>
<span style="--i:3">n</span>
<span style="--i:4">e</span>
<span style="--i:5">s</span>
<span style="--i:6">w</span>
<span style="--i:7">e</span>
<span style="--i:8">e</span>
<span style="--i:9">p</span>
<span style="--i:10">e</span>
<span style="--i:11">r</span>
<span style="--i:12">&nbsp;</span>
<span style="--i:13">E</span>
<span style="--i:14">m</span>
<span style="--i:15">o</span>
<span style="--i:16">j</span>
<span style="--i:17">i</span>`;
header.style.fontSize = "40px";
document.body.appendChild(header);

// Board
const board = document.createElement("div");
board.setAttribute("id", "board");
document.body.appendChild(board);

// Buttons and Messages Container
const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);

// New Game Button
const newGame = document.createElement("button");
newGame.setAttribute("id", "reload");
newGame.innerHTML = `New Game`;
container.appendChild(newGame);

// Stats Button
const statsButton = document.createElement("button");
statsButton.setAttribute("id", "stats-button");
statsButton.innerHTML = `Stats`;
container.appendChild(statsButton);

// Stats Panel
const statsPanel = document.createElement("div");
statsPanel.setAttribute("id", "stats-panel");

// Stats: Level
statsPanel.innerHTML += `<p class="level">${
  gameLevel.charAt(0).toUpperCase() + gameLevel.slice(1)
}</p>`;

// Stats: Played
statsPanel.innerHTML += `<p class="label">Played</p>`;
if (played) {
  statsPanel.innerHTML += `<p class="value">${played}</p>`;
} else {
  statsPanel.innerHTML += `<p class="value">0</p>`;
}

// Stats: Won
statsPanel.innerHTML += `<p class="label">Won</p>`;
if (won) {
  statsPanel.innerHTML += `<p class="value">${won}</p>`;
} else {
  statsPanel.innerHTML += `<p class="value">0</p>`;
}

// Stats: Win percentage
statsPanel.innerHTML += `<p class="label">Win %</p>`;
if (winPercentage) {
  statsPanel.innerHTML += `<p class="value">${(winPercentage * 100).toFixed(
    2
  )}</p>`;
} else {
  statsPanel.innerHTML += `<p class="value">N/A</p>`;
}

// Stats: Best Time
statsPanel.innerHTML += `<p class="label">Best Time</p>`;
if (bestTime) {
  statsPanel.innerHTML += `<p class="value">${bestTime}</p>`;
} else {
  statsPanel.innerHTML += `<p class="value">N/A</p>`;
}

// Stats: Clear Data Button
const clearDataButton = document.createElement("button");
clearDataButton.innerHTML = `Clear Data`;
statsPanel.appendChild(clearDataButton);

container.appendChild(statsPanel);

// Footer
const footer = document.createElement("footer");
footer.innerHTML = `<a href="https://github.com/michaelkolesidis/minesweeper-emoji" target="_blank" rel="noopener"><img src="../assets/m.svg"/></a>`;
document.body.appendChild(footer);

/**
 * Button Functionality
 */
// Reload button functionality
function reload() {
  const reload = document.querySelector("#reload");
  reload.addEventListener("click", () => {
    window.location.reload();
  });
}
reload();

// Stats Button Functionality
let statsPanelOpen = false;
statsButton.addEventListener("click", () => {
  if (statsPanelOpen) {
    statsPanel.style.opacity = 0;
    statsPanelOpen = false;
  } else if (!statsPanelOpen) {
    statsPanel.style.opacity = 1;
    statsPanelOpen = true;
  }
});

// Clear Data Button Functionality
clearDataButton.addEventListener("click", () => {
  window.localStorage.clear();
  window.location.reload();
});

/**
 * New Best Time Message Functionality
 */
// let newBestTimeValue = false;

// const showMessage = () => {
//   newBestTimeValue = localStorage.getItem("newBestTime");

//   if (newBestTimeValue === "true") {
//     const message = document.createElement("div");
//     message.setAttribute("id", "message");
//     message.innerHTML += `New<br>Best!`;
//     container.appendChild(message);
//     newBestTimeValue = false;
//     console.log("i'm here");
//     localStorage.setItem("newBestTime", "false");
//   }

//   requestAnimationFrame(showMessage);
// };

// showMessage();

// ========================

// let gameSettings = {
//   level: "beginner",
//   flowerMode: false,
// };

// let gameData = {
//   beginner: {
//     played: 0,
//     won: 0,
//     winPercentage: 0,
//     bestTime: null,
//     bestMoves: null,
//   },
//   intermediate: {
//     played: 0,
//     won: 0,
//     winPercentage: 0,
//     bestTime: null,
//     bestMoves: null,
//   },
//   expert: {
//     played: 0,
//     won: 0,
//     winPercentage: 0,
//     bestTime: null,
//     bestMoves: null,
//   },
// };
