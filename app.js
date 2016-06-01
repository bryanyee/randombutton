var button = document.getElementById("button");
var maxXAxis = window.innerWidth - 124, maxYAxis = window.innerHeight - 44;
var locationX = maxXAxis/2, locationY = maxYAxis/2;

button.style.left = locationX.toString() + "px";
button.style.top = locationY.toString() + "px";

button.onmouseenter = function(){
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



/*Alternate function
button.addEventListener("mouseenter", function(){
	maxXAxis = window.innerWidth - 124;
	maxYAxis = window.innerHeight - 44;

	locationX = Math.random() * maxXAxis;
	locationY = Math.random() * maxYAxis;

	button.style.left = locationX.toString() + "px";
	button.style.top = locationY.toString() + "px";
});
*/



