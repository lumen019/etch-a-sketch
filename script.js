const gridContainer = document.querySelector("#gridContainer");
let gridSize = 16;
let totalCells = gridSize * gridSize;

let isMouseDown = false;
gridContainer.addEventListener("mousedown", () => isMouseDown = true);
document.addEventListener("mouseup", () => isMouseDown = false);
gridContainer.addEventListener('dragstart', (e) => e.preventDefault());

function createGrid () { 
    totalCells = gridSize * gridSize;
    gridContainer.innerHTML = " ";
    
    for (let i = 0; i < totalCells; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell")
        cell.style.width = `${100/gridSize}%`;
        cell.style.height = `${100/gridSize}%`;
        gridContainer.appendChild(cell);

        cell.addEventListener("mousedown", () => {
            cell.style.backgroundColor = "aqua";
        })

        cell.addEventListener("mousemove", () => {
            if (isMouseDown === true) {
                cell.style.backgroundColor = "aqua";
            }
        })
    }
}

function createRgbGrid () {
    totalCells = gridSize * gridSize;
    gridContainer.innerHTML = " ";
    
    for (let i = 0; i < totalCells; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell")
        cell.style.width = `${100/gridSize}%`;
        cell.style.height = `${100/gridSize}%`;
        gridContainer.appendChild(cell);

        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        cell.addEventListener("mousedown", event => {
            cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })

        cell.addEventListener("mousemove", event => {
            if (isMouseDown === true) {
                cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
        })
    }
}

const button = document.querySelector("#prompt");
button.addEventListener("click", () => {
        gridSize = prompt("Enter your desired grid size (1-100).");
        gridSize = Number(gridSize)
        if (gridSize < 1 || gridSize > 100 || isNaN(gridSize)) {
            alert("Your value is outside the accepted range.")
            gridContainer.innerHTML = " ";
            gridSize = 16;
        }
            createGrid();
});

const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", () => {
        gridContainer.innerHTML = " ";
        createGrid();
    })

const darkMode = document.querySelector("#darkMode");
darkMode.addEventListener ("click", () => {
    const bodyElement = document.body;
    bodyElement.style.backgroundColor = "#121212"
    gridContainer.style.backgroundColor = "#2c2c2c"
    createRgbGrid ();
})

createGrid();
