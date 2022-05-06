
const container = document.getElementById("container");
const rows = document.getElementsByClassName("gridRow");
const cells = document.getElementById("cellid");

createGrid(100);

let clear = document.getElementById("clear");
clear.addEventListener('click', event => {
    clearCells();
    let choice = prompt("Choose a grid size (max. 100)", 100);
    if (choice <= 100) {
        createGrid(choice);
    } else {
        alert("That number is not valid!");
    }
});

function clearCells() {
    const rowsToRemove = document.querySelectorAll(".gridRow");
    for (let c = 0; c < rowsToRemove.length; c++) {
        container.removeChild(rowsToRemove[c]);   
    }
}

function createGrid(size) {
    createRows(size);
    createColumns(size);
    initiateHover();
}

function createRows(rowNum) {
    for (let r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row);
        row.className = "gridRow";
        row.setAttribute("style", "display: flex");
    }
}

function createColumns(cellNum) {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell);
            newCell.className = "cell";
            newCell.id = "cellid";
        }
    }
}

function initiateHover() {
    const select = document.querySelectorAll("#cellid");
    for (let i = 0; i < select.length; i++) {
        select[i].addEventListener('mouseenter', function() {
            select[i].setAttribute("style", "background-color: #788bff");
        })
    }
}


