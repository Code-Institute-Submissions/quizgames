// console.log("Hello World!");

/*----- Variables -----*/
var score = 0; // Start score
var username;
var qNum = 0;  // Question number 
var qtext = document.querySelector('#qtext');
var wins = 0;

/*------------------------------------ Constants ----*/
/*------------ Constants Stat boxes ------*/
const usernameBox = localStorage.getItem(username)
const winBox = document.querySelector('#winBox > h3');
const scoreBox = document.querySelector('#scoreBox > h3');
const qNumBox = document.querySelector('#qNumBox > h3');

/*------------ Constants Quiz Board ------*/
const gameboard = document.querySelector('#gameboard');
const qBox = document.querySelector('#qbox');
const a = document.querySelector('#answer1');
const b = document.querySelector('#answer2');
const c = document.querySelector('#answer3');
const d = document.querySelector('#answer4');
const allAnswers = [a, b, c, d];

//-------- Game over Const ----------*/
const gameOverSum = document.querySelector('#gameOverSum');
// const gameOverScore = document.querySelector('#gameOverScore > h3');

/*------------- Const rewards --------*/
const reward = 100;

/*------------Function---------*/
/*--------------Update stats ---------*/
// Code provided by my mentor Reuben Ferrante
$('#usernameBox')[0].innerHTML += localStorage.getItem("username");
// Code provided end!

// ---- Update score
function scoreBoard(score) {
    scoreBox.innerHTML = "<h3>" + score + "</h3>"
}

function updateScore(score, reward) {
    console.log(score + reward);
}

// ----- Update Wins

function updateWins(wins) {
    wins = parseInt(score) / 100;
    winBox.innerHTML = "<h4>" + wins + "</h4>"
//    console.log(score / 100);
}
/*----------End Game function -----------*/
function endGame() {
   gameOverSum.classList.remove("invisible");
   gameboard.classList.add("invisible");
//   gameOverScore.innerText = "<h4>" + score + "</h4>";
}

/*--------- Display Questions and Answers ---------*/
function dqa() {
    if (qNum == allQuestions.length) {
        console.log(qNum == allQuestions.length);
        endGame();
    }
    else {
        qtext = document.getElementById("qtext");
        qtext.innerHTML = "<h4>" + allQuestions[qNum].questions + "</h4>"
        document.getElementById("answer1").innerHTML = "<h4>" + allQuestions[qNum].answers["a"] + "</h4>"
        document.getElementById("answer2").innerHTML = "<h4>" + allQuestions[qNum].answers["b"] + "</h4>"
        document.getElementById("answer3").innerHTML = "<h4>" + allQuestions[qNum].answers["c"] + "</h4>"
        document.getElementById("answer4").innerHTML = "<h4>" + allQuestions[qNum].answers["d"] + "</h4>"
    //    console.log(qtext);
    }
}

/*------- Check answer and update score ---------*/
function checkAnswer(letter){
    console.log(letter);
    if(allQuestions[qNum].correct_answer == letter){
        alert('You got it right!');
        score += reward;
        scoreBoard(score);
        updateWins(wins);
        qNum++;
        dqa();
    } else {
        qNum++;
        dqa();
    }
    
}

/*---------------------- Questions and Answers--------*/
const allQuestions = [
    {
        questions: "What is Javascript?",
        answers: {
            a: "A computer language",
            b: "A planet in the galaxy",
            c: "A drink",
            d: "Who cares?"
        },
        correct_answer: "a"
    },
    {
        questions: "What is the fullname of CSS?",
        answers: {
            a: "Canal Screen Seven",
            b: "Cascading Style Sheet",
            c: "Crazy seven sisters",
            d: "Chess singel seas"
        },
        correct_answer: "b"
    },
    {
        questions: "What colours is it in the Norwegian flag?",
        answers: {
            a: "Green, Yellow and Red",
            b: "Blue, Black and Red",
            c: "Red, White and Blue",
            d: "Yellow, Blue and Red"
    },
        correct_answer: "c"
    },
    {
        questions: "What is the name of the first known cryptocurrency?",
        answers: {
            a: "Ripple",
            b: "Dash",
            c: "Tron",
            d: "Bitcoin"
        },
        correct_answer: "d"
    },
    {
        questions: "What is a computerbrand name?",
        answers: {
            a: "Axe",
            b: "Zippy",
            c: "Asus",
            d: "IBG"
        },
        correct_answer: "c"
    },
    {
        questions: "What is the best online software dev. school?",
        answers: {
            a: "Code Institue",
            b: "Barkley",
            c: "Code school",
            d: "Institue school"
        },
        correct_answer: "a"
    },
    {
        questions: "What is Coca Cola?",
        answers: {
            a: "A softdrink",
            b: "A beer",
            c: "A tea",
            d: "A drink"
        },
        correct_answer: "a"
    },
    {
        questions: "What language do they speak in Brazil?",
        answers: {
            a: "English",
            b: "Python",
            c: "Portugees",
            d: "Spanish"
        },
        correct_answer: "c"
    },
    {
        questions: "What team is Jurgen Klopp manager for?",
        answers: {
            a: "Brann",
            b: "Liverpool",
            c: "Vadmyra I.L",
            d: "Dortmund"
        },
        correct_answer: "b"
    },
    {
        questions: "Where do you put the page title in the HTML structure?",
        answers: {
            a: "Footer",
            b: "Not possible",
            c: "Body",
            d: "Head"
        },
        correct_answer: "d"
    }
];

/*-------------- Game Over -------------*/ 


