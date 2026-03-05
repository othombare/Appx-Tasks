import { state } from "./state.js";

import { initLobby } from "./lobby.js";

import { loadQuestions, showQuestion } from "./question.js";

import { startTimer, stopTimer } from "./timer.js";

import { showScoreboard } from "./scoreboard.js";



async function init(){

    initLobby();
    const startBtn = document.getElementById("startBtn");
    startBtn.disabled = true;
    startBtn.innerText = "Loading...";

    state.questions = await loadQuestions();

    startBtn.disabled = false;
    startBtn.innerText = "Start Quiz";

}

init();



document.addEventListener("quizStart", ()=>{

    document.getElementById("lobby").style.display = "none";

    showQuestion();

    startTimer();

});


document.addEventListener("nextQuestion", ()=>{

    stopTimer();

    state.currentQuestionIndex++;

    if(state.currentQuestionIndex <
        state.questions.length){

        showQuestion();

        startTimer();

    }
    else{

        showScoreboard();

    }

});
