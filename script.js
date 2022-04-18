//Grab the section that will hold the grid
const container = document.getElementById('drawGrid');
const width = document.getElementById('squaresWide');
const height = document.getElementById('squaresHigh');

//Set variables for initial artboard
let artWidth;
let artHeight;
let totalBoxes = artWidth * artHeight;

//Grab the buttons
const drawButton = document.getElementById('draw');

const resetButton = document.getElementById('reset');


//Listen for user input into artboard field
width.addEventListener('input', e => {
    artWidth = 0;
    artWidth = parseInt(e.target.value);
    
});

height.addEventListener('input', e => {
    artHeight = 0;
    artHeight = parseInt(e.target.value);
    
})

drawButton.addEventListener('click', drawBoard)

resetButton.addEventListener('click', resetGrid)

//Set game logic
function drawBoard() {
    //clear the board
    resetGrid();
    //redraw the board with new measurements
    totalBoxes = artWidth * artHeight;
    for(i = 0; i < totalBoxes; i++) {
        let box = document.createElement('div');
        box.classList.add('pixel');
        container.appendChild(box);
    }
    startDraw();
}


function resetGrid() {
    const existingGrid = document.getElementById('drawGrid');

    existingGrid.textContent = '';
    width.textContent = 'Enter Width';

}

//calculate a random RGB value
function randomColor() {
    let rgb = []
    for(i = 0; i < 3; i++) {
        let random = Math.floor(Math.random()*(255));
        rgb.push(random);
    } return rgb.join();
}

//Grab each div in the grid
function startDraw() {
    const pixels = document.querySelectorAll('.pixel');
    
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseenter', function changeColor(event) {
            rgb = randomColor();
            event.target.style.backgroundColor = 'rgb('+rgb+')';
        })
    })
}

