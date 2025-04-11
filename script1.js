const quizData = [
  {
    question: 'What is the past tense of "go"?',
    options: ["Goed", "Went", "Go", "Gone"],
    answer: "Went",
  },
  {
    question: "Choose the correct spelling:",
    options: ["Definately", "Definetly", "Definitely", "Defanitely"],
    answer: "Definitely",
  },
  {
    question: 'What is a synonym of "happy"?',
    options: ["Sad", "Joyful", "Angry", "Cry"],
    answer: "Joyful",
  },
  {
    question: 'What type of word is "quickly"?',
    options: ["Verb", "Adjective", "Noun", "Adverb"],
    answer: "Adverb",
  },
  {
    question: "Which sentence is correct?",
    options: [
      "She don't like apples.",
      "She doesn't likes apples.",
      "She doesn't like apples.",
      "She not like apples.",
    ],
    answer: "She doesn't like apples.",
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
