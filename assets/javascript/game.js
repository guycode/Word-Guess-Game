
'use strict';

var selectableWords =           
    [
        "SHARKS",
        "KINGS",
        "RED WINGS",
        "OILERS",
        "DUCKS",
        "AVALANCHE",
        "RANGERS",
        "ISLANDERS",
        "FLAMES",
        "WILD",
        "STARS",
        "LIGHTNING",
        "BRUINS",
    ];

const maxTries = 10;            
var guessedLetters = [];        
var currentWordIndex;           
var guessingWord = [];          
var remainingGuesses = 0;       
var hasFinished = false;         
var wins = 0;                  



// Reset our game-level variables
function resetGame() {
    remainingGuesses = maxTries;

   
    currentWordIndex = Math.floor(Math.random() * (selectableWords.length));

  
    guessedLetters = [];
    guessingWord = [];

    document.getElementById("hangmanImage").src = "";


    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        guessingWord.push("_");
    }   

    document.getElementById("pressKeyTryAgain").style.cssText= "display: none";
    document.getElementById("gameover-image").style.cssText = "display: none";
    document.getElementById("youwin-image").style.cssText = "display: none";

    updateDisplay();
};

function updateDisplay() {

    document.getElementById("totalWins").innerText = wins;

    var guessingWordText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        guessingWordText += guessingWord[i];
    }

    //
    document.getElementById("currentWord").innerText = guessingWordText;
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
};


function evaluateGuess(letter) {

    var positions = [];

    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        if(selectableWords[currentWordIndex][i] === letter) {
            positions.push(i);
        }
    }

};

function checkWin() {
    if(guessingWord.indexOf("_") === -1) {
        document.getElementById("youwin-image").style.cssText = "display: block";
        document.getElementById("pressKeyTryAgain").style.cssText= "display: block";
        wins++;
        winSound.play();
        hasFinished = true;
    }
};


