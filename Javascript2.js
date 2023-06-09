const startButton = document.getElementById("start")
const nextButton = document.getElementById("next")
const question_containerElement = document.getElementById("question_container")
const questionElement = document.getElementById("question")
const AnswerButtonsElement = document.getElementById("answer-buttons")

var timeEL = document.querySelector(".time")

const choice1element = document.getElementById("choice1")
const choice2element = document.getElementById("choice2")
const choice3element = document.getElementById("choice3")
const choice4element = document.getElementById("choice4")

// define quiz data
const questionData = [
  {
    question: "What does CSS stand for?",
    choice1: "colorful super stuff",
    choice2: "IDK",
    choice3: "cascading style sheet",
    choice4: "color selected styles",
    correctAnswer: "cascading style sheet"
  },
  {
    question: "To close a function, you need?",
    choice1: "{}",
    choice2: "[]",
    choice3: "()",
    choice4: "''",
    correctAnswer: "()"
  },
  {
    question: "What symbol do you use to indicate your spot in an array?",
    choice1: "Arr",
    choice2: "-a-",
    choice3: "i",
    choice4: "ray",
    correctAnswer: "i"
  },
  {
    question: "What does JSON stand for?",
    choice1: "javaScript Object Notation,",
    choice2: "JavaScript Oriented Notation",
    choice3: "Java Syntax Origin Nodes,",
    choice4: "Java Synapse Offline Nodetation",
    correctAnswer: "javaScript Object Notation,"
  },
  {
    question: "What does HTML stand for?",
    choice1: "HyperText Markup Language",
    choice2: "High Transferring Module Lines",
    choice3: "Hyper Toxcology Marketing Language",
    choice4: "Hyper Tank Meta Line",
    correctAnswer: "HyperText Markup Language"
  }
]

let currentQuestionIndex = 0
let score = 0
let timeLeft = 60

let countdownInterval;

// EVENT LISTENER TO GET THE GAME GOING
startButton.addEventListener('click', startGame)
// CODE FOR THE STARTGAME
function startGame() {
  console.log('LETS ROLL!')
  startButton.classList.add('hide')
  question_containerElement.classList.remove('hide')
  showQuestion()
  countdownInterval = countdown()
}

function showQuestion() {
    const currentQuestion = questionData[currentQuestionIndex]

    choice1element.removeEventListener('click', checkAnswerHandler, false);
    choice2element.removeEventListener('click', checkAnswerHandler, false);
    choice3element.removeEventListener('click', checkAnswerHandler, false);
    choice4element.removeEventListener('click', checkAnswerHandler, false);
    
    questionElement.innerText = currentQuestion.question
    choice1element.innerText = currentQuestion.choice1
    choice2element.innerText = currentQuestion.choice2
    choice3element.innerText = currentQuestion.choice3
    choice4element.innerText = currentQuestion.choice4
  
    // add event listeners to answer buttons
    choice1element.addEventListener('click', checkAnswerHandler, false);
    choice1element.currentQuestion = currentQuestion;
    choice1element.choice = currentQuestion.choice1;

    choice2element.addEventListener('click', checkAnswerHandler, false)
    choice2element.currentQuestion = currentQuestion;
    choice2element.choice = currentQuestion.choice2;

    choice3element.addEventListener('click', checkAnswerHandler, false)
    choice3element.currentQuestion = currentQuestion;
    choice3element.choice = currentQuestion.choice3;

    choice4element.addEventListener('click', checkAnswerHandler, false)
    choice4element.currentQuestion = currentQuestion;
    choice4element.choice = currentQuestion.choice4;
  }
  
  // event listener for next button
nextButton.addEventListener('click', showNextQuestion)

function showNextQuestion() {
  // increment the question index
  currentQuestionIndex++
  if (currentQuestionIndex < questionData.length) {
    // show the next question
    showQuestion()
  } else {
    // end the quiz and show the score
    endGame()
  }
  nextButton.classList.add('hide')

  // reset answer buttons
  choice1element.classList.remove('correct', 'wrong')
  choice2element.classList.remove('correct', 'wrong')
  choice3element.classList.remove('correct', 'wrong')
  choice4element.classList.remove('correct', 'wrong')

  choice1element.disabled = false
  choice2element.disabled = false
  choice3element.disabled = false
  choice4element.disabled = false
}

function checkAnswerHandler(evt) {
  let choiceelement = evt.currentTarget;
  checkAnswer(choiceelement.currentQuestion, choiceelement.choice, choiceelement);
}

  function checkAnswer(question, selectedAnswer, selectedButton) {    
    if (selectedAnswer === question.correctAnswer) {
      selectedButton.classList.add('correct')
      alert("Correct!")
      score++
    } else {
      selectedButton.classList.add('wrong')
      timeLeft -= 10; // subtract 10 seconds for incorrect answer
    updateTime()
    alert('Wrong!')
    }
  
    // disable answer buttons
    choice1element.disabled = true
    choice2element.disabled = true
    choice3element.disabled = true
    choice4element.disabled = true
  
    // show next button
    nextButton.classList.remove('hide')
  }
  
  function endGame() {
    clearInterval(countdownInterval);
    question_containerElement.classList.add('hide')
    alert(`You scored ${score} out of ${questionData.length}!`)
    document.querySelector("#ScoreTrack").classList.remove('hide')
    resetgame();
  }
  
function resetgame(){
    currentQuestionIndex = 0;
  score = 0;
  nextButton.classList.add('hide');
  startButton.classList.remove('hide');
}

function countdown() {
  // update time left every second
  return setInterval(() => {
    timeLeft--;
    updateTime();
    if (timeLeft === 0) {
      // stop timer and end game when time is up
      clearInterval(countdownInterval);
      endGame();
    }
  }, 1000);
}

  function updateTime() {
    timeEL.textContent = `Time: ${timeLeft}`;
  }
  
  document.querySelector("#inputNameButton").addEventListener("click", function () {
  var initals = document.querySelector("#inputName").value
  var playerhistory =  JSON.parse(localStorage.getItem("playerhistory")) || []
  var playerObject = {
    player: initals,
    score: score,
  }
  playerhistory.push(playerObject)
  localStorage.setItem("playerhistory", JSON.stringify(playerhistory))
for (var i=0; i < playerhistory.length;
  i++)
  
  {var li= document.createElement("li")
li.textContent = playerhistory[i].player
document.querySelector(".score_number").append(li)
}
  })