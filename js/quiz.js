console.log("Hello World!");

/*----- Variables -----*/
var score = 0; // Start score
var wins = 0;  // Start win
var username;
var allQ = 10; // The total number of question in one game
var qNum = 0;  // Question number 
var qtext = document.querySelector('#qtext');


/*------------------------------------ Constants ----*/
/*------------ Constants Stat boxes ------*/
const usernameBox = localStorage.getItem(username)
const winBox = document.querySelector('#winBox');
const scoreBox = document.querySelector('#scoreBox > h3');

/*------------ Constants Quiz Board ------*/
const gameboard = document.querySelector('gameboard');
const qBox = document.querySelector('#qbox');
const a = document.querySelector('#answer1');
const b = document.querySelector('#answer2');
const c = document.querySelector('#answer3');
const d = document.querySelector('#answer4');
const allAnswers = [a, b, c, d];

/*------------- Const rewards --------*/
const reward = 100;

/*-------------- Game Over -------------*/ 
const gameOverSum = document.querySelector('#game-over-sum');
const gameOverScore = document.querySelector('#game-over-score');

/*------------Function---------*/

/*--------------Update stats ---------*/
// Code provided by my mentor Reuben Ferrante
$('#usernameBox')[0].innerHTML += localStorage.getItem("username");
// Code provided end!

/*----- cached element references -----*/
/*----- event listeners -----*/
/*---------------------- Questions and Answers--------*/
const allQuestions = [
    {
        questions: "What is your name?",
        answers: {
            a: "Reuben",
            b: "Morten",
            c: "Bob",
            d: "Paul"
        },
        correct_answer: "a"
    },
    {
        questions: "What is your Favourite dog?",
        answers: {
            a: "Spike",
            b: "Doug",
            c: "hjdsf",
            d: "Charizard"
        },
        correct_answer: "b"
    },
    {
        questions: "What is your name?",
        answers: {
            a: "Reuben",
            b: "Morten",
            c: "Bob",
            d: "Paul"
    },
        correct_answer: "d"
    }
];

function dqa() {
    qtext = document.getElementById("qtext");
    qtext.innerHTML = "<h3>" + allQuestions[qNum].questions + "</h3>"
    document.getElementById("answer1").innerHTML = "<h3>" + allQuestions[qNum].answers["a"] + "</h3>"
    document.getElementById("answer2").innerHTML = "<h3>" + allQuestions[qNum].answers["b"] + "</h3>"
    document.getElementById("answer3").innerHTML = "<h3>" + allQuestions[qNum].answers["c"] + "</h3>"
    document.getElementById("answer4").innerHTML = "<h3>" + allQuestions[qNum].answers["d"] + "</h3>"

    console.log(qtext);
  //  document.getElementById()

}
/*---------- Working code 
function checkAnswer(letter){
    console.log(letter);
    if(allQuestions[qNum].correct_answer == letter){
        qNum++;
        dqa();
    } else {
        qNum++;
        dqa();
    }
}
---------*/

/*------- Check answer and update score ---------*/
function updateScore(score) {
    scoreBox.innerHTML = "<h3>" + score + "</h3>"
}

function checkAnswer(letter, callback){
    if(allQuestions[qNum].correct_answer == letter){
        reward;
        qNum++;
        dqa();
    } else {
        qNum++;
        dqa();
    }
    callback(score);
}

checkAnswer()

//     END OF TUTOR CALL ANSWERS

/*----

function updateScore(callback) {
    var correctAnswer = score += Math.round(score + reward);
    score++;
}

correctAnswer(checkAnswer);


--------*/

/*-------- 

function correctAnswer(callback) {
    if(checkAnswer(letter) === true) {
    score += Math.round(score + reward);
    score++;
    callback(score);
    }
    console.log(callback(score));
    
}

// correctAnswer(myScore);

-------*/

/*---   
function updateScore(score) {
    if(checkAnswer(letter) === true) {
        console.log("returned True")
        score += Math.round(score + reward);
        score++;
    } else {
        console.log("did not return True")
    }
}
// updateScore();










/*

Variable for level.

Display Questions -- Just need to build more on it

Select Questions - ON CLICK FROM THE HTML

Check if correct WE HAVE STARTED IT! :)
    If Correct - Increase level




*/