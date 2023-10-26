
var displayElement = document.getElementById("display");


var buttonElement = document.getElementById("incrementButton");

var getal = 0;

buttonElement.addEventListener("click", function () {
    getal++;

    if (getal === 10) {
        getal = 0;
    }

    displayElement.textContent = getal;
});
