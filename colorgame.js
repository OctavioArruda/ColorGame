/* Variables */

var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (i = 0; i < squares.length; i++) {
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // Always use style.backgroundColor instead of style.background, so it can work in any browser

    // Add click listeners to squares
    squares[i].addEventListener("click", function () {
        /* alert("Clicked!")
        Grab the color of a clicked square 
        then compare color to picked color
        */
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            //    alert("Correct");
            messageDisplay.textContent = "Correct";
            ChangeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else {
            //    alert("Wrong");
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function ChangeColors(color) {
    // loop through all squares
    // change each color to match given color
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    /*
    1. make Array
    2. add random rgb colors to array 
    3. return that array
    */
    var arr = []
    i = 0
    while (i < num) {
        arr.push(randomColor());
        i++;
    }

    return arr;
}

function randomColor(){
    /*
    pick a red from 0 to 255
    pick a green from 0 to 255
    pick a blue from 0 to 255
    */
   var red = Math.floor(Math.random() * 256);
   var green = Math.floor(Math.random() * 256);
   var blue = Math.floor(Math.random() * 256);

   return "rgb(" + red +", " + green + ", " + blue + ")";
}



