const quizData = [
  {
    question: "What is 12 × 8?",
    options: ["96", "84", "108", "92"],
    answer: "96",
  },
  {
    question: "What is the square root of 144?",
    options: ["10", "11", "12", "13"],
    answer: "12",
  },
  {
    question: "Solve: 15 - (3 + 2)",
    options: ["10", "11", "12", "9"],
    answer: "10",
  },
  {
    question: "What is the value of π (pi) rounded to two decimal places?",
    options: ["3.12", "3.14", "3.16", "3.18"],
    answer: "3.14",
  },
  {
    question: "How many sides does a hexagon have?",
    options: ["5", "6", "7", "8"],
    answer: "6",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-button");

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.innerHTML = `<h2>${currentQuestion.question}</h2>`;
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", selectOption);
    optionsElement.appendChild(button);
  });
}

function selectOption(e) {
  const selectedOption = e.target.textContent;
  const currentQuestion = quizData[currentQuestionIndex];

  if (selectedOption === currentQuestion.answer) {
    score++;
  }

  nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
    nextButton.classList.add("hidden");
  } else {
    showResult();
  }
});

restartButton.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  loadQuestion();
  resultElement.classList.add("hidden");
});

function showResult() {
  resultElement.classList.remove("hidden");
  scoreElement.textContent = `You scored ${score} out of ${quizData.length}`;
}

loadQuestion();
