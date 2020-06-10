var higscoreLink = document.getElementById("highscore-link");
var timerText = document.getElementById("timer-text");
var timerCountdown = document.getElementById("timer");
var introBox = document.getElementById("intro");
var startBtn = document.getElementById("start");
var quizBox = document.getElementById("questions");
var questionText = document.getElementById("question-text");
// var choiceBtn = document.getElementsByClassName("choice");
var choiceBtn1 = document.getElementById("choice1");
var choiceBtn2 = document.getElementById("choice2");
var choiceBtn3 = document.getElementById("choice3");
var choiceBtn4 = document.getElementById("choice4");
var correctOrIncorrect = document.getElementById("correct-or-incorrect");
var resultsBox = document.getElementById("results");
var scoreText = document.getElementById("score");
var initalsInput = document.getElementById("input-initials");
var highscoreBox = document.getElementById("highscore");
var highscoreList = document.getElementById("highscore=list");
var backBtn = document.getElementById("back");
var clearBtn = document.getElementById("clear");
var quizActive = false

var questionList = [
    "Commonly used data types do not include:", 
    "The condition in an if/else statement is enclosed within_____.",
    "Arrays in JavaScript can be used to store ____.",
    "Strings must be enclosed within ___ when being assigned to variables.",
    "A very useful tool used during development and debugging for printing content to the debugger is:"
]
var choiceList = [
    ["strings", "booleans", "alerts", "numbers"],
    ["quotes", "curly brackets", "parentheses", "square brackets"],
    ["numbers and strings", "other arrays", "booleans", "all of the above"],
    ["commas", "curly brackets", "quotes", "parentheses"],
    ["JavaScript", "terminal/bash", "for loops", "console.log"]
]
var answerKey = [2, 2, 3, 2, 3]

// console.log(choiceBtn.getAttribute("data-index-number"))

var choiceNumber = 0
var questionNumber = 0
function startQuiz() {
    if (questionNumber < questionList.length) {
        quizActive = true
        introBox.setAttribute("class", "hide");
        quizBox.setAttribute("class", "");
    
        questionText.textContent = questionList[questionNumber];
        // for (i = 0; i < choiceList[questionNumber].length; i++){
        //     var choiceNumber = i;
        //     choiceBtn[i].textContent = choiceList[questionNumber][choiceNumber];
        // }

        choiceBtn1.innerText = choiceList[questionNumber][0];
        choiceBtn2.innerText = choiceList[questionNumber][1];
        choiceBtn3.innerText = choiceList[questionNumber][2];
        choiceBtn4.innerText = choiceList[questionNumber][3];
    }
    else {
        quizBox.setAttribute("class", "hide")
        resultsBox.setAttribute("class", "")
        quizActive = false
    }


}

function answerQuestion() {
    console.log(choiceResponse)
    if (choiceResponse === answerKey[questionNumber]){
        correctOrIncorrect.textContent = "Correct!"
        correctOrIncorrect.setAttribute("class", "incorrect")
    }
    else {
        correctOrIncorrect.textContent = "Incorrect!"
        correctOrIncorrect.setAttribute("class", "incorrect")
    }
    questionNumber++
    startQuiz();
}

startBtn.addEventListener("click", startQuiz);
choiceBtn1.addEventListener("click", function() {
    choiceResponse = 0;
    answerQuestion()
    });
choiceBtn2.addEventListener("click", function() {
    choiceResponse = 1;
    answerQuestion();
    });
choiceBtn3.addEventListener("click", function() {
    choiceResponse = 2;
    answerQuestion();
    });
choiceBtn4.addEventListener("click", function() {
    choiceResponse = 3;
    answerQuestion();
    });
// choiceBtn[answerKey[questionNumber]].addEventListener("click", answerQuestion);


// Commonly used data types do not include:
// 1. strings
// 2. booleans
// 3. alerts
// 4. numbers

// The condition in an if/else statement is enclosed within__.
// 1. quotes
// 2. curly brackets
// 3 parentheses
// 4. square brackets

// Arrays in JavaScript can be used to store ____.
// 1. numbers and strings
// 2. other arrays
// 3. booleans
// 4. all of the above

// Strings must be enclosed within ___ when being assigned to variables.
// 1. commas
// 2. curly brackets
// 3. quotes
// 4. parentheses

// A very useful tool used during development and debugging for printing content to the debugger is:
// 1. JavaScript
// 2. terminal/bash
// 3. for loops
// 4. console.log