
const container = document.getElementById("container");
const rows = document.getElementsByClassName("gridRow");
const cells = document.getElementById("cellid");

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
            newCell.textContent = "";
        }
    }
}

function initiateHover() {

    const select = document.querySelectorAll("#cellid");
    console.log(select);

    for (let i = 0; i < select.length; i++) {
        select[i].addEventListener('mouseover', function() {
            console.log("cell " + `${i}`); 
            select[i].setAttribute("style", "background-color: black");
        })

    }

}


