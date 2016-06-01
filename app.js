var button = document.getElementById("button");
var maxXAxis = window.innerWidth - 124, maxYAxis = window.innerHeight - 44;
var locationX = maxXAxis/2, locationY = maxYAxis/2;
var buttonCounter = 0, timerValue = 10;
var timer;
var resultsBox = document.getElementById("resultsBox");

//set the button's initial location
button.style.left = locationX.toString() + "px";
button.style.top = locationY.toString() + "px";


button.onmouseenter = function(){
	//Sets the timer and button counter on the first mouseenter
	if (timer === undefined){
		resultsBox.style.display = "none";
		timerValue = 10;
		rightHeader.innerHTML = timerValue;
		rightHeader.style.color = "red";
		timer = setInterval(countdown, 1000);
		buttonCounter = 0;
	}

	//Sets the counter in the button
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
};


function countdown(){
	timerValue--;
	rightHeader.innerHTML = timerValue;

	//Stop the timer when it reaches zero
	if (timerValue === 0) {
		clearInterval(timer);
		timer = undefined;
		rightHeader.style.color = "white";
		
		showResults();
	}
}

function showResults(){
	resultsBox.style.display = "block";
}


/*Alternate onmouse event function
button.addEventListener("mouseenter", function(){
	//same code as the button.onmouseenter function
});
*/