// ==========================================
// தமிழ் வினாடி வினா - script.js
// ==========================================

// வினாக்கள்
const questions = [

    {
        question: "தமிழ் மொழியின் மிகப் பழமையான இலக்கண நூல் எது?",
        options: [
            "தொல்காப்பியம்",
            "நன்னூல்",
            "திருக்குறள்",
            "சிலப்பதிகாரம்"
        ],
        answer: 0
    },

    {
        question: "திருக்குறளை இயற்றியவர் யார்?",
        options: [
            "கம்பர்",
            "திருவள்ளுவர்",
            "இளங்கோவடிகள்",
            "சீத்தலைச் சாத்தனார்"
        ],
        answer: 1
    },

    {
        question: "தமிழின் ஐம்பெரும் காப்பியங்களில் ஒன்று எது?",
        options: [
            "திருக்குறள்",
            "நாலடியார்",
            "சிலப்பதிகாரம்",
            "ஆத்திசூடி"
        ],
        answer: 2
    },

    {
        question: "சிலப்பதிகாரத்தை இயற்றியவர் யார்?",
        options: [
            "இளங்கோவடிகள்",
            "கம்பர்",
            "சேக்கிழார்",
            "திருவள்ளுவர்"
        ],
        answer: 0
    },

    {
        question: "கம்பரால் இயற்றப்பட்ட காப்பியம் எது?",
        options: [
            "மணிமேகலை",
            "கம்பராமாயணம்",
            "பெரியபுராணம்",
            "சீவகசிந்தாமணி"
        ],
        answer: 1
    },

    {
        question: "தமிழில் 'அறம்' பற்றிக் கூறும் சிறந்த நூல் எது?",
        options: [
            "திருக்குறள்",
            "கலித்தொகை",
            "பட்டினப்பாலை",
            "முல்லைப்பாட்டு"
        ],
        answer: 0
    },

    {
        question: "தொல்காப்பியம் எத்தனை அதிகாரங்களைக் கொண்டது?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        answer: 1
    },

    {
        question: "தமிழின் முதல் எழுத்து எது?",
        options: [
            "அ",
            "ஆ",
            "இ",
            "உ"
        ],
        answer: 0
    },

    {
        question: "தமிழில் உயிரெழுத்துகள் எத்தனை?",
        options: [
            "10",
            "12",
            "18",
            "216"
        ],
        answer: 1
    },

    {
        question: "தமிழில் மெய்யெழுத்துகள் எத்தனை?",
        options: [
            "12",
            "18",
            "216",
            "247"
        ],
        answer: 1
    }

];


// ==========================================
// மாறிகள்
// ==========================================

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let timeLeft = 60;
let timer;


// ==========================================
// HTML பகுதிகளைப் பெறுதல்
// ==========================================

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const timerElement = document.getElementById("timer");


// ==========================================
// வினாவைக் காட்டுதல்
// ==========================================

function showQuestion() {

    selectedAnswer = null;

    const q = questions[currentQuestion];

    questionElement.textContent =
        (currentQuestion + 1) + ". " + q.question;

    optionsElement.innerHTML = "";

    q.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.textContent =
            String.fromCharCode(65 + index) + ") " + option;

        button.className = "option";

        button.onclick = function () {
            selectAnswer(index, button);
        };

        optionsElement.appendChild(button);

    });

    nextButton.style.display = "none";

    startTimer();
}


// ==========================================
// விடையைத் தேர்வு செய்தல்
// ==========================================

function selectAnswer(index, button) {

    if (selectedAnswer !== null) {
        return;
    }

    selectedAnswer = index;

    const correctAnswer = questions[currentQuestion].answer;

    const allButtons =
        optionsElement.querySelectorAll(".option");

    allButtons.forEach(btn => {
        btn.disabled = true;
    });

    // சரியான விடை
    if (index === correctAnswer) {

        score++;

        button.classList.add("correct");

    } else {

        // தவறான விடை
        button.classList.add("wrong");

        // சரியான விடையை காட்டுதல்
        allButtons[correctAnswer].classList.add("correct");

    }

    clearInterval(timer);

    nextButton.style.display = "block";

    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = "முடிவைக் காண்க";
    } else {
        nextButton.textContent = "அடுத்த வினா";
    }

}


// ==========================================
// அடுத்த வினா
// ==========================================

nextButton.onclick = function () {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();

    }

};


// ==========================================
// Timer
// ==========================================

function startTimer() {

    clearInterval(timer);

    timeLeft = 60;

    updateTimer();

    timer = setInterval(function () {

        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {

            clearInterval(timer);

            // விடை தேர்வு செய்யாமல் நேரம் முடிந்தால்
            if (selectedAnswer === null) {

                const correctAnswer =
                    questions[currentQuestion].answer;

                const allButtons =
                    optionsElement.querySelectorAll(".option");

                allButtons.forEach(btn => {
                    btn.disabled = true;
                });

                allButtons[correctAnswer].classList.add("correct");

                selectedAnswer = -1;

                nextButton.style.display = "block";

                if (currentQuestion === questions.length - 1) {
                    nextButton.textContent = "முடிவைக் காண்க";
                } else {
                    nextButton.textContent = "அடுத்த வினா";
                }

            }

        }

    }, 1000);

}


// ==========================================
// Timer-ஐக் காட்டுதல்
// ==========================================

function updateTimer() {

    if (timerElement) {

        timerElement.textContent =
            "நேரம்: " + timeLeft + " விநாடிகள்";

    }

}


// ==========================================
// இறுதி முடிவு
// ==========================================

function showResult() {

    clearInterval(timer);

    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    nextButton.style.display = "none";

    if (timerElement) {
        timerElement.style.display = "none";
    }

    resultElement.style.display = "block";

    const percentage =
        Math.round((score / questions.length) * 100);

    resultElement.innerHTML =

        "<h2>🎉 தேர்வு முடிந்தது!</h2>" +

        "<h3>உங்கள் மதிப்பெண்</h3>" +

        "<p>" +
        score + " / " + questions.length +
        "</p>" +

        "<p>" +
        "சதவீதம்: " + percentage + "%" +
        "</p>";

}


// ==========================================
// தேர்வைத் தொடங்குதல்
// ==========================================

showQuestion();
