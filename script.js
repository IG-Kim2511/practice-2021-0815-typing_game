
let gameTime = 10;
let time = gameTime;
let timeInterval;
let score = 0;
let wrong = 0;
let words = [];

const url = "https://random-word-api.herokuapp.com/word?number=1000";


const answer = document.querySelector(".answer");
const button = document.querySelector(".button");
const buttonStop = document.querySelector(".button_stop");

const wordDisplay = document.querySelector(".word-display");
const wordInput = document.querySelector(".word-input");
const wrongDisplay = document.querySelector(".score_wrong");

const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector(".time");

// js 1 start

init();

function init(params) {
    
}