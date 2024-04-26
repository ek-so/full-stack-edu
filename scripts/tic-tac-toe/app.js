let editedPlayer = 0;

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

const editPlayerOneButton = document.getElementById("edit-player-1");
const editPlayerTwoButton = document.getElementById("edit-player-2");
const cancelConfigElement = document.getElementById("cancel");

editPlayerOneButton.addEventListener("click", openPlayerConfig);
editPlayerTwoButton.addEventListener("click", openPlayerConfig);

cancelConfigElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig); //when form is submitted
