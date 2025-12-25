const gridContainer = document.querySelector("#gridContainer");
const gridSize = 16;
const totalCells = gridSize * gridSize;


for (let i = 0; i < totalCells; i++){
    const cell = document.createElement("div");
    cell.classList.add("cell")
    cell.style.width = `${100/gridSize}%`;
    cell.style.height = `${100/gridSize}%`;
    gridContainer.appendChild(cell);
    cell.addEventListener("mouseover", event => {
        cell.style.backgroundColor = "red";
    })
}

