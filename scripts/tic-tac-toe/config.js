function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  //event.target.dataset["playerid"] will be the same
  //playerid is a property in html: data-playerid = "1"
  playerConfigOverlay.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlay.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  document.getElementById("username").value = ""; //clear inut before I type second name
}

function savePlayerConfig(event) {
  event.preventDefault(); //prevents sending a request automatically for browser, to use only JS
  const formData = new FormData(event.target);
  //new also creates an object, FormData extracts data from form, but only inputs that have NAME
  const enteredPlayerName = formData.get("playername").trim();
  //formData extracts specific data by label from object (by input name)
  //trim accesses white space and removes it, to check if our name is not a bunch of blanks

  if (!enteredPlayerName) {
    //same as if we write enteredPlayerName === ""
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name";
    return;
    //we stop execution here not to execute everything we write below the IF, in case of error
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig(); //close window after entering name
}
