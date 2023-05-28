import { count } from "./main.js";

const innerCurrentPlayer = (currentPlay) => {
  if (count % 2 !== 0) {
    currentPlay.innerText = "X";
  } else {
    currentPlay.innerText = "O";
  }
};

export { innerCurrentPlayer };
