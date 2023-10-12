let budget = 100;

let productprijs = 60

let saldo = document.getElementById("Resultaat")

if (budget => productprijs) {
 let over = budget - productprijs
saldo.innerHTML = "u heeft genoeg geld om het te kopen " + over + "is er over van uw bedrag : " + budget + "euro";
saldo.style.color = "green";
}
else {
    saldo.innerHTML = "u heeft helaas niet genoeg geld op uw saldo";
    saldo.style.color = "red";
}