let gameTime = 10;
let time = gameTime;
let timeInterval;
let score = 0;
let wrong = 0;
let words =[];

let isPlaying = false;

const url = "https://random-word-api.herokuapp.com/word?number=1000";

const answer = document.querySelector('.answer');
const button = document.querySelector('.button');
const buttonStop= document.querySelector('.button_stop');

const wordDisplay = document.querySelector('.word-display');
const wordInput = document.querySelector('.word-input');
const wrongDisplay = document.querySelector('.score_wrong');

const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');

init();

function init(params) {
    getWords()
    
    
}

function checkStatus(params) {
    if (!isPlaying && time === 0) {
        buttonChange("game end..")
        clearInterval(checkInterval)
        
    }
    
}

function getWords(params) {
     words = ['a','b','c','d'];

     buttonChange("game start");
    
}


wordInput.addEventListener("input", checkMatch);

function checkMatch(params) {
    console.log("hi")
    if (wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {


        score++;
        scoreDisplay.innerText = score;
        wordInput.value= "";

        if (!isPlaying) {
            return
            
        }
        
    }
 
    
}


setInterval(countDown, 300);

function countDown(params) {
    time > 0 ? time -- : isPlaying = false;

    if (!isPlaying ) {
        clearInterval(timeInterval)
        
    }


    timeDisplay.innerText = time;
    
}

buttonChange('game start');

function buttonChange(text) {
    button.innerText = text;
    text === ' gamestart' ? button.classList.remove('loading') :  button.classList.add('loading') 

    
}


function run(params) {
    time = 3;
    timeInterval = setInterval(countDown,1000);

    time = gameTime;
    tieminterval 
}