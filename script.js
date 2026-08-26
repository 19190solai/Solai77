// ==========================================
// தமிழ் வினாடி வினா
// ==========================================

const questions = [

    {
        question: "அன்னை மொழியே எனத் தொடங்கும் கவிதையை எழுதியவர் யார்?",
        options: [
            "பெருஞ்சித்திரனார்",
            "தேவநேயப்பவனர்",
            "ப. சிங்காரம்",
            "கீரந்தையார்"
        ],
        answer: 0
    },

    {
        question: "தமிழ் சொல்லாராய்ச்சியில் உச்சம் தொட்டவர்",
        options: [
            "பெருஞ்சித்திரனார்",
            "க. சச்சிதானந்தம்",
            "தேவநேயப்பவனர்",
            "kaa. அப்பாதுரையார்"
        ],
        answer: 2
    },

    {
        question: "உயிரெழுத்துகளின் எண்ணிக்கை எத்தனை?",
        options: [
            "வாலி",
            "கண்ணதாசன்",
            "வைரமுத்து",
            "ப. சிங்காரம்"
        ],
        answer: 1
    },

    {
        question: "பெருஞ்சித்திரனார் ---,---- இதழ்கள் வாயிலாக உலகெங்கும் தமிழுணர்வை பரப்பினார்?",
        options: [
            "வானம், இலக்கிய இதழ்",
            "தேன்மொழி, தமிழ்சிட்டு",
            "ஆனந்தவிகடன், விடிவெள்ளி",
            "கற்கண்டு, குமுதம்"
        ],
        answer: 1
    },

    {
        question: "புயலிலே ஒரு தோணி - கதாநாயகன்?",
        options: [
            "மாலுமி",
            "காப்பித்தான்",
            "பாண்டியன்",
            "சச்சிதானந்தம்"
        ],
        answer: 2
    },

    {
        question: "கண்ணதாசனின் சாகித்திய அகாதெமி விருது பெற்ற நூல்?",
        options: [
            "ரத்த புஷ்பங்கள்",
            "சேரமான் காதலி",
            "பிருந்தாவனம்",
            "அந்தமான் காதலி"
        ],
        answer: 1
    },

    {
        question: "தமிழில் முதன்முதலாக மொழிபெயர்க்கப்பட்ட நூல்?",
        options: [
            "1000",
            "பைபிள்",
            "குர்ஆன்",
            "திருக்குறள்"
        ],
        answer: 2
    },

    {
        question: "திருக்குறளில் எத்தனை அதிகாரங்கள் உள்ளன?",
        options: [
            "கண்ணதாசன்",
            "கா. அப்பாத்துரையார்",
            "தேவநேயப் பாவாணர்",
            "க. சச்சிதானந்தம்"
        ],
        answer: 2
    },
        {
        question: "திருக்குறளில் எத்தனை பாகங்கள் உள்ளன?",
        options: [
            "ப. சிங்காரம்",
            "ka. சச்சிதானந்தம்",
            "சா. முத்தையா",
            "கா. அப்பாத்துரையார்"
        ],
        answer: 1
    },

    {
        question: "கண்ணதாசனின் இயற்பெயர்?",
        options: [
            "கருப்பையா",
            "நீலமேகம்",
            "முத்தையா",
            "பாண்டியன்"
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
