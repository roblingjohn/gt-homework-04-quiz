var highscoreLink = document.getElementById("highscore-link");
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
var initialsForm = document.querySelector("#initials-form")
var initalsInput = document.getElementById("input-initials");
var scoreObject = {}
var highscoreBox = document.getElementById("highscores");
var highscoreList = document.getElementById("highscore-list");
var backBtn = document.getElementById("back");
var clearBtn = document.getElementById("clear");
var quizActive = false
var secondsLeft = 75
var interval
var timeScore

var scoreMemory = JSON.parse(localStorage.getItem("scores"));
console.log(scoreMemory)
function setMemory() {
    if (localStorage.getItem("scores")===null) {
        localStorage.setItem("scores", JSON.stringify([]))


}
}
setMemory()

// definitions of questions and answers 
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

// quiz starts on button click 
var choiceNumber = 0
var questionNumber = 0
function startQuiz() {
    if (questionNumber < questionList.length) {
        quizActive = true
        // hides intro box and displays quiz box 
        introBox.setAttribute("class", "hide");
        resultsBox.setAttribute("class", "hide");
        highscoreBox.setAttribute("class", "hide");

        quizBox.setAttribute("class", "");
        highscoreLink.setAttribute("class", "hide")
        
    
        // insterts question text 
        questionText.textContent = questionList[questionNumber];
        // inserts answer chouces text 
        choiceBtn1.innerText = choiceList[questionNumber][0];
        choiceBtn2.innerText = choiceList[questionNumber][1];
        choiceBtn3.innerText = choiceList[questionNumber][2];
        choiceBtn4.innerText = choiceList[questionNumber][3];
    }
    // if all questions answered, ends quiz, stops time, hides quiz box, and adds result box 
    else {
        quizBox.setAttribute("class", "hide")
        resultsBox.setAttribute("class", "")
        secondsLeft = secondsLeft + 1
        timerCountdown.innerText = secondsLeft
        scoreText.innerHTML = secondsLeft
        quizActive = false
        questionNumber = 0
        correctOrIncorrect.setAttribute("class", "hide")

    }
}

// sets timer 
function startTimer() {
    secondsLeft = 74
    interval = setInterval(function() {
        if (quizActive === true) {
            timerCountdown.innerText = secondsLeft
            secondsLeft--
        }
        else if (quizActive === false) {
        clearInterval(interval);
        timeScore = parseInt(secondsLeft) + 1
        }
        if (secondsLeft < 0){
            questionNumber = 10;
            startQuiz();

    }
}, 1000);

}

// shows responses to correct and incorrect answers 
function answerQuestion() {
    console.log(choiceResponse)
    if (choiceResponse === answerKey[questionNumber]){
        correctOrIncorrect.textContent = "Correct!"
        correctOrIncorrect.setAttribute("class", "correct")
    }
    else {
        correctOrIncorrect.textContent = "Incorrect!"
        correctOrIncorrect.setAttribute("class", "incorrect")
        secondsLeft = secondsLeft - 10
        // timerCountdown = timerCountdown - 10
    }
    questionNumber++
    startQuiz();
}

// event listeners for buttons 
startBtn.addEventListener("click", function() {
    startQuiz();
    startTimer();
});
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

// event listener for initials entry 
initialsForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var newInitials = initalsInput.value
    resultsBox.setAttribute("class", "hide");
    highscoreBox.setAttribute("class", "")
    console.log(newInitials)
    newInitials = newInitials.toUpperCase();
    var scoreObject = {
        "initials": newInitials, 
        "score": secondsLeft};
    console.log(scoreObject)
    scoreMemory = JSON.parse(localStorage.getItem("scores"));
    console.log(scoreMemory);
    scoreMemory.push(scoreObject);
    console.log(scoreObject);
    // localStorage.setItem("scores", JSON.stringify(scoreObject))
    scoreMemory.sort((a, b) => (b.score > a.score) ? 1 : -1);
    for (i = 0; i < scoreMemory.length; i++) {
        console.log(i);
        var highscoreDisplay = document.createElement("li")
        highscoreList.append(highscoreDisplay)
        highscoreDisplay.innerHTML = scoreMemory[i].initials + ": " + scoreMemory[i].score



    }
    localStorage.setItem("scores", JSON.stringify(scoreMemory))

})

var areScoresDisplayed = false
highscoreLink.addEventListener("click", function(){
    highscoreLink.setAttribute("class", "hide");
    introBox.setAttribute("class", "hide");
    highscoreBox.setAttribute("class", "");
    if (areScoresDisplayed === false){
        areScoresDisplayed = true
        var scoreMemory = JSON.parse(localStorage.getItem("scores"));
        for (i = 0; i < scoreMemory.length; i++) {
            console.log(i);
            var highscoreDisplay = document.createElement("li")
            highscoreList.append(highscoreDisplay)
            highscoreDisplay.innerHTML = scoreMemory[i].initials + ": " + scoreMemory[i].score
    }
}
})

backBtn.addEventListener("click", function(){
    highscoreBox.setAttribute("class", "hide");
    resultsBox.setAttribute("class", "hide")
    introBox.setAttribute("class", "")
    highscoreLink.setAttribute("class", "col")
    areScoresDisplayed = false
    highscoreList.innerHTML = ""
    timerCountdown.textContent = 75
})

clearBtn.addEventListener("click", function(){
    localStorage.setItem("scores", JSON.stringify([ ]))
    highscoreList.innerHTML = "";
})
