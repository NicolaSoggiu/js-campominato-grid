const eleGrid = document.querySelector(".grid");
let btnPlay = document.querySelector(".btn");

btnPlay.addEventListener("click", function () {
  createGrid(100, eleGrid);
  function createGrid(numCells, orderCells) {
    for (let i = 1; i <= numCells; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.innerHTML = [i];
      orderCells.append(cell);
      cell.addEventListener("click", function () {
        console.log("cell", cell);
        cell.classList.toggle("active");
      });
    }
  }
});
debugger;
