const eleGrid = document.querySelector(".grid");
const btnPlay = document.querySelector(".btn");

btnPlay.addEventListener("click", function () {
  createGrid(100, eleGrid);
});

function createGrid(numCells, eleContainer) {
  eleContainer.innerHTML = "";
  for (let i = 1; i <= numCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerHTML = [i];
    eleContainer.append(cell);
    cell.addEventListener("click", function () {
      console.log(cell);
      cell.classList.toggle("active");
    });
  }
}
