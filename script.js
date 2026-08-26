        answer: 1
    },

    {
        question: "தமிழின் முதல் எழுத்து எது?",
        options: [
            "ஆ",
            "இ",
            "அ",
            "உ"
        ],
        answer: 2
    },

    {
        question: "உயிரெழுத்துகளின் எண்ணிக்கை எத்தனை?",
        options: [
            "10",
            "12",
            "18",
            "216"
        ],
        answer: 1
    },

    {
        question: "மெய்யெழுத்துகளின் எண்ணிக்கை எத்தனை?",
        options: [
            "12",
            "18",
            "216",
            "247"
        ],
        answer: 1
    },

    {
        question: "உயிர்மெய் எழுத்துகளின் எண்ணிக்கை எத்தனை?",
        options: [
            "18",
            "12",
            "216",
            "247"
        ],
        answer: 2
    },

    {
        question: "தமிழ் எழுத்துகளின் மொத்த எண்ணிக்கை எத்தனை?",
        options: [
            "216",
            "247",
            "133",
            "18"
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
    },

    {
        question: "திருக்குறளில் எத்தனை அதிகாரங்கள் உள்ளன?",
        options: [
            "108",
            "120",
            "133",
            "150"
        ],
        answer: 2
    }
];


// ==========================================
// தேவையான HTML பகுதிகள்
// ==========================================

const quizForm = document.getElementById("quizForm");
const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submitBtn");
const resultContainer = document.getElementById("result");


// ==========================================
// வினாக்களை திரையில் காட்டுதல்
// ==========================================

function loadQuiz() {

    quizContainer.innerHTML = "";

    questions.forEach((q, index) => {

        const questionDiv = document.createElement("div");

        questionDiv.className = "question";

        questionDiv.innerHTML = `
            <h3>${index + 1}. ${q.question}</h3>

            ${q.options.map((option, optionIndex) => `
                <label>
                    <input 
                        type="radio" 
                        name="question${index}" 
                        value="${optionIndex}"
                    >
                    ${option}
                </label>
            `).join("")}
        `;

        quizContainer.appendChild(questionDiv);
    });
}


// ==========================================
// தேர்வு முடிவு
// ==========================================

function calculateResult() {

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
                    correct: q.options[q.answer],
                    selected: q.options[selectedAnswer]
                });

            }

        } else {

            wrongAnswers.push({
                number: index + 1,
                question: q.question,
                correct: q.options[q.answer],
                selected: "விடை தேர்வு செய்யவில்லை"
            });

        }
    });


    // ======================================
    // மாணவர் பெயர் மற்றும் வகுப்பு
    // ======================================

    const studentName =
        document.getElementById("studentName")?.value || "மாணவர்";

    const studentClass =
        document.getElementById("studentClass")?.value || "-";


    // ======================================
    // Score
    // ======================================

    let percentage = (score / questions.length) * 100;

    let message = "";

    if (score >= 9) {

        message = "🎉 மிகச் சிறப்பு!";

    } else if (score >= 7) {

        message = "👏 மிகவும் நன்று!";

    } else if (score >= 5) {

        message = "👍 நன்று! இன்னும் சிறப்பாக முயற்சி செய்யுங்கள்.";

    } else {

        message = "📚 மேலும் பயிற்சி செய்யுங்கள். நீங்கள் நிச்சயம் வெற்றி பெறுவீர்கள்!";

    }


    // ======================================
    // Result HTML
    // ======================================

    let resultHTML = `

        <div class="result-box">

            <h2>🎓 தமிழ் வினாடி வினா - முடிவு</h2>

            <p><strong>மாணவர் பெயர்:</strong> ${studentName}</p>

            <p><strong>வகுப்பு:</strong> ${studentClass}</p>

            <hr>

            <h2>🏆 மதிப்பெண்: ${score} / ${questions.length}</h2>

            <h3>📊 சதவீதம்: ${percentage}%</h3>

            <h3>${message}</h3>

        </div>
    `;


    // ======================================
    // தவறான விடைகள்
    // ======================================

    if (wrongAnswers.length > 0) {

        resultHTML += `

            <div class="wrong-answers">

                <h2>❌ தவறான விடைகள்</h2>

        `;

        wrongAnswers.forEach(item => {

            resultHTML += `

                <div class="wrong-question">

                    <p>
                        <strong>${item.number}. ${item.question}</strong>
                    </p>

                    <p>
                        உங்கள் விடை:
                        <span>${item.selected}</span>
                    </p>

                    <p>
                        ✅ சரியான விடை:
                        <strong>${item.correct}</strong>
                    </p>

                </div>

            `;

        });

        resultHTML += `</div>`;

    } else {

        resultHTML += `

            <div class="perfect">

                🎉🎉 அற்புதம்! அனைத்து வினாக்களுக்கும்
                சரியான விடை அளித்துள்ளீர்கள்!

            </div>

        `;

    }


    resultContainer.innerHTML = resultHTML;

    resultContainer.style.display = "block";

    resultContainer.scrollIntoView({
        behavior: "smooth"
    });

    submitButton.disabled = true;

    stopTimer();
}


// ==========================================
// Submit Button
// ==========================================

if (submitButton) {

    submitButton.addEventListener("click", function(event) {

        event.preventDefault();

        calculateResult();

    });

}


// ==========================================
// TIMER - 10 நிமிடங்கள்
// ==========================================

let timeLeft = 10 * 60;

let timerInterval;


function startTimer() {

    timerInterval = setInterval(function() {

        let minutes = Math.floor(timeLeft / 60);

        let seconds = timeLeft % 60;

        seconds = seconds < 10 ? "0" + seconds : seconds;

        const timerElement =
            document.getElementById("timer");

        if (timerElement) {

            timerElement.innerHTML =
                `⏱️ மீதமுள்ள நேரம்: ${minutes}:${seconds}`;

        }


        // நேரம் முடிந்தால்
        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            alert("⏰ நேரம் முடிந்துவிட்டது!");

            calculateResult();

        }

        timeLeft--;

    }, 1000);

}


function stopTimer() {

    clearInterval(timerInterval);

}


// ==========================================
// Quiz ஆரம்பிக்கும்போது
// ==========================================

loadQuiz();

startTimer();
