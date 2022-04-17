//Grab the section that will hold the grid

const container = document.getElementById('drawGrid');

//Insert 16 squares into the grid
for(i = 0; i < 256; i++) {
    let box = document.createElement('div');
    box.classList.add('pixel');
    container.appendChild(box);
}

//calculate a random RGB value
function randomColor() {
    let rgb = []
    for(i = 0; i < 3; i++) {
        let random = Math.floor(Math.random()*(255));
        rgb.push(random);
    } return rgb;
}

