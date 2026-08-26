// ===============================
// தமிழ் வினாடி வினா - script.js
// ===============================

// கேள்விகள்
const questions = [
    {
        question: "தமிழ் மொழியின் மிகப் பழமையான இலக்கண நூல் எது?",
        options: [
            "தொல்காப்பியம்",
            "நன்னூல்",
            "சிலப்பதிகாரம்",
            "திருக்குறள்"
        ],
        answer: 0
    },

    {
        question: "திருக்குறளை இயற்றியவர் யார்?",
        options: [
            "கம்பர்",
            "திருவள்ளுவர்",
            "இளங்கோவடிகள்",
            "ஔவையார்"
        ],
        answer: 1
    },

    {
        question: "சிலப்பதிகாரத்தின் ஆசிரியர் யார்?",
        options: [
            "சீத்தலைச் சாத்தனார்",
            "கம்பர்",
            "இளங்கோவடிகள்",
            "திருவள்ளுவர்"
        ],
        answer: 2
    },

    {
        question: "மணிமேகலையை இயற்றியவர் யார்?",
        options: [
            "சீத்தலைச் சாத்தனார்",
            "இளங்கோவடிகள்",
            "கம்பர்",
            "பாரதியார்"
        ],
        answer: 0
    },

    {
        question: "தமிழின் ஐம்பெரும் காப்பியங்களில் ஒன்று எது?",
        options: [
            "திருக்குறள்",
            "சிலப்பதிகாரம்",
            "நன்னூல்",
            "தொல்காப்பியம்"
        ],
        answer: 1
    },

    {
        question: "‘யாதும் ஊரே யாவரும் கேளிர்’ என்று பாடியவர் யார்?",
        options: [
            "கணியன் பூங்குன்றனார்",
            "கபிலர்",
            "பரணர்",
            "அவ்வையார்"
        ],
        answer: 0
    },

    {
        question: "தமிழின் முதல் இலக்கண நூல் எது?",
        options: [
            "நன்னூல்",
            "தொல்காப்பியம்",
            "யாப்பருங்கலம்",
            "திருக்குறள்"
        ],
        answer: 1
    },

    {
        question: "‘தமிழ்த்தாத்தா’ என்று அழைக்கப்படுபவர் யார்?",
        options: [
            "உ.வே.சாமிநாதையர்",
            "பாரதியார்",
            "பாரதிதாசன்",
            "கம்பர்"
        ],
        answer: 0
    },

    {
        question: "தேசியக் கவிஞர் என்று போற்றப்படுபவர் யார்?",
        options: [
            "பாரதிதாசன்",
            "சுப்பிரமணிய பாரதியார்",
            "கண்ணதாசன்",
            "கவிமணி"
        ],
        answer: 1
    },

    {
        question: "திருக்குறளில் மொத்தம் எத்தனை குறள்கள் உள்ளன?",
        options: [
            "1000",
            "1200",
            "1330",
            "1500"
        ],
        answer: 2
    }
];

// தேவையான HTML பகுதிகள்
const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");
const timerElement = document.getElementById("timer");

let timeLeft = 300; // 5 நிமிடங்கள்
let timer;

// கேள்விகளை காட்டுதல்
function loadQuiz() {

    quizContainer.innerHTML = "";

    questions.forEach((q, index) => {

        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        questionDiv.innerHTML = `
            <h3>${index + 1}. ${q.question}</h3>

            ${q.options.map((option, optionIndex) => `
                <label>
                    <input 
                        type="radio" 
                        name="question${index}" 
                        value="${optionIndex}">
                    ${option}
                </label>
            `).join("")}

            <div id="feedback${index}" class="feedback"></div>
        `;

        quizContainer.appendChild(questionDiv);
    });
}

// Timer
function startTimer() {

    timer = setInterval(() => {

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        timerElement.textContent =
            `நேரம்: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            submitQuiz();
        }

        timeLeft--;

    }, 1000);
}

// Quiz முடித்தல்
function submitQuiz() {

    clearInterval(timer);

    let score = 0;

    questions.forEach((q, index) => {

        const selected = document.querySelector(
            `input[name="question${index}"]:checked`
        );

        const feedback = document.getElementById(`feedback${index}`);

        if (selected) {

            const selectedAnswer = Number(selected.value);

            if (selectedAnswer === q.answer) {

                score++;

                feedback.innerHTML =
                    `<span>✅ சரியான விடை!</span>`;

            } else {

                feedback.innerHTML =
                    `<span>❌ தவறான விடை. சரியான விடை: 
                    <b>${q.options[q.answer]}</b></span>`;
            }

        } else {

            feedback.innerHTML =
                `<span>⚠️ விடை தேர்வு செய்யப்படவில்லை. 
                சரியான விடை: 
                <b>${q.options[q.answer]}</b></span>`;
        }
    });

    resultContainer.innerHTML = `
        <h2>🎉 தேர்வு முடிந்தது!</h2>
        <h3>உங்கள் மதிப்பெண்: ${score} / ${questions.length}</h3>
        <p>வாழ்த்துகள்! தொடர்ந்து முயற்சி செய்யுங்கள்.</p>
    `;

    submitButton.disabled = true;

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}

// Button click
submitButton.addEventListener("click", submitQuiz);

// Quiz ஆரம்பிக்க
loadQuiz();
