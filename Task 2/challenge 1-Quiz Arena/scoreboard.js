import { state } from "./state.js";

export function showScoreboard(){

    document.getElementById("quiz").style.display = "none";

    document.getElementById("scoreboard").style.display = "block";

    document.getElementById("finalScore").innerText =
        state.playerName + " Score: " +
        state.score + "/" +
        state.questions.length;

}