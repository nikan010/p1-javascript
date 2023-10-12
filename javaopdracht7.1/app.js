let budget = 100;

let product = 60;

let saldo = document.getElementById("het overige bedrag")

if (budget => product) {
 let over = budget - product
saldo.innerHTML = "u heeft genoeg geld om het te kopen " + over + "is er over van uw bedrag : " + budget + "euro";
saldo.style.color = "green";
}
else {
    saldo.innerHTML = "u heeft helaas niet genoeg geld op uw saldo";
    saldo.style.color = "red";
}