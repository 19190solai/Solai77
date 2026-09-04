// ==========================================
// 10ஆம் வகுப்பு தமிழ் - முதல் இயல்
// வினாடி வினா - iyal1.js
// ==========================================

const questions = [

    {
        type: "சரியான விடையைத் தேர்ந்தெடுக்கவும்",
        question: "தாவரங்களின் அடியிலிருந்து பிரிந்து செல்லும் பிரிவுகளுக்கு வழங்கும் சொற்களின் வரிசைமுறை:",
        options: [
            "கவை, கொம்பு, கிளை, சினை, போத்து",
            "கவை,கிளை, சினை, கொம்பு,போத்து",
            "கவை, சினை, கிளை, கொம்பு, போத்து",
            " கவை, கொம்பு, போத்து, சினை, சினை"
        ],
        answer: 0
    },

    {
        type: " கூற்று : சொல்லாய்வுக்கு கட்டுரைகளின் உச்சம் தொட்டவர் தேவநேயப்பவனர்",
        question: "கூற்று: செந்தமிழ் சொற்பிறப்பியல் அகரமுதலி திட்டத்தின் இயக்குநர்.",
        options: [
            "கூற்று 1,2 இரண்டும் சரி",
            "கூற்று 2 சரி; கூற்று 1 தவறு",
            "கூற்று 2 தவறு; கூற்று 1 சரி",
            "கூற்று 1,2 இரண்டும் தவறு"
        ],
        answer: 0
    },

    {
        type: "பொருத்துக",
        question: "சரியாகப் பொருத்தப்பட்டுள்ள இணையைத் தேர்ந்தெடுக்கவும்.",
        options: [
            "சோளம், கரும்பு - தோகை",
            "காய்ந்த தோகை, தாள் - சண்டு",
            "காய்ந்த இலை -  தாள்",
            "நெல், புல் - சருகு"
        ],
        answer: 0
    },

    {
        type: "இலக்கணம்",
        question: "முதனிலை திரிந்த தொழிற்பெயர் எது?",
        options: [
            "கெடுதல்",
            "கேடு",
            "கேடு",
            "கொடுத்தல்"
        ],
        answer: 1
    },

    {
        type: "பொருத்தமான இணையைத் தேர்ந்தெடுத்தல்",
        question: "அவரை, துவரை - கொத்து",
                  "கேழ்வரகு - கதிர்",
                  "வாழை - தாறு",
                  "கொடுமுந்திரி - குலை"
        options: [
            "1,2,3,4 சரி",
            "1,3,4 சரி",
            "2,3,4 சரி",
            "1,2,3 சரி"
        ],
        answer: 0
    },

    {
        type: "பொருந்தாத இணை",
        question: "பின்வருவனவற்றுள் பொருந்தாத இணையைத் தேர்ந்தெடுக்கவும்.",
        options: [
            "தொல்காப்பியம் – இலக்கணம்",
            "திருக்குறள் – அறநூல்",
            "சிலப்பதிகாரம் – காப்பியம்",
            "நன்னூல் – சிறுகதை"
        ],
        answer: 3
    },

    {
        type: "சரியான விடையைத் தேர்ந்தெடுக்கவும்",
        question: "தமிழின் சிறப்பை எடுத்துரைக்கும் முக்கியமான பண்புகளில் ஒன்று எது?",
        options: [
            "தொன்மை",
            "புதுமை மட்டும்",
            "பிறமொழிச் சார்பு",
            "எழுத்தின்மை"
        ],
        answer: 0
    },

    {
        type: "இலக்கணம்",
        question: "‘அழகான தமிழ்’ என்ற தொடரில் ‘அழகான’ என்பது எவ்வகைச் சொல்?",
        options: [
            "பெயர்ச்சொல்",
            "வினைச்சொல்",
            "உரிச்சொல்",
            "இடைச்சொல்"
        ],
        answer: 2
    },

    {
        type: "காரணம் – கூற்று",
        question: "கூற்று: தமிழ் மொழி உலகின் பழமையான மொழிகளில் ஒன்றாகும். காரணம்: தமிழுக்கு நீண்ட இலக்கிய மரபு உள்ளது.",
        options: [
            "கூற்று சரி; காரணம் சரி",
            "கூற்று சரி; காரணம் தவறு",
            "கூற்று தவறு; காரணம் சரி",
            "கூற்று தவறு; காரணம் தவறு"
        ],
        answer: 0
    },

    {
        type: "பொருத்துக",
        question: "பின்வருவனவற்றுள் சரியான இணையைத் தேர்ந்தெடுக்கவும்.",
        options: [
            "தொல்காப்பியம் – இலக்கணம்",
            "திருக்குறள் – அறிவியல் நூல்",
            "சிலப்பதிகாரம் – அகராதி",
            "நன்னூல் – சிறுகதை"
        ],
        answer: 0
    }

];


// ==========================================
// ஆரம்ப அமைப்புகள்
// ==========================================

let currentQuestion = 0;
let timeLeft = 5 * 60;
let quizSubmitted = false;

const quizContainer = document.getElementById("quiz");
const questionNumber = document.getElementById("questionNumber");
const timerElement = document.getElementById("timer");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");


// ==========================================
// சேமிப்பு Key
// ==========================================

const STORAGE_KEY = "iyal1_quiz_answers";


// ==========================================
// விடைகளை சேமிக்கும் Object
// ==========================================

let userAnswers =
    JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};


// ==========================================
// HTML பாதுகாப்பு
// ==========================================

function escapeHTML(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


// ==========================================
// விடையை சேமித்தல்
// ==========================================

function saveCurrentAnswer() {

    const selected = document.querySelector(
        'input[name="currentQuestion"]:checked'
    );

    if (!selected) {
        return;
    }

    userAnswers[currentQuestion] =
        Number(selected.value);

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(userAnswers)
    );
}


// ==========================================
// ஒரு வினாவை காட்டுதல்
// ==========================================

function showQuestion() {

    if (quizSubmitted) {
        return;
    }

    const q = questions[currentQuestion];

    questionNumber.textContent =
        `வினா ${currentQuestion + 1} / ${questions.length}`;

    let html = `
        <div class="question-box">

            <div class="question-type">
                ${escapeHTML(q.type)}
            </div>

            <div class="question">
                ${currentQuestion + 1}. ${escapeHTML(q.question)}
            </div>
    `;

    q.options.forEach((option, optionIndex) => {

        const checked =
            userAnswers[currentQuestion] === optionIndex
                ? "checked"
                : "";

        html += `
            <label class="option">

                <input
                    type="radio"
                    name="currentQuestion"
                    value="${optionIndex}"
                    ${checked}
                >

                ${String.fromCharCode(65 + optionIndex)})
                ${escapeHTML(option)}

            </label>
        `;

    });

    html += `</div>`;

    quizContainer.innerHTML = html;


    // ==========================================
    // கடைசி வினா
    // ==========================================

    if (currentQuestion === questions.length - 1) {

        nextBtn.style.display = "none";
        submitBtn.style.display = "block";

    } else {

        nextBtn.style.display = "block";
        submitBtn.style.display = "none";

    }
}


// ==========================================
// அடுத்த வினா
// ==========================================

function nextQuestion() {

    if (quizSubmitted) {
        return;
    }

    const selected = document.querySelector(
        'input[name="currentQuestion"]:checked'
    );

    if (!selected) {

        alert("⚠️ முதலில் ஒரு விடையைத் தேர்ந்தெடுக்கவும்!");

        return;
    }

    saveCurrentAnswer();

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        showQuestion();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


// ==========================================
// TIMER
// ==========================================

function updateTimer() {

    if (quizSubmitted) {
        return;
    }

    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;

    timerElement.textContent =
        "⏱️ " +
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");


    if (timeLeft <= 0) {

        clearInterval(timer);

        alert("⏰ நேரம் முடிந்துவிட்டது!");

        submitQuiz();

        return;
    }

    timeLeft--;
}


const timer = setInterval(updateTimer, 1000);


// ==========================================
// தேர்வு முடித்தல்
// ==========================================

function submitQuiz() {

    if (quizSubmitted) {
        return;
    }


    // தற்போதைய வினாவின் விடையை சேமிக்கவும்
    saveCurrentAnswer();


    // கடைசி வினாவில் விடை இல்லையெனில் எச்சரிக்கை
    if (
        currentQuestion === questions.length - 1 &&
        userAnswers[currentQuestion] === undefined
    ) {

        alert("⚠️ கடைசி வினாவிற்கும் விடையைத் தேர்ந்தெடுக்கவும்!");

        return;
    }


    quizSubmitted = true;

    clearInterval(timer);


    // ==========================================
    // Score
    // ==========================================

    let score = 0;

    let wrongAnswers = [];


    questions.forEach((q, index) => {

        const selectedAnswer =
            userAnswers[index];


        if (
            selectedAnswer !== undefined &&
            selectedAnswer === q.answer
        ) {

            score++;

        } else {

            wrongAnswers.push({

                number: index + 1,

                question: q.question,

                yourAnswer:
                    selectedAnswer !== undefined
                        ? q.options[selectedAnswer]
                        : "விடை தேர்ந்தெடுக்கவில்லை",

                correctAnswer:
                    q.options[q.answer]

            });

        }

    });


    // ==========================================
    // மாணவர் தகவல்
    // ==========================================

    const studentNameElement =
        document.getElementById("studentName");

    const studentClassElement =
        document.getElementById("studentClass");


    const studentName =
        studentNameElement
            ? studentNameElement.value.trim()
            : "";


    const studentClass =
        studentClassElement
            ? studentClassElement.value.trim()
            : "";


    // ==========================================
    // RESULT
    // ==========================================

    let resultHTML = `

        <div class="result-box">

            <h2>🎉 தேர்வு முடிவு</h2>

            <div class="score">
                உங்கள் மதிப்பெண்:
                ${score} / ${questions.length}
            </div>

    `;


    if (studentName !== "") {

        resultHTML += `

            <p>
                <strong>மாணவர் பெயர்:</strong>
                ${escapeHTML(studentName)}
            </p>

        `;
    }


    if (studentClass !== "") {

        resultHTML += `

            <p>
                <strong>வகுப்பு:</strong>
                ${escapeHTML(studentClass)}
            </p>

        `;
    }


    // ==========================================
    // அனைத்து விடைகளும் சரி
    // ==========================================

    if (wrongAnswers.length === 0) {

        resultHTML += `

            <div class="correct-answer">

                🌟 அருமை!

                <br>

                அனைத்து வினாக்களுக்கும்
                சரியான விடை அளித்துள்ளீர்கள்!

            </div>

        `;

    } else {


        // ======================================
        // தவறான விடைகள்
        // ======================================

        resultHTML += `

            <h3 style="margin-top:20px;">
                ❌ தவறான / விடையளிக்காத வினாக்கள்
            </h3>

        `;


        wrongAnswers.forEach(item => {

            resultHTML += `

                <div class="wrong-answer">

                    <strong>
                        ${item.number}.
                        ${escapeHTML(item.question)}
                    </strong>

                    <br><br>

                    உங்கள் விடை:

                    <span>
                        ${escapeHTML(item.yourAnswer)}
                    </span>

                    <br><br>

                    <span class="correct-answer">

                        ✅ சரியான விடை:

                        ${escapeHTML(item.correctAnswer)}

                    </span>

                </div>

            `;

        });

    }


    resultHTML += `</div>`;


    // ==========================================
    // Result காட்டுதல்
    // ==========================================

    result.innerHTML = resultHTML;


    // ==========================================
    // Quiz மறைத்தல்
    // ==========================================

    quizContainer.style.display = "none";


    // ==========================================
    // Buttons மறைத்தல்
    // ==========================================

    nextBtn.disabled = true;

    submitBtn.disabled = true;

    nextBtn.style.display = "none";

    submitBtn.style.display = "none";


    // ==========================================
    // Timer நிறுத்துதல்
    // ==========================================

    timerElement.textContent = "⏰ தேர்வு முடிந்தது";


    // ==========================================
    // பழைய விடைகளை நீக்குதல்
    // ==========================================

    localStorage.removeItem(STORAGE_KEY);


    // ==========================================
    // Result பகுதிக்கு செல்லுதல்
    // ==========================================

    setTimeout(() => {

        result.scrollIntoView({
            behavior: "smooth"
        });

    }, 200);
}


// ==========================================
// விடை தேர்வு செய்தவுடன் சேமித்தல்
// ==========================================

document.addEventListener("change", function(event) {

    if (
        event.target.matches(
            'input[name="currentQuestion"]'
        )
    ) {

        saveCurrentAnswer();

    }

});


// ==========================================
// முதல் வினாவை காட்டுதல்
// ==========================================

showQuestion();


// ==========================================
// Timer ஆரம்பித்தல்
// ==========================================

updateTimer();


    
    

        
