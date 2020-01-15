

//CARSON
//Adds a board of the specified with and height to the canvas
//This function replaces any old board that already exists on the DOM
//The elements added to the DOM must contain listeners that apply animations 
//to the lines when hoovered and call onLineClicked with the correct line coordinate when that element is clicked
function constructBoard(width, height) {//boardObj (int int)
	//real code
	//...
	return {
		vertical: {},//Each element is a boolean that indicates weather or not a line is present
		horizontal: {},//Return real values eventually
	}
	//addActionListener(... onLineClicked);
	//...
}


//PARI
//Writes the new segment to the board object and checks for new points / the end of the game
function onLineClicked(x, y, isTop) {// (int int boolean)

	//if (gameover...)
	//	onGameEnd(...)
}



//MUSTAFA
//Called when the game ends
//Displays who won and the scores for each size
function onGameEnd(winnerName) {// (string)



}

//Gili and Katherine and Rishi 
//Displays information and rules about how the game works
function showRules() {// ()

}

//TED & VINCENT
//Opens a dialog that allows the user to enter some text
//Returns what the user typed in
function getText(prompt) {//string (string)

}



var board = constructBoard(5, 5);

showRules();


var player1Name = getText("Enter player1's name");
var player2Name = getText("Enter player2's name");




