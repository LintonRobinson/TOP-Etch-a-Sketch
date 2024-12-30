/******************************************
/* Etch-A-Sketch
/*******************************************/
// Container Element
const container = document.querySelector('.container');

//Start Button Element
const startBtn = document.querySelector('#startBtn');

// Create Default Grid Rows (16)
for (i=1;i <= 16;i++) {
    // The value of the input is the counter condition of the loop
    const createEtchGridRow = document.createElement('div');
    createEtchGridRow.classList.add('etch-grid-row');
    container.appendChild(createEtchGridRow);
};

// Create Default Grid Squares In Each Row (16)
const etchGridRowElement = document.querySelectorAll('.etch-grid-row');
etchGridRowElement.forEach(element => {
    for (i=1;i <= 16;i++) {
        const etchGrid = document.createElement('div');
        etchGrid.classList.add('etch-grid');
        element.appendChild(etchGrid);
    };
});

// Mouse Hover Changes Grid Background
let generatedEtchGrid = document.querySelectorAll('.etch-grid')
generatedEtchGrid.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = "Black";
    })
});


 
function removeDefaultGrid () {
    const etchGrid = document.querySelectorAll('.etch-grid')
    const etchGridRow = document.querySelectorAll('.etch-grid-row');
    etchGrid.forEach(element => element.remove());
    etchGridRow.forEach(element => element.remove());
}

function createUserGrid() {
    // Store User Grid Number 
    let userGridInput = Number(document.querySelector('#userGridInput').value);
    // Create Grid Rows Based off of User Grid Number
    for (i=1;i <= userGridInput;i++) {
        const createEtchGridRow = document.createElement('div');
        createEtchGridRow.classList.add('etch-grid-row');
        container.appendChild(createEtchGridRow);
    };
    // Create Grid Squares Based off of User Grid Number
    const etchGridRowElement = document.querySelectorAll('.etch-grid-row');
    etchGridRowElement.forEach(element => {
        for (i=1;i <= userGridInput;i++) {
             const etchGrid = document.createElement('div');
             etchGrid.classList.add('etch-grid');
             element.appendChild(etchGrid);
         };
     });
    // Mouse Hover Changes Grid Background
    let generatedEtchGrid = document.querySelectorAll('.etch-grid');
    generatedEtchGrid.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = "Black"
        })
    });

};


// Start Button Event Listener
startBtn.addEventListener('click' , () => {
    let userGridInput = Number (document.querySelector('#userGridInput').value)
    // Less than 100 Grids + Correct Input Filter 
    if (userGridInput <= 100 && typeof userGridInput === "number") {
        removeDefaultGrid();
        createUserGrid();
        document.querySelector('#userGridInput').value = "";
    } else {
        alert("Enter valid NUMBER that is equal to or less than 100.");
        document.querySelector('#userGridInput').value = "";
    }
    
});


