/*----- Variables -----*/
var score = 0; // The start score
var answer;
var username; 
var questions = 10; // The total number of question in one game
var qNo = 0;  // Question number 

/*------------------------------------ Constants ----*/
/*----------Const API --------*/
const baseURL = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy"

/*------------ Constants Stat boxes ------*/
const usernameBox = localStorage.getItem(username)
const correctAnswers = document.querySelector('correct-answers');
//const score-box;

/*------------ Constants Quiz Board ------*/
const gameboard = document.querySelector('gameboard');
const qbox = document.querySelector('qbox');
const qtext = document.querySelector('qtext');
const answer1 = document.querySelector('answer1');
const answer2 = document.querySelector('answer2');
const answer3 = document.querySelector('answer3');
const answer4 = document.querySelector('answer4');

/*------------- Constant rewards --------*/
const rewardEasy = 50;
const rewardMed = 75;
const rewardHard  = 100;
/*------------Function---------*/

/*----- API Configuration -----
function getData(category, cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + category);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function writeToDocument() {
    getData(category, function(data) {
        document.getElementById("data").innerHTML = data;
    });
}           */

/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/