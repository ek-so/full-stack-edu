const backdropElement = document.getElementById("backdrop");
const playerConfigOverlay = document.getElementById("modal-inner");

const editPlayerOneButton = document.getElementById("edit-player-one");
const editPlayerTwoButton = document.getElementById("edit-player-two");
const cancelConfigElement = document.getElementById("cancel");

editPlayerOneButton.addEventListener("click", openPlayerConfig);
editPlayerTwoButton.addEventListener("click", openPlayerConfig);
cancelConfigElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);
