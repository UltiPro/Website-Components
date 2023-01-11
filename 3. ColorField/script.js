const box = document.querySelector('.box');

const squares = 357;
let sliderValue = 70;
let range = 360;

const createSquares = () => {
    for (let i = 0; i < squares ; i++) {
        const square = document.createElement('div');

        square.classList.add('square');

        square.addEventListener('mouseover', () => {
            setColor(square);
        });

        square.addEventListener('mouseout', () => {
            removeColor(square);
        });

        box.appendChild(square);
    }
}

const setColor = square => {
    let h;

    if(range === 360){
        h = Math.floor(Math.random() * 360);
    }
    else{
        h = Math.floor(Math.random() * 60) + range;
    }

    const s = sliderValue + '%';
    const l = '50%';

    square.style.backgroundColor = `hsl(${h},${s},${l})`;
}

const removeColor = square => {
    square.style.backgroundColor = `transparent`;
}

createSquares();