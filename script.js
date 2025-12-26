const gridContainer = document.querySelector("#gridContainer");
let gridSize = 16;
let totalCells = gridSize * gridSize;

let isMouseDown = false;
gridContainer.addEventListener("mousedown", () => isMouseDown = true);
window.addEventListener("mouseup", () => isMouseDown = false);
gridContainer.addEventListener('dragstart', (e) => e.preventDefault());

function createGrid () { 
    for (let i = 0; i < totalCells; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell")
        cell.style.width = `${100/gridSize}%`;
        cell.style.height = `${100/gridSize}%`;
        gridContainer.appendChild(cell);

        cell.addEventListener("mousedown", event => {
            cell.style.backgroundColor = "red";
        })

        cell.addEventListener("mousemove", event => {
            if (isMouseDown === true) {
                cell.style.backgroundColor = "red";
            }
        })
    }
}

const button = document.querySelector("#prompt");
button.addEventListener("click", event => {
        gridSize = prompt("Enter your desired grid size (1-100).");
        gridSize = Number(gridSize)
        if (gridSize < 1 || gridSize > 100 || isNaN(gridSize)) {
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

const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", event => {
        gridContainer.innerHTML = " ";
        createGrid();
    })
