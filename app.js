var gameButton = document.getElementById("gameButton");
var resultsBox = document.getElementById("resultsBox");
var leftHeader = document.getElementById("leftHeader");
var restartButton = document.getElementById("restartButton");
var maxXAxis = 776, maxYAxis = 406;
var locationX, locationY, buttonCounter, timerValue, timer, highScore = 0;

prepareGame();

function prepareGame(){
	//Set the button's initial height
	locationX = 0;						//(the default horizontal location is centered)
	locationY = maxYAxis/2;				//(the default vertical location is at the top)
	gameButton.style.left = locationX.toString() + "px";
	gameButton.style.top = locationY.toString() + "px";

	//Initializes/resets the variables to prepare the game
	resultsBox.style.display = "none";
	buttonCounter = 0;
	timerValue = 10;
	rightHeader.innerHTML = timerValue;
	gameButton.innerHTML = "Hey there.";
	gameButton.onmouseenter = enterButton;

	//If the first game is already played, display the high score
	if(highScore > 0){
		leftHeader.innerHTML = "High Score: " + highScore;
		leftHeader.style.display = "inline";
	}
}

function enterButton(){
	//Sets the timer on the first mouseenter
	if (timer === undefined){
		rightHeader.style.color = "red";
		timer = setInterval(countdown, 1000);
	}

	//Updates the counter in the button
	buttonCounter++;
	gameButton.innerHTML = buttonCounter;

	//Calculates a random location for the button
	locationX = (Math.random() - 0.5) * maxXAxis;	//(the default horizontal location is centered)
	locationY = Math.random() * maxYAxis;			//(the default vertical location is at the top)

	//Sets the location properties of the button
	gameButton.style.left = locationX.toString() + "px";
	gameButton.style.top = locationY.toString() + "px";
}


function countdown(){
	timerValue--;
	rightHeader.innerHTML = timerValue;

	//Stop the timer and deactivate the button when the countdown reaches zero
	if (timerValue === 0) {
		gameButton.onmouseenter = undefined;
		clearInterval(timer);
		timer = undefined;
		rightHeader.style.color = "white";
		
		showResults();
	}
}

function showResults(){
	//Show the current score, and update the high score if necessary
	if(buttonCounter > highScore){
		highScore = buttonCounter;
		resultsBox.innerHTML = "Score: " + buttonCounter + "<br>New High Score!<div id='restartButton' onclick='prepareGame()'>Restart</div>";
	}
	else { resultsBox.innerHTML = "Score: " + buttonCounter + "<div id='restartButton' onclick='prepareGame()'>Restart</div>" }

	resultsBox.style.display = "block";
}