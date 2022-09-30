const box = document.getElementById("mainBox");
const coordinateX = document.getElementById("x");
const coordinateY = document.getElementById("y");

function updateCoordinate(event){

    coordinateX.innerHTML = event.pageX;
    coordinateY.innerHTML = event.pageY;
    box.style.backgroundColor = randomColor();
    box.style.color = textColor();
}

function textColor(){

    const num = Math.floor(Math.random() * 10)

    let color = {
        one: 'red',
        two: 'blue',
        three: 'yellow',
        four: 'green',
        five: 'yellow',
        six: 'brown',
        seven: 'black',
        eight: 'white',
        nine: 'lightblue',
        ten: 'darkblue',
    }

    switch(num) {

        case 1:
            return color.one;

        case 2:
            return color.two;

        case 3:
            return color.three;

        case 4:
            return color.four;

        case 5:
            return color.five;

        case 6:
            return color.six;

        case 7:
            return color.seven;

        case 8:
            return color.eight;

        case 9:
            return color.nine;

        case 10:
            return color.ten;
    }
}

function randomColor(){

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red} ,${green} ,${blue})`;
    return color;
}

box.addEventListener("mousemove", updateCoordinate);
box.addEventListener("mouseenter", updateCoordinate);
box.addEventListener("mouseleave", updateCoordinate);