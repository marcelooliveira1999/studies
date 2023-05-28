import { count } from "./main.js";
import { restartGame, reloadGame } from "./restartGame.js";

const combinationsWinners = [
  // Rows
  [0, 1, 2, 0, 0, 0],
  [0, 1, 2, 1, 1, 1],
  [0, 1, 2, 2, 2, 2],
  // Columns
  [0, 0, 0, 0, 1, 2],
  [1, 1, 1, 0, 1, 2],
  [2, 2, 2, 0, 1, 2],
  // Diagonals
  [0, 1, 2, 0, 1, 2],
  [2, 1, 0, 0, 1, 2],
];

const combinationsPlayers = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let winner = null;
const chooseWinner = (element) => {
  let x = element.getAttribute("data-row");
  let y = element.getAttribute("data-column");

  if (count % 2 !== 0) {
    combinationsPlayers[x][y] = "X";
  } else {
    combinationsPlayers[x][y] = "O";
  }

  for (let i = 0; i < 8; i++) {
    const [a, b, c, d, e, f] = combinationsWinners[i];

    if (combinationsPlayers[a][d] === "X" && combinationsPlayers[b][e] === "X" && combinationsPlayers[c][f] === "X") {
      winner = 1;

      restartGame();
    } else if (combinationsPlayers[a][d] === "O" && combinationsPlayers[b][e] === "O" && combinationsPlayers[c][f] === "O") {
      winner = 2;

      restartGame();
    }
  }

  if (count >= 9 && winner === null) {
    alert("EMPATE");
    reloadGame();

    return;
  }
};

export { chooseWinner, winner };
