import { count } from "./main.js";
import { winner } from "./chooseWinner.js";

const reloadGame = () => {
  setTimeout(() => {
    location.reload();
  }, 3000);
};

const restartGame = () => {
  if (winner === 1) {
    alert("X VENCEU");
    reloadGame();

    return;
  }

  if (winner === 2) {
    alert("O VENCEU");
    reloadGame();

    return;
  }
};

export { restartGame, reloadGame };
