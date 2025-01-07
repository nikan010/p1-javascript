// Initialiseer de score
let scoreaanwezig = 0;
let scoreafwezig = 0;
var resultaatafwezig;
var resultaataanwezig;
var totaaldagen;
// Selecteer de elementen

const aanwezig = document.getElementById('aanwezig');
const afwezig = document.getElementById('afwezig');

// Voeg een event listener toe voor de klik op de knop
if (conclick(aanwezig)){
    // Verhoog de score
    scoreaanwezig++;
    
};
if (conclick(afwezig)){
    // Verhoog de score
    scoreafwezig++;
    
};

var totaaldagen = afwezig + aanwezig;
var resultaatafwezig = afwezig / totaaldagen * 100;
var resultaatafwezig = aanwezig / totaaldagen * 100;

