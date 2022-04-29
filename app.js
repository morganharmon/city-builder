// import functions and grab DOM elements
const climatePic = document.getElementById('climatePic');
const archiPic = document.getElementById('archiPic');
const castlePic = document.getElementById('castlePic');
const climateSelect = document.getElementById('climateSelect');
const archiSelect = document.getElementById('archiSelect');
const castleSelect = document.getElementById('castleSelect');
const countSec = document.getElementById('countSec');
const submitButton = document.getElementById('submitButton');
const sloganInput = document.getElementById('sloganInput');
const sloganDisplay = document.getElementById('sloganDisplay');
const cityNameInput = document.getElementById('cityNameInput');
const cityNameSec = document.getElementById('cityNameSec');

// let state
let climateCount = 0;
let archiCount = 0;
let castleCount = 0;
let sloganList = [];
let cityNameList = [];
let concatList = [];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

climateSelect.addEventListener('change', (e) => {
    const climate = e.target.value;
    climatePic.src = `./assets/${climate}.jpeg`;
    climateCount++;
    displayCount();
});
archiSelect.addEventListener('change', (e) => {
    const archi = e.target.value;
    archiPic.src = `./assets/${archi}.jpeg`;
    archiCount++;
    displayCount();
});
castleSelect.addEventListener('change', (e) => {
    const castle = e.target.value;
    castlePic.src = `./assets/${castle}.jpeg`;
    castleCount++;
    displayCount();
});

function displayCount() {
    countSec.textContent = `You have changed the climate ${climateCount} times. You have changed the architecture style ${archiCount} times. You have changed the castle ${castleCount} times.`;
}

submitButton.addEventListener('click', () => {
    sloganList.push(sloganInput.value);
    sloganInput.value = '';
    cityNameList.push(cityNameInput.value);
    cityNameSec.textContent = cityNameInput.value;
    cityNameInput.value = '';
    concatLists();
    displayList();
    concatList = [];
});

function concatLists() {
    for (let slogan of sloganList) {
        for (let name of cityNameList) {
            if (cityNameList.indexOf(name) === sloganList.indexOf(slogan)) {
                concatList.push(name + ': ' + slogan);
            }
        }
    }

}

function displayList() {
    sloganDisplay.textContent = '';
    for (let val of concatList) {
        const list = document.createElement('li');
        list.textContent = val;
        sloganDisplay.append(list);
    }
}
