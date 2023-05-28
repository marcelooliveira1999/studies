import { innerCurrentPlayer } from "./innerCurrentPlayer.js";
import { chooseWinner } from "./chooseWinner.js";

const boardRegions = document.querySelectorAll(".boardRegions");
let count = 0;

boardRegions.forEach((element) => {
  element.classList.add("playerHover");
  element.addEventListener("click", function addEventPlay() {
    count++;
    innerCurrentPlayer(element);
    chooseWinner(element);
    element.classList.add("disableRegion");
    element.classList.remove("playerHover");
    element.removeEventListener("click", addEventPlay);
  });
});

export { count };
