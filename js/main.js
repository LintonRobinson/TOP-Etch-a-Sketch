/******************************************
/* Etch-A-Sketch
/*******************************************/

const container = document.querySelector('.container')
 

for (i=1;i <= 16;i++) {
    const createEtchGridRow = document.createElement('div');
    createEtchGridRow.classList.add('etch-grid-row');
    container.appendChild(createEtchGridRow);
};

const etchGridRowElement = document.querySelectorAll('.etch-grid-row');

etchGridRowElement.forEach(element => {
    for (i=1;i <= 16;i++) {
        const etchGrid = document.createElement('div');
        etchGrid.classList.add('etch-grid');
        element.appendChild(etchGrid);
    };
});

let generatedEtchGrid = document.querySelectorAll('.etch-grid')

generatedEtchGrid.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = "Black"
        console.log('Hi')
    })
});



function addBackgroundColor() {
    generatedEtchGrid.style.backgroundColor = "Black"
    console.log('Hi')
};






// Create 16 divs and 16 rows of those 16 divs




function createGrid() {
    
};