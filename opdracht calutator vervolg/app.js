function multiply() {
    var getal1 = parseFloat(document.getElementById("getal1").value);
    var getal2 = parseFloat(document.getElementById("getal2").value);
    var resultaat;

    if (!isNaN(getal1) && !isNaN(getal2)) {
        resultaat = getal1 * getal2;

        if (resultaat <= 0) {
            document.getElementById("resultaat").textContent = "Helaas! Je kan GEEN getal onder de 0 berekenen!";
            document.body.style.backgroundColor = "Red";
        } else {
            document.getElementById("resultaat").textContent = "Het resultaat is: " + resultaat;
            document.body.style.backgroundColor = "LightGreen";
            logAntwoord(getal1, getal2, "*", resultaat);
    }
}
}


function plus() {
    var getal1 = parseFloat(document.getElementById("getal1").value);
    var getal2 = parseFloat(document.getElementById("getal2").value);
    var resultaat;

    if (!isNaN(getal1) && !isNaN(getal2)) {
        resultaat = getal1 + getal2;

        if (resultaat <= 0) {
            document.getElementById("resultaat").textContent = "Helaas! Je kan GEEN getal onder de 0 berekenen!";
            document.body.style.backgroundColor = "Red";
        } else {
            document.getElementById("resultaat").textContent = "Het resultaat is: " + resultaat;
            document.body.style.backgroundColor = "LightGreen";
            logAntwoord(getal1, getal2, "+", resultaat);
    }
}
}


function min() {
    var getal1 = parseFloat(document.getElementById("getal1").value);
    var getal2 = parseFloat(document.getElementById("getal2").value);
    var resultaat;

    if (!isNaN(getal1) && !isNaN(getal2)) {
        resultaat = getal1 - getal2;

        if (resultaat <= 0) {
            document.getElementById("resultaat").textContent = "Helaas! Je kan GEEN getal onder de 0 berekenen!";
            document.body.style.backgroundColor = "Red";
        } else {
            document.getElementById("resultaat").textContent = "Het resultaat is: " + resultaat;
            document.body.style.backgroundColor = "LightGreen";
            logAntwoord(getal1, getal2, "-", resultaat);
    }
}
}

function divide() {
    var getal1 = parseFloat(document.getElementById("getal1").value);
    var getal2 = parseFloat(document.getElementById("getal2").value);
    var resultaat;

    if (!isNaN(getal1) && !isNaN(getal2)) {
        resultaat = getal1 / getal2;

        if (resultaat <= 0) {
            document.getElementById("resultaat").textContent = "Helaas! Je kan GEEN getal onder de 0 berekenen!";
            document.body.style.backgroundColor = "Red";
        } else {
            document.getElementById("resultaat").textContent = "Het resultaat is: " + resultaat;
            document.body.style.backgroundColor = "LightGreen";
            logAntwoord(getal1, getal2, "/", resultaat);
    }
}
}


function logAntwoord(getal1, getal2, operator, resultaat) {
    var loglijst = document.getElementById("loglijst");
    var listItem = document.createElement("li");
    listItem.textContent = getal1 + " " + operator + " " + getal2 + " = " + resultaat;
    loglijst.appendChild(listItem);
}

function resetlog() {
var loglijst = document.getElementById("loglijst");
loglijst.innerHTML = "";
}