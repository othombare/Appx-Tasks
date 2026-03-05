import { state } from "./state.js";

export function initLobby(){

    document.getElementById("startBtn").onclick = function(){

        const name = document.getElementById("nameInput").value;

        if(name == ""){
            alert("Enter name");
            return;
        }

        state.playerName = name;
        if(state.questions.length === 0){
            alert("Questions are still loading. Please wait.");
            return;
        }

        document.dispatchEvent(new Event("quizStart"));

    };

}
