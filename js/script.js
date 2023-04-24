// DECLARE THE VARIABLES
const eleGrid = document.querySelector(".grid");
const btnPlay = document.querySelector(".btn");

// BUTTON TO GENERATE THE GRID
btnPlay.addEventListener("click", function () {
  createGrid(100, eleGrid);
});

// FUNCTINO TO CREATE THE GRID
function createGrid(numCells, eleContainer) {
  eleContainer.innerHTML = "";
  for (let i = 1; i <= numCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerHTML = [i];
    eleContainer.append(cell);
    // ADD COLOR WITH THE CLICK
    cell.addEventListener("click", function () {
      console.log(cell);
      cell.classList.toggle("active");
    });
  }
}
