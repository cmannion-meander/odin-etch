console.log("Hello, world!");

// add 16x16 grid of square divs to container
const container = document.querySelector('#container');

function generateGrid(sides) {
    for (let i = 1; i <= sides*sides; i++) {

        // create grid
        const content = document.createElement('div');
        content.classList.add(`content`);
        //content.textContent = `${i}`;
        size = (100/sides);
        content.style.width = size+'%';
        content.style.paddingTop = size+'%';
        container.appendChild(content);

        // add mouseover color change
        let elements = document.getElementsByClassName("content");
        for (var j=0; j<elements.length; j++) {
            elements[j].addEventListener("mouseover", (event) => {
                // highlight the mouseover target
                event.target.style.backgroundColor = "blue";
              });
        };
    };
};

function clearGrid() {
    let elements = document.getElementsByClassName("content");
        for (var j=0; j<elements.length; j++) {
            elements[j].style.backgroundColor = "";
        };
};

function deleteOldGrid() {
    let elements = document.getElementsByClassName("content");
    let numberDivs = elements.length;
        for (var j=0; j<numberDivs; j++) {
            elements[0].remove();
        };
};

// add button to generate a new grid
const btnNew = document.querySelector("#generateGrid");

btnNew.addEventListener("click", function () {
    let squares = prompt("Enter the number of squares for each side");
    if (squares > 0 && squares <= 100) {
        deleteOldGrid();
        generateGrid(squares);
    }
    else {
        alert("The side length must be between 1 and 100!")
    };
});

// add button to reset current grid
const btnReset = document.querySelector("#clearGrid");

btnReset.addEventListener("click", function () {
    clearGrid();
});

generateGrid(4);