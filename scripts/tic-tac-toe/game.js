function resetGameStatus() {
  activePlayer = 0;
  currentRound = 1;
  gameOverElement.firstElementChild.innerHTML =
    'You won, <span id="winner-player-name">Player name</span>!';
  gameOverElement.style.display = "none";
  console.log("done");

  let itemIndex = 0;

  for (let i = 1; i < 3; i++) {
    for (let j = 1; j < 3; j++) {
      gameData[i][j] = 0;
      const gameBoardItem = gameBoardElement.children[itemIndex];
      console.log(gameBoardItem);
      gameBoardItem.textContent = "";
      gameBoardItem.className = "";
      itemIndex++;
    }
  }
}

function startNewGame() {
  resetGameStatus();

  if (players[0].name === "" || players[1].name === "") {
    alert("Please set names for both players!");
    return;
  }

  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function checkForGameOver() {
  //checking rows:
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0]; //returns winner ID
    }
  }

  //checking columns:
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
  //checking diagonals:
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1; //it is a draw
  }
  return 0; //signals that we don't have a winner yet
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
}

function selectGameField(event) {
  //main function to click cells and check everything
  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Please select an empty field");
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  //access different players in array, and put thier symbols into cells
  selectedField.classList.add("disabled");
  //add disabled class after selecting

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  activePlayerNameElement.textContent = players[activePlayer].name;

  const winnerId = checkForGameOver();

  if (winnerId !== 0) {
    endGame(winnerId);
  }

  currentRound++; //switches to the next round
  switchPlayer();
}

function endGame(winnerID) {
  gameOverElement.style.display = "block";
  if (winnerID > 0) {
    const winnerName = players[winnerID - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent =
      winnerName;
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw!";
  }
}
