console.log("Hello World!");

/*----- Variables -----*/
var score = 0; // The start score
var username;
var allQ = 10; // The total number of question in one game
var qNum = 0;  // Question number 
var qtext = document.querySelector('#qtext');


/*------------------------------------ Constants ----*/
/*------------ Constants Stat boxes ------*/
const usernameBox = localStorage.getItem(username)
const correctAnswers = document.querySelector('#correctAnswers');
const scoreBox = document.querySelector('#scoreBox > h2');

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


function checkAnswer(letter){
    console.log(letter);
    if(allQuestions[qNum].correct_answer == letter){
        alert('You got it right!');
        qNum++;
        dqa();
        return true;
    } else {
        qNum++;
        dqa();
        return false;
    }
}

/*-- function userAnswer(callback) {
    var letter = alert('You got it right!');
    callback(letter);
}

userAnswer(); ---*/

//     END OF TUTOR CALL ANSWERS

function updateScore() {
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