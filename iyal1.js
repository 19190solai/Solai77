// ==========================================
// 10ஆம் வகுப்பு தமிழ் - முதல் இயல்
// வினாடி வினா - iyal1.js
// ==========================================

const questions = [

    {
        type: "சரியான விடையைத் தேர்ந்தெடுக்கவும்",
        question: "‘அன்னை மொழியே’ எனத் தொடங்கும் கவிதையை எழுதியவர் யார்?",
        options: [
            "பெருஞ்சித்திரனார்",
            "தேவநேயப் பாவாணர்",
            "ப. சிங்காரம்",
            "கீரந்தையார்"
        ],
        answer: 0
    },

    {
        type: "காரணம் – கூற்று",
        question: "கூற்று: தமிழ் மொழி தொன்மையான மொழியாகக் கருதப்படுகிறது. காரணம்: தமிழில் தொன்மையான இலக்கண, இலக்கிய நூல்கள் உள்ளன.",
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
        question: "சரியாகப் பொருத்தப்பட்டுள்ள இணையைத் தேர்ந்தெடுக்கவும்.",
        options: [
            "தொல்காப்பியம் – இலக்கண நூல்",
            "திருக்குறள் – காப்பிய நூல்",
            "சிலப்பதிகாரம் – இலக்கண நூல்",
            "நன்னூல் – காப்பிய நூல்"
        ],
        answer: 0
    },

    {
        type: "இலக்கணம்",
        question: "‘தமிழ்மொழி’ என்ற சொல்லில் அமைந்துள்ள சொற்களின் வகை எது?",
        options: [
            "தனிச்சொல்",
            "கூட்டுச்சொல்",
            "வினைச்சொல்",
            "உரிச்சொல்"
        ],
        answer: 1
    },

    {
        type: "சரியா? தவறா?",
        question: "‘தொல்காப்பியம்’ தமிழின் தொன்மையான இலக்கண நூலாகும்.",
        options: [
            "சரி",
            "தவறு",
            "இரண்டும் இல்லை",
            "கூற முடியாது"
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
// ஒரு வினாவை மட்டும் காட்டுதல்
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
                ${q.type}
            </div>

            <div class="question">
                ${currentQuestion + 1}. ${q.question}
            </div>
    `;

    q.options.forEach((option, optionIndex) => {

        html += `
            <label class="option">
                <input
                    type="radio"
                    name="currentQuestion"
                    value="${optionIndex}"
                >
                ${String.fromCharCode(65 + optionIndex)}) ${option}
            </label>
        `;

    });

    html += `</div>`;

    quizContainer.innerHTML = html;


    // கடைசி வினாவா?
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

    currentQuestion++;

    showQuestion();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==========================================
// TIMER - 5 நிமிடங்கள்
// ==========================================

function updateTimer() {

    if (quizSubmitted) {
        return;
    }

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

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
// தேர்வை முடித்தல்
// ==========================================

function submitQuiz() {

    if (quizSubmitted) {
        return;
    }

    // தற்போதைய வினாவின் விடையை சேமித்தல்
    const selected = document.querySelector(
        'input[name="currentQuestion"]:checked'
    );

    if (selected) {
        // கடைசி வினாவின் விடை DOM-ல் இருக்கிறது.
        // மற்ற வினாக்களின் விடைகள் localStorage-ல் சேமிக்கப்படும்.
        saveCurrentAnswer();
    } else if (currentQuestion === questions.length - 1) {

        alert("⚠️ கடைசி வினாவிற்கும் விடையைத் தேர்ந்தெடுக்கவும்!");

        return;
    }


    quizSubmitted = true;

    clearInterval(timer);


    // ==========================================
    // மதிப்பெண் கணக்கிடுதல்
    // ==========================================

    let score = 0;
    let wrongAnswers = [];

    questions.forEach((q, index) => {

        const savedAnswer =
            localStorage.getItem("iyal1_answer_" + index);

        if (savedAnswer !== null) {

            const selectedAnswer = Number(savedAnswer);

            if (selectedAnswer === q.answer) {

                score++;

            } else {

                wrongAnswers.push({
                    number: index + 1,
                    question: q.question,
                    yourAnswer: q.options[selectedAnswer],
                    correctAnswer: q.options[q.answer]
                });

            }

        } else {

            wrongAnswers.push({
                number: index + 1,
                question: q.question,
                yourAnswer: "விடை தேர்ந்தெடுக்கவில்லை",
                correctAnswer: q.options[q.answer]
            });

        }

    });


    // ==========================================
    // மாணவர் தகவல்
    // ==========================================

    const studentName =
        document.getElementById("studentName").value.trim();

    const studentClass =
        document.getElementById("studentClass").value.trim();


    // ==========================================
    // RESULT
    // ==========================================

    let resultHTML = `
        <div class="result-box">

            <h2>🎉 தேர்வு முடிவு</h2>

            <div class="score">
                உங்கள் மதிப்பெண்: ${score} / ${questions.length}
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
    // தவறான விடைகள்
    // ==========================================

    if (wrongAnswers.length === 0) {

        resultHTML += `
            <div class="correct-answer">
                🌟 அருமை! அனைத்து வினாக்களுக்கும்
                சரியான விடை அளித்துள்ளீர்கள்!
            </div>
        `;

    } else {

        resultHTML += `
            <h3 style="margin-top:20px;">
                ❌ தவறான / விடையளிக்காத வினாக்கள்
            </h3>
        `;


        wrongAnswers.forEach(item => {

            resultHTML += `
                <div class="wrong-answer">

                    <strong>
                        ${item.number}. ${escapeHTML(item.question)}
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


    resultHTML += `
        </div>
    `;


    result.innerHTML = resultHTML;


    // ==========================================
    // பொத்தான்களை முடக்குதல்
    // ==========================================

    nextBtn.disabled = true;
    submitBtn.disabled = true;

    nextBtn.style.display = "none";
    submitBtn.style.display = "none";


    // ==========================================
    // Quiz பகுதியை மறைத்தல்
    // ==========================================

    quizContainer.style.display = "none";


    // ==========================================
    // சேமித்த விடைகளை நீக்குதல்
    // ==========================================

    questions.forEach((q, index) => {

        localStorage.removeItem("iyal1_answer_" + index);

    });


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
// தற்போதைய விடையை சேமித்தல்
// ==========================================

function saveCurrentAnswer() {

    const selected = document.querySelector(
        'input[name="currentQuestion"]:checked'
    );

    if (!selected) {
        return;
    }

    localStorage.setItem(
        "iyal1_answer_" + currentQuestion,
        selected.value
    );
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
// தேர்வு தொடங்கும்போது பழைய விடைகளை நீக்குதல்
// ==========================================

questions.forEach((q, index) => {

    localStorage.removeItem("iyal1_answer_" + index);

});


// ==========================================
// முதல் வினாவை காட்டுதல்
// ==========================================

showQuestion();


// ==========================================
// ஆரம்ப Timer
// ==========================================

updateTimer();
