const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },

     {
      questionText: 'Who is the CEO of Tesla?',
      answerOptions:[
        { answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
      ],
    },

    {
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},

		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},

    {
      questionText: 'Which horoscope sign is a fish?',
      answerOptions: [
				{ answerText: 'Aquarius', isCorrect: false },
				{ answerText: 'Cancer', isCorrect: false },
				{ answerText: 'Pisces', isCorrect: true },
				{ answerText: 'Gemini', isCorrect: false },
			],
    }
   
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let showScore = false;
  
  const questionSection = document.getElementById('question-section');
  const scoreSection = document.getElementById('score-section');
  
  function displayQuestion() {
    const question = questions[currentQuestion];
    questionSection.innerHTML = `
      <div class="question-count">Question ${currentQuestion + 1}</div>
      <div class="question-text">${question.questionText}</div>
      <div class="answer-section">
      `;
  
    question.answerOptions.forEach((answerOption) => {
      questionSection.innerHTML += `
        <button class="answer-button" data-is-correct="${answerOption.isCorrect}">${answerOption.answerText}</button>
      `;
    });
  }
  
  function handleAnswerClick() {
    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.isCorrect === 'true';
  
    if (isCorrect) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      showScore = true;
      displayScore();
    }
  }
  
  function displayScore() {
    questionSection.style.display = 'none';
    scoreSection.innerHTML = `You scored ${score} out of ${questions.length}`;
  }
  
  displayQuestion();
  
  questionSection.addEventListener('click', handleAnswerClick);
  