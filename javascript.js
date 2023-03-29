// to get the button set up and set up constants

const startButton = document.getElementById("start-button")
const question_containerElement = document.getElementById("question_container")
const questionElement = document.getElementById("question")
const AnswerButtonsElement = document.getElementById("Answer-grid");
var timeEL = document.querySelector(".time")

const choice1element = documentdocument.getElementById("choice1")
const choice2element = documentdocument.getElementById("choice2")
const choice3element = documentdocument.getElementById("choice3")
const choice4element = documentdocument.getElementById("choice4")
// need to create an array

question = [
{question: "What does CSS stand for?", choice1: "colorful super stuff", choice2: "IDK", choice3: "cascading style sheet", choice4: "color selected styles", correctAnswer: "cascading style sheet" },

{question: "To close a function, you need?", choice1: "{}", choice2: "[]", choice3: "()", choice4: "''", correctAnswer: "()" },

{question: "", choice1: "{}", choice2: "[]", choice3: "()", choice4: "''", correctAnswer: "()" }]
// need to create a question bank

startButton.addEventListener('click', function()  {


}) 

// this uses event listener to tie countdown when clicked

startButton.addEventListener("click", function countdown() {
console.log('started')


function QuizBegin ()  {
    alert("lets roll!")
startButton.add("hide")


next_question()
}
}); 

function next_question()  {


}

// setting up the timer for the code
function countdown ()  {
var timerinterval =setinterval(function() {

    timeLeft--;
    timeEL.textContent  = secondsLeft


    if(SecondsLeft === 0)  {

    clearInterval(timerinterval);
    sendMessage('game over!');
    showScore

    }
},  75000);
}

// used for after user chooses a response, a new question must appear
function next_question()  {

    if (question = true)   {
    alert('Correct!')
    }
    else (question = false) 
    alert('wrong')


    {



    }
showQuestion()


}


// function HideNext()   {

//     if (next-button = true)    {}

// }


function QuizEnd()  {

}



function HighScore(event)   {

    event.preventDefault();

}




function SubmitRecord(event)  {



}




// this uses event listener to tie countdown when clicked

QuizBegin.addEventListener("click", countdown)