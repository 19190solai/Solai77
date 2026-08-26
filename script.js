// ==========================================
// தமிழ் வினாடி வினா
// ==========================================

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
    },
        {
        question: "திருக்குறளில் எத்தனை பாகங்கள் உள்ளன?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        answer: 1
    },

    {
        question: "திருக்குறளின் ஆசிரியர் யார்?",
        options: [
            "கம்பர்",
            "திருவள்ளுவர்",
            "இளங்கோவடிகள்",
            "சீத்தலைச் சாத்தனார்"
        ],
        answer: 1
    }

];


// ==========================================
// HTML பகுதிகள்
// ==========================================

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submitBtn");
const resultContainer = document.getElementById("result");


// ==========================================
// வினாக்களை காட்டுதல்
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
                    selected: q.options[selectedAnswer],
                    correct: q.options[q.answer]
                });

            }

        } else {

            wrongAnswers.push({
                number: index + 1,
                question: q.question,
                selected: "விடை தேர்வு செய்யவில்லை",
                correct: q.options[q.answer]
            });
        }
    });


    // மாணவர் பெயர்

    const studentName =
        document.getElementById("studentName").value || "மாணவர்";


    // வகுப்பு

    const studentClass =
        document.getElementById("studentClass").value || "-";


    // சதவீதம்

    const percentage =
        Math.round((score / questions.length) * 100);


    // பாராட்டு செய்தி

    let message;

    if (score >= 9) {

        message = "🎉 மிகச் சிறப்பு!";

    } else if (score >= 7) {

        message = "👏 மிகவும் நன்று!";

    } else if (score >= 5) {

        message = "👍 நன்று!";

    } else {

        message = "📚 மேலும் பயிற்சி செய்யுங்கள்!";
    }


    // Result

    let resultHTML = `

        <div class="result-box">

            <h2>🎓 தமிழ் வினாடி வினா - முடிவு</h2>

            <p>
                <strong>மாணவர் பெயர்:</strong>
                ${studentName}
            </p>

            <p>
                <strong>வகுப்பு:</strong>
                ${studentClass}
            </p>

            <hr>

            <h2>
                🏆 மதிப்பெண்:
                ${score} / ${questions.length}
            </h2>

            <h3>
                📊 சதவீதம்: ${percentage}%
            </h3>

            <h3>${message}</h3>

        </div>
    `;


    // தவறான விடைகள்

    if (wrongAnswers.length > 0) {

        resultHTML += `
            <div class="wrong-answers">

                <h2>❌ தவறான விடைகள்</h2>
        `;

        wrongAnswers.forEach(item => {

            resultHTML += `

                <div class="wrong-question">

                    <p>
                        <strong>
                            ${item.number}. ${item.question}
                        </strong>
                    </p>

                    <p>
                        உங்கள் விடை:
                        ❌ ${item.selected}
                    </p>

                    <p>
                        சரியான விடை:
                        ✅ <strong>${item.correct}</strong>
                    </p>

                </div>

            `;
        });

        resultHTML += `</div>`;

    } else {

        resultHTML += `

            <div class="perfect">

                🎉🎉 அற்புதம்!
                அனைத்து வினாக்களுக்கும்
                சரியான விடை!

            </div>
        `;
    }


    // Result-ஐ காட்டுதல்

    resultContainer.innerHTML = resultHTML;

    resultContainer.style.display = "block";

    resultContainer.scrollIntoView({
        behavior: "smooth"
    });


    // Submit button-ஐ நிறுத்துதல்

    submitButton.disabled = true;

    stopTimer();
}


// ==========================================
// Submit Button
// ==========================================

submitButton.addEventListener("click", function(event) {

    event.preventDefault();

    calculateResult();

});
// ==========================================
// TIMER - 10 நிமிடங்கள்
// ==========================================

let timeLeft = 10 * 60;
let timerInterval;

function startTimer() {

    timerInterval = setInterval(function() {

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        const timerElement =
            document.getElementById("timer");

        if (timerElement) {

            timerElement.innerHTML =
                `⏱️ மீதமுள்ள நேரம்: ${minutes}:${seconds}`;
        }

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            alert("⏰ நேரம் முடிந்துவிட்டது!");

            calculateResult();

            return;
        }

        timeLeft--;

    }, 1000);
}


function stopTimer() {

    clearInterval(timerInterval);

}


// ==========================================
// Quiz ஆரம்பம்
// ==========================================

loadQuiz();
startTimer();
