
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var computerNumber = null;

var letters = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s","t","u", "v", "W", "x", "y", "z"]; 

var computerGuess = letters[Math.floor(Math.random() * letters.length)];

var userGuessesLeft = function() { 
 	document.getElementById("left").innerHTML = guessesLeft;
};;
var userGuessSoFar = funtion()
    document.getElementById("soFar").innerHTML = guessSoFar.join (",");
;
varnewComputer = function() {
    this.computerNumber = this.letter[Math.floor(Math.random() * this.letters.length)];
}
var reset = function() {
    guessesLeft = 10 ;
    guessesSoFar = [];
    computerNumber = null;

    newComputerNumber();
    userGuessestLeft();
    userGuessSoFar();
}
newComputerNumber();
userGuessestLeft();

document.onkeyup = function(event){
    guessesLeft--;
    var userLetter = String.fromCharCode(event.keyCode).toLowerCase();
    guessesSoFar.push(userLetter);
    userGuessestLeft();
    userGuessSoFar();

    if (guessesLeft > 0 ) {
        if (userLetter == computerNumber) {
            wins++;
            document.getElementById("win").innerHTML = wins; alert("you win");
            reset();
        }
        else if (guessesLeft == 0 ) {
            losses++;
        }

            document.getElementById("lose").innerHTML = losses;
            alert("you lose");
            reset();

            }
        }
