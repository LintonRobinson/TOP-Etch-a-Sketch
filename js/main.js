/******************************************
/* Etch-A-Sketch
/*******************************************/
// Container Element
const container = document.querySelector('.container');

//Start Button Element
const startBtn = document.querySelector('#startBtn');

// Latest Grid Size

let mostRecentGridSize = 16

// Etch Grid
let etchGridOpacity

// Progressive Darkening Button 
const progressiveDarkeningButton = document.querySelector('#progressiveDarkening');


// Default Grid Rows (16)
function defaultGrid() {
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
            let etchGrid = document.createElement('div');
            etchGrid.classList.add('etch-grid');
            element.appendChild(etchGrid);
        };
    });
    
    // Mouse Hover Changes Grid Background (Black)
    addBlackGridColorListeners()
    


};

function progressiveDarkening() {
    
    const generatedEtchGrid = document.querySelectorAll('.etch-grid');
    // Add Progressive Darkening Class
    generatedEtchGrid.forEach(element => {
        element.classList.add('progressiveDarkening')
    });
    generatedEtchGrid.forEach(element => {
        let updateGridOpacity = Number(element.getAttribute('opacity'));
        element.addEventListener('mouseover', () => {
            updateGridOpacity += 0.1
            element.style.opacity = updateGridOpacity  
        });
    });
};

function mostRecentGrid() {
    for (i=1;i <= mostRecentGridSize;i++) {
        // The value of the input is the counter condition of the loop
        const createEtchGridRow = document.createElement('div');
        createEtchGridRow.classList.add('etch-grid-row');
        container.appendChild(createEtchGridRow);
    };
    
    // Create Default Grid Squares In Each Row (16)
    const etchGridRowElement = document.querySelectorAll('.etch-grid-row');
    etchGridRowElement.forEach(element => {
        for (i=1;i <= mostRecentGridSize;i++) {
            const etchGrid = document.createElement('div');
            etchGrid.classList.add('etch-grid');
            element.appendChild(etchGrid);
        };
    });
    if (progressiveDarkeningButton.classList.contains('progressiveDarkeningOn')) {
        progressiveDarkening();
    } else {
        addBlackGridColorListeners(); 
    }
};


/////////////////////// 




defaultGrid()



 
function removeDefaultGrid() {
    const etchGrid = document.querySelectorAll('.etch-grid')
    const etchGridRow = document.querySelectorAll('.etch-grid-row');
    etchGrid.forEach(element => element.remove());
    etchGridRow.forEach(element => element.remove());
}

function createUserGrid() {
    // Store User Grid Number 
    let userGridInput = Number(document.querySelector('#userGridInput').value);
    mostRecentGridSize = userGridInput
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
    if (progressiveDarkeningButton.classList.contains('progressiveDarkeningToOff')) {
        progressiveDarkening();
    }
    
    if (colorToggleButton.classList.contains('toRandomColor')) {
        addBlackGridColorListeners();
        
    } else {
        addRandomGridColorListeners();
    };
    

};


// User Creates Grid Start Button Event Listener
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

// Clear Grid Background Color(s)
function clearGrid() {
    removeDefaultGrid();
    // mostRecentGrid()
};


// Toggle Random Colors 
const colorToggleButton = document.querySelector('#colorToggleButton');


// Generate Random Color
function generateRandomColor() {
    const letters = "0123456789ABCDEF"
    let randomColor = ["#"];
    for (let i = 0 ; i<6 ; i++) {
        randomColor += letters[Math.floor(Math.random() *16)]
    };
    console.log(randomColor);
    return randomColor;
};

// Toggle Random Colors
colorToggleButton.addEventListener('click' , () => {
    
    if (colorToggleButton.classList.contains('toRandomColor')) {
        clearGrid();
        mostRecentGrid()
        addRandomGridColorListeners();
        
        colorToggleButton.classList.add('toBlack');
        colorToggleButton.classList.remove('toRandomColor');
        colorToggleButton.textContent = "To Black"
    } else {
        clearGrid();
        mostRecentGrid()
        addBlackGridColorListeners();
        colorToggleButton.classList.add('toRandomColor');
        colorToggleButton.classList.remove('toBlack');
        colorToggleButton.textContent = "To Random Color"
    };
})

// Toggle Progressive Darkening 
progressiveDarkeningButton.addEventListener('click' , () => {
    clearGrid();
    if (progressiveDarkeningButton.classList.contains('progressiveDarkeningToOn')) {
        progressiveDarkening();
        progressiveDarkeningButton.classList.remove('progressiveDarkeningToOn')
        progressiveDarkeningButton.classList.remove('progressiveDarkeningOff')
        progressiveDarkeningButton.classList.add('progressiveDarkeningToOff')
        progressiveDarkeningButton.classList.add('progressiveDarkeningOn')
        progressiveDarkeningButton.textContent = "On"
    } else {
        progressiveDarkeningButton.classList.remove('progressiveDarkeningToOff')
        progressiveDarkeningButton.classList.remove('progressiveDarkeningOn')
        progressiveDarkeningButton.classList.add('progressiveDarkeningOff')
        progressiveDarkeningButton.classList.add('progressiveDarkeningToOn')
        progressiveDarkeningButton.textContent = "Off"
    }
    mostRecentGrid()
    if (colorToggleButton.classList.contains('toRandomColor')) {
        addBlackGridColorListeners();
    } else {
        addRandomGridColorListeners();
    };

    

});

function addBlackGridColorListeners() {
    const generatedEtchGrid = document.querySelectorAll('.etch-grid');
    generatedEtchGrid.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = "Black";
        })
    });
};

function addRandomGridColorListeners() {
    const generatedEtchGrid = document.querySelectorAll('.etch-grid');
    generatedEtchGrid.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = generateRandomColor();
        })
    });
};



// Reset Grid 

const resetGrid = document.querySelector('#resetGrid')

resetGrid.addEventListener('click' , ()=> {
    clearGrid()
    mostRecentGrid()
    if (colorToggleButton.classList.contains('toRandomColor')) {
        addBlackGridColorListeners();
    } else {
        addRandomGridColorListeners();
    };
    if (progressiveDarkeningButton.classList.contains('progressiveDarkeningToOff')) {
        progressiveDarkening();
    }

});

