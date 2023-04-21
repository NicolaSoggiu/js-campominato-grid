// CONNECT HTML WITH THE CONST IN JS
const eleGrid = document.querySelector(".grid");
const btnPlay = document.querySelector(".btn");

createGrid(100, eleGrid);

// FUNCTINO TO CREATE THE GRID WITHE THE NUMBER IN ORDER
function createGrid(numCells, orderCells) {
  for (let i = 1; i <= numCells; i++) {
    orderCells.innerHTML += `<div class="cell"> ${i} </div>`;
  }
  orderCells.addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
