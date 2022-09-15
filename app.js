/* Imports */

/* Get DOM Elements */
const cityInput = document.getElementById('cityname');
const climateSelect = document.getElementById('climate');
const buildSelect = document.getElementById('build');
const upButton = document.getElementById('update-attractions');
const todo = document.getElementById('features');

const dispCity = document.getElementById('inputcity');
const dispClimate = document.getElementById('selclimate');
const dispBuild = document.getElementById('selbuild');
const attract = document.getElementById('attractions-output');

const adStyle = document.getElementById('ad-page');

/* State */
const ad = {
    city: '',
    buildish: '',
    climate: '',
};

/* Events */
cityInput.addEventListener('input', () => {
    ad.city = cityInput.value;
    displayAd();
});

buildSelect.addEventListener('change', () => {
    ad.buildish = buildSelect.value;
    displayAd();
});

climateSelect.addEventListener('change', () => {
    ad.climate = climateSelect.value;
    displayAd();
});

upButton.addEventListener('click', () => {});

/* Display Functions */

function dispControl() {
    buildSelect.value = ad.buildish;
}
function displayAd() {
    adStyle.classList.add(ad.climate);
    dispCity.textContent = ad.city;
    dispBuild.src = 'assets/buildish/' + ad.buildish + '.jpg';
    dispClimate.src = 'assets/climate/' + ad.climate + '.jpg';
}
// (don't forget to call any display functions you want to run on page load!)

dispControl();
displayAd();
