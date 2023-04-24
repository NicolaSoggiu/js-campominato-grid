// DECLARE THE VARIABLES
const eleGrid = document.querySelector(".grid");
const btn = document.querySelector(".btn");
const easy = document.querySelector("#easy");
const medium = document.querySelector("#medium");
const hard = document.querySelector("#hard");
// BUTTON TO GENERATE THE GRID

btn.addEventListener("click", function () {
  const chooseDifficulty = document.querySelector("#btnDifficulty").value;
  if (chooseDifficulty == "easy") {
    createGrid(100, eleGrid);
  } else if (chooseDifficulty == "medium") {
    createGrid(81, eleGrid);
    cell.classList.remove("cell");
    cell.classList.add("cell_medium");
  } else if (chooseDifficulty == "hard") {
    createGrid(49, eleGrid);
    cell.classList.remove("cell");
    cell.classList.add("cell_hard");
  }
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
