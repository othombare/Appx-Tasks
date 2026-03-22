import { state } from "./state.js";

let interval;


export function startTimer(){

    state.timeLeft = 10;

    document.getElementById("timer").innerText =
        "Time: " + state.timeLeft;

    interval = setInterval(()=>{

        state.timeLeft--;

        document.getElementById("timer").innerText =
            "Time: " + state.timeLeft;

        if(state.timeLeft <= 0){

            clearInterval(interval);

            document.dispatchEvent(new Event("nextQuestion"));

        }

    },1000);

}


export function stopTimer(){

    clearInterval(interval);

}