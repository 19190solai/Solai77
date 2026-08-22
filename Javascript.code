const questions = [
    {
        question: "What is the capital of India?",
        answers: [
            { text: "Chennai", correct: false },
            { text: "New Delhi", correct: true },
            { text: "Mumbai", correct: false },
            { text: "Kolkata", correct: false }
        ]
    },
    {
        question: "Which language is used to create web pages?",
        answers: [
            { text: "HTML", correct: true },
            { text: "Python", correct: false },
            { text: "C++", correct: false },
            { text: "Java", correct: false }
        ]
    },
    {
        question: "Which language is used for web page styling?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "JavaScript", correct: false },
            { text: "Python", correct: false }
        ]
    },
    {
        question: "Which language is used to add interactivity to a webpage?",
        answers: [
            { text: "CSS", correct: false },
            { text: "HTML", correct: false },
            { text: "JavaScript", correct: true },
            { text: "SQL", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quizElement = document.getElementById("quiz");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none";
    resultElement.classList.add("hide");
    quizElement.classList.remove("hide");

    showQuestion();
}

function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText =
        (currentQuestionIndex + 1) + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");

        button.innerText = answer.text;
        button.classList.add("answer-btn");

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);

        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";

    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(event) {
    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("wrong");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }

        button.disabled = true;
    });

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizElement.classList.add("hide");
    resultElement.classList.remove("hide");

    scoreElement.innerText =
        "Your Score: " + score + " / " + questions.length;
}

function restartQuiz() {
    startQuiz();
}

startQuiz();
