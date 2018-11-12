window.onload = function() {

function getRndm() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return letters[Math.floor(Math.random()*26)];
};        

//var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var correctAnswer = getRndm();
//console.log(correctAnswer);
//console.log(letters[0]);

wins = 0;
losses = 0;
guessesLeft = 9;
guesses = [];
var isGameOver = false;
var isCorrectAnswer = false;
var lost = false;

var winsStr = document.getElementById("wins");
var lossesStr = document.getElementById("losses");
var guessesLeftStr = document.getElementById("guessesLeft");
var guessesStr = document.getElementById("guesses");

winsStr.textContent = wins;
lossesStr.textContent = losses;
guessesLeftStr.textContent = guessesLeft;
guessesStr.textContent = guesses;

//console.log(guessesStr);

function validKey(a) {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var isTrue = false;
    //console.log(a);
    for (var i = 0; i < letters.length; i++) {
        //console.log(a);
        if(letters[i] == a.toLowerCase()) {
            isTrue = true;
            //console.log(a);
            //console.log(letters[i]);
        }
    };
    return isTrue;
};

function isGameOver() {
    if (guessesLeft <= 0 || isCorrectAnswer == true){
        isGameOver == true;

    }
};



document.onkeyup = function(e) {
    var guess = "";
    if (isGameOver == false) {

    if (validKey(e.key)) {
        guess = e.key;
    }
    //console.log(validKey(e.key));

    if (correctAnswer == guess) {
        isCorrectAnswer = true;
        wins++;
        guessesLeft = 9;
        winsStr.textContent = wins;
        guessesLeftStr.textContent = guessesLeft;
        isGameOver = true;
        //console.log("niceone");
    } else if(correctAnswer != guess) {
        guesses.push(guess);
        if (guessesLeft > 0) {
        guessesLeft--;
        //console.log(guessesLeft);
        guessesStr.textContent = guesses;
        guessesLeftStr.textContent = guessesLeft;
        }
        else {
            lost = true;
            isGameOver = true;
        };
        
    }
    } else if(isGameOver == true){             
        guesses = [];
        guessesStr.textContent = guesses;
        if (lost) {
        losses++;
        lossesStr.textContent = losses;
        guessesLeft = 9;
        guessesLeftStr.textContent = guessesLeft;
        };
        correctAnswer = getRndm();
        lost = false;
        isGameOver = false;
        //console.log(correctAnswer);
    };
    

    //console.log(guess);

};

};