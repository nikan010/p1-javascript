function multiply() {
    var getal1 = parseFloat(document.getElementById("getal1").value);
    var getal2 = parseFloat(document.getElementById("getal2").value);
    var resultaat;

    if (!isNaN(getal1) && !isNaN(getal2)) {
        resultaat = getal1 * getal2;
        document.getElementById("resultaat").textContent = "het antwoord is " + resultaat;
        document.body.style.backgroundColor = "green ";
    } else {
        document.getElementById("resultaat").textContent = "het antwoord is ";
        document.body.style.backgroundColor = "red ";
    }
}
function devide() {
    var getal1 = parseFloat(document.getElementById("getal1").value);
    var getal2 = parseFloat(document.getElementById("getal2").value);
    var resultaat;

    if (!isNaN(getal1) && !isNaN(getal2)) {
        resultaat = getal1 / getal2;
        document.getElementById("resultaat").textContent = "het antwoord is " + resultaat;
        document.body.style.backgroundColor = "green ";
    } else {
        document.getElementById("resultaat").textContent = "het antwoord is ";
    }
}
function minus() {
    var getal1 = parseFloat(document.getElementById("getal1").value);
    var getal2 = parseFloat(document.getElementById("getal2").value);
    var resultaat;

    if (!isNaN(getal1) && !isNaN(getal2)) {
        resultaat = getal1 - getal2;
        document.getElementById("resultaat").textContent = "het antwoord is " + resultaat;
        document.body.style.backgroundColor = "green ";
    } else {
        document.getElementById("resultaat").textContent = "het antwoord is ";

    }
}
function add() {
    var getal1 = parseFloat(document.getElementById("getal1").value);
    var getal2 = parseFloat(document.getElementById("getal2").value);
    var resultaat;

    if (!isNaN(getal1) && !isNaN(getal2)) {
        resultaat = getal1 + getal2;
        document.getElementById("resultaat").textContent = "het antwoord is " + resultaat;
        document.body.style.backgroundColor = "green ";
    } else {
        document.getElementById("resultaat").textContent = "het antwoord is ";
    }
}

