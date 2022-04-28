// import functions and grab DOM elements
const climatePic = document.getElementById('climatePic');
const archiPic = document.getElementById('archiPic');
const castlePic = document.getElementById('castlePic');
const climateSelect = document.getElementById('climateSelect');
const archiSelect = document.getElementById('archiSelect');
const castleSelect = document.getElementById('castleSelect');

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

climateSelect.addEventListener('change', (e) => {
    const climate = e.target.value;
    climatePic.src = `./assets/${climate}.jpeg`;
});
archiSelect.addEventListener('change', (e) => {
    const archi = e.target.value;
    archiPic.src = `./assets/${archi}.jpeg`;
});
castleSelect.addEventListener('change', (e) => {
    const castle = e.target.value;
    castlePic.src = `./assets/${castle}.jpeg`;
});