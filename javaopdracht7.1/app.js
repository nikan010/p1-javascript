function controleerBudget() {
    var budget = parseFloat(prompt("Wat is je budget?"));
    var productPrijs = parseFloat(prompt("Wat is de prijs van het product dat je wilt kopen?"));
    var resultaatElement = document.getElementById("resultaat");

    if (isNaN(budget) || isNaN(productPrijs)) {
        resultaatElement.innerHTML = '<p style="color: black;"><strong>Ongeldige invoer. Voer geldige bedragen in.</strong></p>';
    } else {
        if (budget >= productPrijs) {
            resultaatElement.innerHTML = '<p style="color: green;"><strong>U heeft genoeg geld!</strong></p>';
        } else {
            resultaatElement.innerHTML = '<p style="color: red;"><strong>Te weinig geld!.</strong></p>';
        }
    }
}
