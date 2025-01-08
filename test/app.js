let scoreAanwezig = 0;
let scoreAfwezig = 0;

// Initialiseer de score
const aanwezigButton = document.getElementById('aanwezigknop');
const afwezigButton = document.getElementById('afwezigknop');
const scoreAanwezigElement = document.getElementById('scoreAanwezig');
const scoreAfwezigElement = document.getElementById('scoreAfwezig');
const percentageAanwezigElement = document.getElementById('percentageAanwezig');
const percentageAfwezigElement = document.getElementById('percentageAfwezig');
// Selecteer de elementen


function aantalaanwezigheid(){
    scoreAanwezig++;
    scoreAanwezigElement.textContent = 'aantalaanwezigheidsdagen: ' + scoreAanwezig;
  
}


function aantalaanwezigheid(){
    scoreAfwezig++;
    scoreAanwezigElement.textContent = 'aantalafwezigheidsdagen: ' + scoreAfwezig;
 
}



/*

//ai generated
// Selecteer de elementen



// Functie om percentages bij te werken
function updatePercentages() {
    // Totaal aantal dagen (aanwezig + afwezig)
    const totaalDagen = scoreAanwezig + scoreAfwezig;

    if (totaalDagen > 0) {
        const percentageAanwezig = (scoreAanwezig / totaalDagen) * 100;
        const percentageAfwezig = (scoreAfwezig / totaalDagen) * 100;

        // Update de percentages
        percentageAanwezigElement.textContent = 'Aanwezig percentage: ' + percentageAanwezig.toFixed(2) + '%';
        percentageAfwezigElement.textContent = 'Afwezig percentage: ' + percentageAfwezig.toFixed(2) + '%';
    }
}

// Voeg event listeners toe voor de knoppen
afwezigButton.addEventListener('click', verhoogAfwezig);
aanwezigButton.addEventListener('click', verhoogAanwezig);
*/