

var playerCount = 10;
var currentTurn = 0;

//CARSON
//Adds a board of the specified with and height to the canvas
//This function replaces any old board that already exists on the DOM
//The elements added to the DOM must contain listeners that apply animations 
//to the lines when hoovered and call onLineClicked with the correct line coordinate when that element is clicked
function constructBoard(width, height) {//boardObj (int int)

	const board = document.getElementById('board');
	for (let row = 0; row < height; row++) {
		const localRow = row;
		const tr = board.appendChild(document.createElement('tr'));
		for (let col = 0; col < width; col++) {
			const localCol = col;
			const cell = tr.appendChild(document.createElement('td'));
			cell.id = 'square-' + row + '-' + col;
			cell.classList.add('square', 'parity-' + ((row * height + col) % 2 === 0));

			const horzLine = cell.appendChild(document.createElement('div'));
			horzLine.classList.add('horz-line', 'line', 'line-horz-' + row + '-' + col);
			horzLine.onclick = function() {
				onLineClicked(localRow, localCol, false);
			};

			const vertLine = cell.appendChild(document.createElement('div'));
			vertLine.classList.add('vert-line', 'line', 'line-vert-' + row + '-' + col);
			vertLine.onclick = function() {
				onLineClicked(localRow, localCol, true);
			};
		}
	}
}

function getElement(row, col, isVert) {
	return document.getElementsByClassName("line-" + (isVert ? "vert" : "horz") + "-" + row + "-" + col)[0];
}

function isClicked(row, col, isVert) {
	// returns the boolean "is clicked"
	for (var i = 0; i < 10; i++) {
		if (getElement(row, col, isVert).classList.contains("clicked" + i))
			return true;
	}
	return false;
}

function markAsClicked(row, col, isVert, playerID) {
	return getElement(row, col, isVert).classList.add("clicked" + playerID);
}



//PARI
//Writes the new segment to the board object and checks for new points / the end of the game
function onLineClicked(row, col, isVert) {// (int int boolean)
	console.log("" + row + "," + col + "(" + (isVert ? "v" : "h") + ") was clicked");
	markAsClicked(row, col, isVert, currentTurn);
	if (currentTurn == playerCount)
		currentTurn = 0;
	currentTurn++;

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


window.onload = () => {
	// this runs when the DOM is loaded
	const board = constructBoard(5, 5);

	showRules();


	const player1Name = getText("Enter player1's name");
	const player2Name = getText("Enter player2's name");


	//Rules stuff
	var rulesModal = document.getElementById("rules-modal");
	var rulesButton = document.getElementById("rules-button");
	var rulesSpan = document.getElementsByClassName("close-rules-modal")[0];

	var nextButton1 = document.getElementById("next");
	var rule2Modal = document.getElementById("rule2-modal");
	var rule2Span = document.getElementsByClassName("close-rule2-modal")[0];

	var nextButton2 = document.getElementById("next2id");
	var rule3Modal = document.getElementById("rule3-modal");
	var rule3Span = document.getElementsByClassName("close-rule3-modal")[0];

	var nextButton3 = document.getElementById("next3id");
	var rule4Modal = document.getElementById("rule4-modal");
	var rule4Span = document.getElementsByClassName("close-rule4-modal")[0];
	var nextButton4 = document.getElementById("next4id");

	rulesButton.onclick = function() {
		rulesModal.style.display = "block";
	}

	rulesSpan.onclick = function() {
		rulesModal.style.display = "none";
	}

	nextButton1.onclick = function() {
		rulesModal.style.display = "none";
		rule2Modal.style.display = "block";
	}

	rule2Span.onclick = function() {
		rule2Modal.style.display = "none";
	}

	nextButton2.onclick = function() {
		rule2Modal.style.display = "none";
		rule3Modal.style.display = "block";
	}

	rule3Span.onclick = function() {
		rule3Modal.style.display = "none";
	}

	nextButton3.onclick = function() {
		rule3Modal.style.display = "none";
		rule4Modal.style.display = "block";
	}

	nextButton4.onclick = function() {
		rule4Modal.style.display = "none";
	}

	rule4Span.onclick = function() {
		rule4Modal.style.display = "none";
	}

};



