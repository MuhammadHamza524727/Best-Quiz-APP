var questions = [
    {
      question: "What does DOM stand for?",
      options: ["Document Object Model", "Data Object Module", "Display Object Management", "Digital Operations Map"],
      correct: 0,
    },
    {
      question: "Which JavaScript data type is used for true/false?",
      options: ["String", "Boolean", "Number", "Object"],
      correct: 1,
    },
    {
      question: "What is the correct way to declare a variable in JavaScript?",
      options: ["var myVar;", "let myVar;", "const myVar;", "All of the above"],
      correct: 3,
    },
  ];
  
  var currentQuestionIndex = 0;
  var score = 0;
  
  var homepage = document.getElementById('homepage');
  var quizContainer = document.getElementById('quiz-container');
  var questionContainer = document.getElementById('question-container');
  var nextButton = document.getElementById('next-question');
  var resultPage = document.getElementById('result-page');
  var scoreDisplay = document.getElementById('score');
  var restartButton = document.getElementById('restart-quiz');
  
  document.getElementById('start-quiz').addEventListener('click', startQuiz);
  nextButton.addEventListener('click', loadNextQuestion);
  restartButton.addEventListener('click', restartQuiz);
  
  function startQuiz() {
    homepage.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    loadQuestion();
  }
  
  function loadQuestion() {
    clearQuestion();
    var currentQuestion = questions[currentQuestionIndex];
    var questionElement = document.createElement('h2');
    questionElement.textContent = currentQuestion.question;
    questionContainer.appendChild(questionElement);
  
    currentQuestion.options.forEach((option, index) => {
      var optionButton = document.createElement('button');
      optionButton.textContent = option;
      optionButton.classList.add('option');
      optionButton.addEventListener('click', () => selectAnswer(index));
      questionContainer.appendChild(optionButton);
    });
  
    nextButton.classList.add('hidden');
  }
  
  function selectAnswer(selectedIndex) {
    var currentQuestion = questions[currentQuestionIndex];
    var options = document.querySelectorAll('.option');
  
    options.forEach((option, index) => {
      option.classList.remove('correct', 'incorrect');
      if (index === currentQuestion.correct) {
        option.classList.add('correct');
      } else if (index === selectedIndex) {
        option.classList.add('incorrect');
      }
    });
  
    if (selectedIndex === currentQuestion.correct) {
      score++;
    }
  
    nextButton.classList.remove('hidden');
  }
  
  function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    quizContainer.classList.add('hidden');
    resultPage.classList.remove('hidden');
    scoreDisplay.textContent = `You scored ${score} out of ${questions.length}`;
  }
  
  function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    resultPage.classList.add('hidden');
    homepage.classList.remove('hidden');
  }
  
  function clearQuestion() {
    questionContainer.innerHTML = '';
  }
  