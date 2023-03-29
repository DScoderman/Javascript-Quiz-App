// to get the button set up and set up constants

const startButton = document.getElementById("start-button")
const question_containerElement = document.getElementById("question_container")
const questionElement = document.getElementById("question")
const AnswerButtonsElement = document.getElementById("Answer-grid");
var timeEL = document.querySelector(".time")

// need to create an array

question = [
{quuestion: }
]
// need to create a question bank

startButton.addEventListener("click", QuizBegin)

// this uses event listener to tie countdown when clicked

startButton.addEventListener("click", countdown)
console.log('started')


function QuizBegin ()  {
    alert("lets roll!")
startButton.add("hide")


next_question()
}

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