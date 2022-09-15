/* Imports */

/* Get DOM Elements */
/*const cityInput = document.getElementById('cityname');
const climateSelect = document.getElementById('climate');*/
const buildSelect = document.getElementById('build');
/*const dispCity = document.getElementById('inputcity');
const dispClimate = document.getElementById('selclimate');*/
const dispBuild = document.getElementById('selbuild');

/* State */
const ad = {
    buildish: 'skyscraper',
};

/* Events */
buildSelect.addEventListener('change', () => {
    ad.buildish = buildSelect.value;
    displayAd();
});

/* Display Functions */

function dispControl() {
    buildSelect.value = ad.buildish;
}
function displayAd() {
    dispBuild.src = 'assets/buildish/' + ad.buildish + '.png';
}
// (don't forget to call any display functions you want to run on page load!)

dispControl();
displayAd();
