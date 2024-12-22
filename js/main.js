/******************************************
/* Etch-A-Sketch
/*******************************************/

const container = document.querySelector('.container')
 





for (i=1;i < 6;i++) {
    const createEtchGridRow = document.createElement('div');
    createEtchGridRow.classList.add('etch-grid-row');
    container.appendChild(createEtchGridRow);
    console.log('Test')
};

const etchGridRowElement = document.querySelectorAll('.etch-grid-row');

etchGridRowElement.forEach(element => {
    for (i=1;i < 6;i++) {
        const etchGrid = document.createElement('div');
        etchGrid.classList.add('etch-grid');
        element.appendChild(etchGrid);
    };
});










// Create 16 divs and 16 rows of those 16 divs




function createGrid() {
    
};