

//CARSON
//Adds a board of the specified with and height to the canvas
//This function replaces any old board that already exists on the DOM
//The elements added to the DOM must contain listeners that apply animations 
//to the lines when hoovered and call onLineClicked with the correct line coordinate when that element is clicked
function constructBoard(width, height) {//boardObj (int int)
	// okay, DOM time!
	const board = document.getElementById('board');
	for(let row = 0; row < height; row++) {
		const tr = board.appendChild(document.createElement('tr'));
		for(let col = 0; col < width; col++) {
			const cell = tr.appendChild(document.createElement('td'));
			cell.classList.add('square', 'parity-' + ((row * height + col) % 2 === 0));
			const horzLine = cell.appendChild(document.createElement('div'));
			horzLine.classList.add('horz-line', 'line', 'line-horz-' + row + '-' + col);
			horzLine.onclick = function(){
				onLineClicked(col, row, false)
			};
			const vertLine = cell.appendChild(document.createElement('div'));
			vertLine.classList.add('vert-line', 'line', 'line-vert-' + row + '-' + col);
			vertLine.onclick = function(){
				onLineClicked(col, row, true)
			};
		}
	}
	// return {
	// 	vertical: {},//Each element is a boolean that indicates weather or not a line is present
	// 	horizontal: {},//Return real values eventually
	// }
	//addActionListener(... onLineClicked);
	//...
}

function getElement(row, col, isTop) {
	return 	document.getElementsByClassName("line-" + (isTop?"vert":"horz") + "-" + row + "-" + col)[0];
}

function isClicked(row, col, isTop) {
	// returns the boolean "is clicked"
	return getElement(row,col,isTop).classList.contains("clicked")
}
function markAsClicked(row, col, isTop) {
	return getElement(row,col,isTop).classList.add("clicked")
}



//PARI
//Writes the new segment to the board object and checks for new points / the end of the game
function onLineClicked(row,col, isTop) {// (int int boolean)
	console.log("" + row + "," + col + " was clicked");
	markAsClicked(row, col, isTop)
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
};