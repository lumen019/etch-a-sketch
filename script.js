const gridContainer = document.querySelector("#gridContainer");
let gridSize = 16;
let totalCells = gridSize * gridSize;

function createGrid () { 
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
}


const button = document.querySelector("#prompt");
button.addEventListener("click", event => {
        gridSize = prompt("Enter your desired grid size (1-100).");
        if (gridSize > 100) {
            alert("Your value is outside the accepted range.")
            gridContainer.innerHTML = " ";
            gridSize = 16;
            createGrid();
        } else {
            totalCells = gridSize * gridSize;
            gridContainer.innerHTML = " ";
            createGrid();
        }
    })


createGrid();