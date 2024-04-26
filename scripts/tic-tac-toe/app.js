const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const backdropElement = document.getElementById("backdrop");
const playerConfigOverlay = document.getElementById("modal-inner");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const gameAreaElement = document.getElementById("game");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");

const editPlayerOneButton = document.getElementById("edit-player-1");
const editPlayerTwoButton = document.getElementById("edit-player-2");
const cancelConfigElement = document.getElementById("cancel");
const startNewGameButton = document.getElementById("start-new-game");
const gameFieldElements = document.querySelectorAll("#game-board li"); //important to use ALL to select all elements
const gameBoardElement = document.getElementById("game-board"); //we can select the whole list insetad

editPlayerOneButton.addEventListener("click", openPlayerConfig);
editPlayerTwoButton.addEventListener("click", openPlayerConfig);

cancelConfigElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig); //when form is submitted

startNewGameButton.addEventListener("click", startNewGame);

for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField);
}

// gameBoardElement.addEventListener("click", selectGameField);
