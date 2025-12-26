const gridContainer = document.querySelector("#gridContainer");
let gridSize = 16;
let totalCells = gridSize * gridSize;
let isMouseDown = false;
let isDarkMode = false;



gridContainer.addEventListener("mousedown", () => isMouseDown = true);
document.addEventListener("mouseup", () => isMouseDown = false);
gridContainer.addEventListener('dragstart', (e) => e.preventDefault());

function randomRgb () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

gridContainer.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;
    if (!e.target.classList.contains("cell")) return;

    if (isDarkMode) {
        e.target.style.backgroundColor = randomRgb();
    } else {
        e.target.style.backgroundColor = "#6ec6ff";
    }   
})

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
            cell.style.backgroundColor = "#6ec6ff";
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

        cell.addEventListener("mousedown", () => {
            cell.style.backgroundColor = randomRgb();
        })
    }
}

const resizeBtn = document.querySelector("#resizeBtn");
resizeBtn.addEventListener("click", () => {
        gridSize = prompt("Enter your desired grid size (16-100).");
        gridSize = Number(gridSize)
        if (gridSize < 16 || gridSize > 100 || isNaN(gridSize)) {
            alert("Your value is outside the accepted range.")
            gridContainer.innerHTML = " ";
            gridSize = 16;
            createGrid();
            return
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
    isDarkMode = true;
    document.body.style.backgroundColor = "#121212"
    gridContainer.style.backgroundColor = "#2c2c2c"
    createRgbGrid ();
})

const lightMode = document.querySelector("#lightMode");
lightMode.addEventListener ("click", () => {
    isDarkMode = false;
    document.body.style.backgroundColor = "white"
    gridContainer.style.backgroundColor = "white"
    createGrid();
})


createGrid();
