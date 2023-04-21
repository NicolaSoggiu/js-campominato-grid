// CONNECT GRID HTML WITH THE CONST IN JS
const eleGrid = document.querySelector(".grid");

// for (i = 0; i < 100; i++) {
//   eleGrid.innerHTML += '<div class="cell"></div>';
// }

createGrid(100);

// FUNCTION

// CREATE A GRID FUNCTION
function createGrid(numCells) {
  for (let i = 0; i < numCells; i++) {
    eleGrid.innerHTML += `<div class="cell "></div>`;
  }
}
