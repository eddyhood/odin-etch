//Grab the section that will hold the grid

const container = document.getElementById('drawGrid');

//Insert 16 squares into the grid
for(i = 0; i < 256; i++) {
    let box = document.createElement('div');
    box.classList.add('pixel');
    container.appendChild(box);
}