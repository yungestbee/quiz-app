const quizData = [
  {
    question: "What is the name of Thor's hammer?",
    options: ['Mjolnir', 'Odin', 'Loki', 'Hydyr'],
    answer: 'Mjolnir',
  },
  {
    question:
      'Which character has been played by both Edward Norton and Mark Ruffalo in the Marvel Cinematic Universe?',
    options: [
      'Tony Stark or Ironman',
      'Vision',
      'Bruce Banner or The Hulk',
      'Superman',
    ],
    answer: 'Bruce Banner or The Hulk',
  },
  {
    question:
      'What is the name of the tree-like creature in Guardians of the Galaxy?',
    options: ['Yondu', 'Groot', 'Racoon', 'Drax'],
    answer: 'Groot',
  },
  {
    question: 'What was the first feature-length animated movie ever released?',
    options: [
      'Snow White and the Seven Dwarfs',
      'Superman',
      'Pinocchio',
      'Sleeping Beauty',
    ],
    answer: 'Snow White and the Seven Dwarfs',
  },
  {
    question: "In The Wizard of Oz, what is the name of Dorothy's dog?",
    options: ['Toto', 'Tinman', 'Pogo', 'Yondu'],
    answer: 'Toto',
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.innerHTML = `<h2>${currentQuestion.question}</h2>`;
  optionsElement.innerHTML = '';

  currentQuestion.options.forEach((option) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.addEventListener('click', selectOption);
    optionsElement.appendChild(button);
  });
}

function selectOption(e) {
  const selectedOption = e.target.textContent;
  const currentQuestion = quizData[currentQuestionIndex];

  if (selectedOption === currentQuestion.answer) {
    score++;
  }

  nextButton.classList.remove('hidden');
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
    nextButton.classList.add('hidden');
  } else {
    showResult();
  }
});

restartButton.addEventListener('click', () => {
  currentQuestionIndex = 0;
  score = 0;
  loadQuestion();
  resultElement.classList.add('hidden');
});

function showResult() {
  resultElement.classList.remove('hidden');
  scoreElement.textContent = `You scored ${score} out of ${quizData.length}`;
}

loadQuestion();
