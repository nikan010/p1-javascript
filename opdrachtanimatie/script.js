var beweegbareDiv = document.getElementById("beweegbareDiv");
function beweegRechts() {
var positieLinks = 0;
function animatieStap() {
positieLinks += 10;
beweegbareDiv.style.left = positieLinks + "px";
if (positieLinks < window.innerWidth - 50) {
requestAnimationFrame(animatieStap);
}
}
animatieStap();
}
window.onload = function() {
beweegRechts();
};