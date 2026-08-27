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
// வினாக்களை உருவாக்குதல்
// ==========================================

const quizContainer = document.getElementById("quiz");

questions.forEach((q, index) => {

    const questionBox = document.createElement("div");
    questionBox.className = "question-box";

    let html = `
        <div class="question">
            ${index + 1}. ${q.question}
        </div>
    `;

    q.options.forEach((option, optionIndex) => {

        html += `
            <label class="option">
                <input
                    type="radio"
                    name="question${index}"
                    value="${optionIndex}"
                >
                ${String.fromCharCode(65 + optionIndex)}) ${option}
            </label>
        `;

    });

    questionBox.innerHTML = html;
    quizContainer.appendChild(questionBox);
});


// ==========================================
// TIMER - 5 நிமிடங்கள்
// ==========================================

let timeLeft = 5 * 60;
let quizSubmitted = false;

const timerElement = document.getElementById("timer");

const timer = setInterval(() => {

    if (quizSubmitted) {
        clearInterval(timer);
        return;
    }

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerElement.textContent =
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

}, 1000);


// ==========================================
// SUBMIT QUIZ
// ==========================================

function submitQuiz() {

    if (quizSubmitted) {
        return;
    }

    quizSubmitted = true;

    clearInterval(timer);

    let score = 0;
    let wrongAnswers = [];

    questions.forEach((q, index) => {

        const selected = document.querySelector(
            `input[name="question${index}"]:checked`
        );

        if (selected) {

            const selectedAnswer = Number(selected.value);

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
    // RESULT
    // ==========================================

    const result = document.getElementById("result");

    let resultHTML = `
        <div class="result-box">

            <h2>🎉 தேர்வு முடிவு</h2>

            <div class="score">
                உங்கள் மதிப்பெண்: ${score} / ${questions.length}
            </div>
    `;


    // மாணவர் பெயர்

    const studentName =
        document.getElementById("studentName").value.trim();

    const studentClass =
        document.getElementById("studentClass").value.trim();


    if (studentName !== "") {
        resultHTML += `
            <p><strong>மாணவர் பெயர்:</strong> ${studentName}</p>
        `;
    }

    if (studentClass !== "") {
        resultHTML += `
            <p><strong>வகுப்பு:</strong> ${studentClass}</p>
        `;
    }


    // ==========================================
    // தவறான விடைகள்
    // ==========================================

    if (wrongAnswers.length === 0) {

        resultHTML += `
            <div class="correct-answer">
                🌟 அருமை! அனைத்து வினாக்களுக்கும் சரியான விடை அளித்துள்ளீர்கள்!
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

                    <strong>${item.number}. ${item.question}</strong>

                    <br>

                    உங்கள் விடை:
                    <span>${item.yourAnswer}</span>

                    <br>

                    <span class="correct-answer">
                        ✅ சரியான விடை: ${item.correctAnswer}
                    </span>

                </div>
            `;

        });

    }


    resultHTML += `
        </div>
    `;

    result.innerHTML = resultHTML;


    // Submit button-ஐ முடக்குதல்

    const submitButton =
        document.getElementById("submitBtn");

    submitButton.disabled = true;
    submitButton.style.opacity = "0.6";
    submitButton.style.cursor = "not-allowed";


    // மேலே Result பகுதிக்கு கொண்டு செல்லுதல்

    result.scrollIntoView({
        behavior: "smooth"
    });
}
✅
