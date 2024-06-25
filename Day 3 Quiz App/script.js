const questions = [
    {
        question: "Which of the following is hardware?",
        answers: [
            {text: "Monitor", correct: true},
            {text: "Program", correct: false},
            {text: "Operating System", correct: false},
            {text: "Microsoft Office", correct: false},
        ]
    },
    {
        question: "Which of the following is software?",
        answers: [
            {text: "Keyboard", correct: false},
            {text: "Microsoft Office", correct: true},
            {text: "Speaker", correct: false},
            {text: "Mouse", correct: false},
        ]
    },
    {
        question: "What do you call the “brain” of the computer?",
        answers: [
            {text: "Hard drive", correct: false},
            {text: "Central Processing Unit", correct: true},
            {text: "Database", correct: false},
            {text: "System Software", correct: false},
        ]
    },
    {
        question: "What does RAM stand for?",
        answers: [
            {text: "Review Admittance Monitor", correct: false},
            {text: "Random Access Memory", correct: false},
            {text: "Review Admittance Memory", correct: true},
            {text: "Random Access Monitor", correct: false},
        ]
    },
    {
        question: "What is the function of the hard drive disk?",
        answers: [
            {text: "Processing", correct: false},
            {text: "Storage", correct: true},
            {text: "Visual display", correct: false},
            {text: "Type letters", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){

    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo +". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });

}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz()
    }
});

startQuiz();