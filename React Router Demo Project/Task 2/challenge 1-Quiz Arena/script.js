const state = {
    playerName: "",
    score: 0,
    currentQuestionIndex: 0,
    timeLeft: 10,
    questions: []
};

let interval = null;

function loadQuestions() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    text: "What is 2 + 2?",
                    options: ["2", "3", "4", "5"],
                    correct: "4"
                },
                {
                    text: "Capital of India?",
                    options: ["Mumbai", "Delhi", "Pune", "Chennai"],
                    correct: "Delhi"
                },
                {
                    text: "5 x 3 = ?",
                    options: ["10", "15", "20", "25"],
                    correct: "15"
                }
            ]);
        }, 1000);
    });
}

function showQuestion() {
    const quizDiv = document.getElementById("quiz");
    const playerName = document.getElementById("playerName");
    const questionText = document.getElementById("questionText");
    const optionsDiv = document.getElementById("options");
    const q = state.questions[state.currentQuestionIndex];

    quizDiv.style.display = "block";
    playerName.innerText = "Player: " + state.playerName;
    questionText.innerText = q.text;
    optionsDiv.innerHTML = "";

    q.options.forEach((option) => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = function () {
            checkAnswer(option);
        };
        optionsDiv.appendChild(btn);
        optionsDiv.appendChild(document.createElement("br"));
    });
}

function checkAnswer(selected) {
    const correct = state.questions[state.currentQuestionIndex].correct;
    if (selected === correct) {
        state.score++;
    }
    nextQuestion();
}

function startTimer() {
    state.timeLeft = 10;
    document.getElementById("timer").innerText = "Time: " + state.timeLeft;

    interval = setInterval(() => {
        state.timeLeft--;
        document.getElementById("timer").innerText = "Time: " + state.timeLeft;

        if (state.timeLeft <= 0) {
            stopTimer();
            nextQuestion();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function nextQuestion() {
    stopTimer();
    state.currentQuestionIndex++;

    if (state.currentQuestionIndex < state.questions.length) {
        showQuestion();
        startTimer();
        return;
    }

    showScoreboard();
}

function showScoreboard() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("scoreboard").style.display = "block";
    document.getElementById("finalScore").innerText =
        state.playerName + " Score: " + state.score + "/" + state.questions.length;
}

async function init() {
    const startBtn = document.getElementById("startBtn");
    const nameInput = document.getElementById("nameInput");

    startBtn.disabled = true;
    startBtn.innerText = "Loading...";

    state.questions = await loadQuestions();

    startBtn.disabled = false;
    startBtn.innerText = "Start Quiz";

    startBtn.onclick = function () {
        const name = nameInput.value.trim();
        if (name === "") {
            alert("Enter name");
            return;
        }

        state.playerName = name;
        document.getElementById("lobby").style.display = "none";
        showQuestion();
        startTimer();
    };
}

init();
