var button = document.getElementById("button");
var maxXAxis = window.innerWidth - 124, maxYAxis = window.innerHeight - 44;
var locationX, locationY, buttonCounter, timerValue, timer;
var resultsBox = document.getElementById("resultsBox");
var restartButton = document.getElementById("restartButton");

prepareGame();

function prepareGame(){
	//Set the button's initial location
	locationX = maxXAxis/2;
	locationY = maxYAxis/2;
	button.style.left = locationX.toString() + "px";
	button.style.top = locationY.toString() + "px";

	//Initializes/resets the variables to prepare the game
	resultsBox.style.display = "none";
	buttonCounter = 0;
	timerValue = 10;
	rightHeader.innerHTML = timerValue;
	button.innerHTML = "<p>Hey there.</p>";
	button.onmouseenter = enterButton;
}

function enterButton(){
	//Sets the timer on the first mouseenter
	if (timer === undefined){
		rightHeader.style.color = "red";
		timer = setInterval(countdown, 1000);
	}

	//Updates the counter in the button
	buttonCounter++;
	button.innerHTML = "<p>" + buttonCounter + "</p>";

	//window height and width are calculated within the function to adjust if the user changes the window size
	maxXAxis = window.innerWidth - 124;
	maxYAxis = window.innerHeight - 44;

	//calculates a random location for the button, based on the current window size
	locationX = Math.random() * maxXAxis;
	locationY = Math.random() * maxYAxis;

	//sets the location properties of the button
	button.style.left = locationX.toString() + "px";
	button.style.top = locationY.toString() + "px";
}


function countdown(){
	timerValue--;
	rightHeader.innerHTML = timerValue;

	//Stop the timer and deactivate the button when the countdown reaches zero
	if (timerValue === 0) {
		button.onmouseenter = undefined;
		clearInterval(timer);
		timer = undefined;
		rightHeader.style.color = "white";
		
		showResults();
	}
}

function showResults(){
	resultsBox.style.display = "block";
	resultsBox.innerHTML = "Score: " + buttonCounter + "<br><br>" + resultsBox.innerHTML;
}