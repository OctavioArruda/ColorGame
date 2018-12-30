/* Variables */
var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]
var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for(i = 0; i < squares.length; i++){
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // Always use style.backgroundColor instead of style.background, so it can work in any browser

    // Add click listeners to squares
    squares[i].addEventListener("click", function(){
        /* alert("Clicked!")
        Grab the color of a clicked square 
        then compare color to picked color
        */
       var clickedColor = this.style.backgroundColor;
       if(clickedColor === pickedColor){
           alert("Correct");
       }
       else alert("Wrong")
    });
}

