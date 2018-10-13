<script type="text/javascript">
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

var letters = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s","t","u", "v", "W", "x", "y", "z"]; 

var computerGuess = letters[Math.floor(Math.random() * letters.length)];

var userGuessesLeft = function() { 
 	document.getElementById("left").innerHTML = guessesLeft;
};
var userGSoFar = function() {
	document.getElementById("soFar").innerHTML = gSoFar.join(", ");
};
var newCompNumber = function() {
	this.compNumber = this.letters[Math.floor(Math.random() * this.letters.length)];
}

var reset = function() {
	guessesLeft = 10;
	gSoFar = [];
	compNumber = null;

	newCompNumber();
	userGuessesLeft();
	userrGSoFar();

}
newCompNumber();
userGuessesLeft();

document.onkeyup = function(event) {
	guessesLeft--;
  	var userLetter = String.fromCharCode(event.keyCode).toLowerCase();
  	gSoFar.push(userLetter);
	userGuessesLeft();
	userGSoFar();

	if (guessesLeft > 0){
            if (userLetter == compNumber){
              	wins++;
				document.getElementById("win").innerHTML = wins;
				alert("you win");
                reset();
            }
        }else if(guessesLeft == 0){
           	losses++;
 			document.getElementById("lose").innerHTML = losses;
 			alert("you lose");
     		reset();
     	}

}



</script>