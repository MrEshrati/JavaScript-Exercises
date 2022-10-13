let duzGame = {

    winningCondition : {

        'BR-TL' : { 1: 'BR-TC,BR-TR', 2: 'BR-LC,BR-LB', 3: 'MR-TL,SR-TL',},
        'BR-TC' : { 1: 'BR-TR,BR-TL', 2: 'MR-TC,SR-TC',},
        'BR-TR' : { 1: 'BR-TC,BR-TL', 2: 'MR-TR,SR-TR', 3: 'BR-RC,BR-RB',},
        'BR-LC' : { 1: 'BR-TL,BR-LB', 2: 'MR-LC,SR-LC',},
        'BR-LB' : { 1: 'BR-LC,BR-TL', 2: 'BR-BC,BR-RB', 3: 'MR-LB,SR-LB',},
        'BR-BC' : { 1: 'BR-LB,BR-RB', 2: 'MR-BC,SR-BC',},
        'BR-RB' : { 1: 'BR-BL,BR-BC', 2: 'BR-RC,BR-TR', 3: 'MR-RB,SR-RB'},
        'BR-RC' : { 1: 'BR-TR,BR-BL', 2: 'MR-RC,SR-RC',},

        'MR-TL' : { 1: 'MR-TC,MR-TR' , 2: 'MR-LC,MR-LB' , 3: 'SR-TL,BR-TL',},
        'MR-TC' : { 1: 'MR-TR,MR-TL' , 2: 'SR-TC,BR-TC',},
        'MR-TR' : { 1: 'MR-TC,MR-TL' , 2: 'SR-TR,BR-TR' , 3: 'MR-RC,MR-RB',},
        'MR-LC' : { 1: 'MR-TL,MR-LB' , 2: 'SR-LC,BR-LC',},
        'MR-LB' : { 1: 'MR-LC,MR-TL' , 2: 'MR-BC,MR-RB' , 3: 'SR-LB,BR-LB',},
        'MR-BC' : { 1: 'MR-LB,MR-RB' , 2: 'BR-BC,SR-BC',},
        'MR-RB' : { 1: 'MR-BL,MR-BC' , 2: 'MR-RC,MR-TR' , 3: 'SR-RB,BR-RB',},
        'MR-RC' : { 1: 'MR-TR,MR-BL' , 2: 'BR-RC,SR-RC',},

        'SR-TL' : { 1: 'SR-TC,SR-TR' , 2: 'SR-LC,SR-LB' , 3: 'MR-TL,BR-TL',},
        'SR-TC' : { 1: 'SR-TR,SR-TL' , 2: 'MR-TC,BR-TC',},
        'SR-TR' : { 1: 'SR-TC,SR-TL' , 2: 'MR-TR,BR-TR' , 3: 'SR-RC,SR-RB',},
        'SR-LC' : { 1: 'SR-TL,SR-LB' , 2: 'MR-LC,BR-LC',},
        'SR-LB' : { 1: 'SR-LC,SR-TL' , 2: 'SR-BC,SR-RB' , 3: 'MR-LB,BR-LB',},
        'SR-BC' : { 1: 'SR-LB,SR-RB' , 2: 'BR-BC,MR-BC',},
        'SR-RB' : { 1: 'SR-BL,SR-BC' , 2: 'SR-RC,SR-TR' , 3: 'MR-RB,BR-RB',},
        'SR-RC' : { 1: 'SR-TR,SR-BL' , 2: 'BR-RC,MR-RC',},        
        
    },

    circleStatus: {

        'BR-TL' : 'white',
        'BR-TC' : 'white',
        'BR-TR' : 'white',
        'BR-LC' : 'white',
        'BR-LB' : 'white',
        'BR-BC' : 'white',
        'BR-RB' : 'white',
        'BR-RC' : 'white',

        'MR-TL' : 'white',
        'MR-TC' : 'white',
        'MR-TR' : 'white',
        'MR-LC' : 'white',
        'MR-LB' : 'white',
        'MR-BC' : 'white',
        'MR-RB' : 'white',
        'MR-RC' : 'white',

        'SR-TL' : 'white',
        'SR-TC' : 'white',
        'SR-TR' : 'white',
        'SR-LC' : 'white',
        'SR-LB' : 'white',
        'SR-BC' : 'white',
        'SR-RB' : 'white',
        'SR-RC' : 'white',        

    },

    turns : 24,

}

let players = ['Red' , 'Blue'];

circles = document.querySelectorAll('.Circle');

document.querySelector('.button').addEventListener('click', function (e) {

    window.location.reload();
});


Array.from(circles).forEach(function(e) {

    e.addEventListener('click', select);
    e.addEventListener('mouseenter', enter);
    e.addEventListener('mouseleave', leave);
});

function color(){
    
    if (duzGame.turns % 2 === 0) {

        return players[0];
    } else {

        return players[1];
    }
}

function enter(event){

    const element = event.path[0];
    const divClass = event.path[0].className.split(' ')[0];
    if (duzGame.circleStatus[divClass] === 'white'){

        element.style.backgroundColor = color();
    }
}

function leave(event){

    const element = event.path[0];
    const divClass = event.path[0].className.split(' ')[0];
    if (duzGame.circleStatus[divClass] === 'white'){

        element.style.backgroundColor = '#b3b3b3';
    }
}

function select(event) {

    const element = event.path[0];
    const divClass = event.path[0].className.split(' ')[0];

    if (duzGame.circleStatus[divClass] === 'white') {

        duzGame.circleStatus[divClass] = color();
        element.style.backgroundColor = color();
        duzGame.turns --;
    
        checkGame(divClass);
    
        if (duzGame.turns === 0) {
    
            document.querySelector('.board').style.display = 'none';
            document.querySelector('.result-box').style.display = 'block';
        }
    }
}

function checkGame(elementClass) {

    let object = duzGame.winningCondition[elementClass];
    let obj = Object.keys(object);
    
    for (let i = 1; i <= obj.length; i++) {

        let split = object[i].split(',');
        let elementColor = duzGame.circleStatus[elementClass];
        let firstobjcolor = duzGame.circleStatus[split[0]];
        let secondobjcolor = duzGame.circleStatus[split[1]];

        if (elementColor === firstobjcolor && elementColor === secondobjcolor) {

            win(elementColor);
        }
    }
}

function win(elementColor) {

    document.querySelector('.turn-text').innerHTML = 24 - duzGame.turns;
    let result = document.querySelector('.result-text');
    result.innerHTML = `${elementColor} Win`;
    result.style.color = elementColor;

    document.querySelector('.board').style.display = 'none';
    document.querySelector('.result-box').style.display = 'block';

}