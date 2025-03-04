const quizData = [
  {
    question: 'Which artist sang the hit song "Shape of You"',
    options: ['Bruno Mars', 'Justin Bieber', 'Ed Sheeran', 'Shawn Mendes'],
    answer: 'Ed Sheeran',
  },
  {
    question: 'Which artist released the album "21" in 2011',
    options: ['Taylor Swift', 'Adele', 'Lady Gaga', 'Rihanna'],
    answer: 'Adele',
  },
  {
    question: 'Which band or artist released the album "Thriller" in 1982',
    options: ['Prince', 'U2', 'Michael Jackson', 'Madonna'],
    answer: 'Michael Jackson',
  },
  {
    question: 'Who is popularly called "Baddo"?',
    options: ['Wizkid', 'Olamide', 'Davido', 'VDM'],
    answer: 'Olamide',
  },
  {
    question: "Who sang the song 'Holla at your boy'?",
    options: ['Burna Boy', 'Daddy Shokki', 'Westlife', 'Wizkid'],
    answer: 'Wizkid',
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
