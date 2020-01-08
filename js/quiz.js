var username = localStorage.getItem("username");
var level = localStorage.getItem("level");
var qmax = 10;
var qno = 0;
var qData;
var score = 0;
var answerRewardEasy = 50;
var answerRewardMed = 75;
var answerRewardHard = 100;
var correctAnswer;
var allAnswers;
var playerAnswer;


//--------------BaseURL Q & A API  

const baseURL = "https://opentdb.com/api.php?amount=50&category=21";
const baseURL = "https://opentdb.com/api.php?amount=50&category=23";
const baseURL = "https://opentdb.com/api.php?amount=50&category=9";
const baseURL = "https://opentdb.com/api.php?amount=50&category=24";
const baseURL = "https://opentdb.com/api.php?amount=50&category=26";

//-------------------------------User info boxes

const usernameBox = document.querySelector("#usernameBox > h3");
const correctAnswerBox = document.querySelector("#correctAnswerBox");
const scoreBox = document.querySelector("#scoreBox")

//-------------------------------QuizSection
const qbox = document.querySelector("#qbox");
const answer1 = document.querySelector("#answer-1");
const answer2 = document.querySelector("#answer-2");
const answer3 = document.querySelector("#answer-3");
const answer4 = document.querySelector("#answer-4");
const answerList = [answer1, answer2, answer3, answer4];
const answerBoxes = document.quesrySelector(".answer-grid-inner");
const pause = 2000;

//-----------------------------Game finished
const gameOverSummary = document.querySelector("#game-over-summary");
const gameOverScore = document.querySelector("#game-over-score");



//--------------------------------- API Configuration

function getData(baseURL, cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + category);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}


