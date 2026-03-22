import { state } from "./state.js";


// Load questions async
export async function loadQuestions(){

    return new Promise((resolve)=>{

        setTimeout(()=>{

            resolve([

                {
                    text: "What is 2 + 2?",
                    options: ["2","3","4","5"],
                    correct: "4"
                },

                {
                    text: "Capital of India?",
                    options: ["Mumbai","Delhi","Pune","Chennai"],
                    correct: "Delhi"
                },

                {
                    text: "5 x 3 = ?",
                    options: ["10","15","20","25"],
                    correct: "15"
                }

            ]);

        },1000);

    });

}


// Show question
export function showQuestion(){

    const quizDiv = document.getElementById("quiz");

    quizDiv.style.display = "block";

    document.getElementById("playerName").innerText =
        "Player: " + state.playerName;

    const q = state.questions[state.currentQuestionIndex];

    document.getElementById("questionText").innerText = q.text;

    const optionsDiv = document.getElementById("options");

    optionsDiv.innerHTML = "";

    q.options.forEach(option => {

        const btn = document.createElement("button");

        btn.innerText = option;

        btn.onclick = function(){

            checkAnswer(option);

        };

        optionsDiv.appendChild(btn);

        optionsDiv.appendChild(document.createElement("br"));

    });

}


// Check answer
function checkAnswer(selected){

    const correct =
        state.questions[state.currentQuestionIndex].correct;

    if(selected == correct){

        state.score++;

    }

    document.dispatchEvent(new Event("nextQuestion"));

}