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
const attractList = document.getElementById('attractions-output');

const adStyle = document.getElementById('ad-page');

/* State */
const ad = {
    city: '',
    buildish: 'null',
    climate: 'null',
    attractions: [],
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

upButton.addEventListener('click', () => {
    const attract = todo.value;
    ad.attractions.push(attract);
    dispAttract();
    todo.value = '';
});

/* Display Functions */

function dispControl() {
    buildSelect.value = ad.buildish;
}
function displayAd() {
    adStyle.classList.value = 'ad-page';
    adStyle.classList.add(ad.climate, ad.buildish);
    dispCity.textContent = ad.city;
    dispBuild.src = 'assets/buildish/' + ad.buildish + '.jpg';
    dispClimate.src = 'assets/climate/' + ad.climate + '.jpg';
}

function dispAttract() {
    attractList.innerHTML = '';

    for (const attract of ad.attractions) {
        const li = document.createElement('li');
        li.textContent = attract;
        attractList.append(li);
    }
}
// (don't forget to call any display functions you want to run on page load!)

dispControl();
displayAd();
/*dispAttract();*/
