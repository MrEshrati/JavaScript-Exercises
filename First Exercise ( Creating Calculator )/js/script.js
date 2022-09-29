let first = false;
let char = false;
let second = false;

let firstvalue = ''; 
let charvalue = '' ;
let secondvalue = '' ;
let display = document.getElementById('screen');

function Result() {

    if (first && second && char) {

        display.innerHTML = eval(`${firstvalue} ${charvalue} ${secondvalue}`);
        second = false;
        first = false;
        char = false;
        secondvalue = '';
        firstvalue = '';
        char = '';
    }
    
}

function CharClick(element){

    if (first) {

        second = false;
        secondvalue = '';

        switch (element.id) {

            case 'devide':
                charvalue = '/';
                char = true;
                display.innerHTML = firstvalue + ' ' + '/';
                break;
    
            case 'multiple':
                char = true;
                charvalue = '*';
                display.innerHTML = firstvalue + ' ' + '*';
                break;
    
            case 'minus':
                char = true;
                charvalue = '-';
                display.innerHTML = firstvalue + ' ' + '-';
                break;
    
            case 'plus':
                char = true;
                charvalue = '+';
                display.innerHTML = firstvalue + ' ' + '+';
                break;
    
            case 'left-over':
                char = true;
                charvalue = '%';
                display.innerHTML = firstvalue + ' ' + '%';
                break;
    
        }

    }else {

        alert('Please Enter the FirstNumber');
    }
    
}

function NumberClick(element){

    switch (element.id) {

        case 'clear':
            firstvalue = '';
            secondvalue = '';
            charvalue = '';
            char = false;
            first = false;
            second = false;
            display.innerHTML = 0;
            break;
            
        case 'back' :
            if (second == true) {

                secondvalue = secondvalue.slice(0,secondvalue.length-1);
                if (secondvalue.length < 1) {

                    display.innerHTML = firstvalue + ' ' + charvalue;
                    second = false;
                } else {

                    display.innerHTML = firstvalue + ' ' + charvalue + ' ' + secondvalue;
                }
            } else if (char == true && second == false) {

                charvalue = '';
                char = false;
                display.innerHTML = firstvalue;
            } else if (first == true && char == false) {

                firstvalue = firstvalue.slice(0,firstvalue.length-1);
                if (firstvalue.length < 1) {

                    display.innerHTML = 0;
                    first = false;
                } else {

                    display.innerHTML = firstvalue;
                }
            }
            break;

        case 'nine':
            if (char) {

                secondvalue += '9' ;
                second = true; 
                display.innerHTML = firstvalue + ' ' + charvalue + ' ' + secondvalue;
            } else {

                firstvalue += '9' ;
                first = true;
                display.innerHTML = firstvalue;

            }
            break;

        case 'eight':
            if (char) {

                secondvalue += '8' ;
                second = true; 
                display.innerHTML = firstvalue + ' ' + charvalue + ' ' + secondvalue;

            } else {

                firstvalue += '8' ;
                first = true;
                display.innerHTML = firstvalue;
            }
            break;
                
        case 'seven':
            if (char) {

                secondvalue += '7' ;
                second = true; 
                display.innerHTML = firstvalue + ' ' + charvalue + ' ' + secondvalue;

            } else {

                firstvalue += '7' ;
                first = true;
                display.innerHTML = firstvalue;
            }
            break;

        case 'six':
            if (char) {

                secondvalue += '6' ;
                second = true; 
                display.innerHTML = firstvalue + ' ' + charvalue + ' ' + secondvalue;

            } else {

                firstvalue += '6' ;
                first = true;
                display.innerHTML = firstvalue;
            }
            break;

        case 'five':
            if (char) {

                secondvalue += '5' ;
                second = true; 
                display.innerHTML = firstvalue + ' ' + charvalue + ' ' + secondvalue;

            } else {

                firstvalue += '5' ;
                first = true;
                display.innerHTML = firstvalue;
            }
            break;

        case 'four':
            if (char) {

                secondvalue += '4' ;
                second = true; 
                display.innerHTML = firstvalue + ' ' + charvalue + ' ' + secondvalue;

            } else {

                firstvalue += '4' ;
                first = true;
                display.innerHTML = firstvalue;
            }
            break;

        case 'three':
            if (char) {

                secondvalue += '3' ;
                second = true; 
                display.innerHTML = firstvalue + ' ' + charvalue + ' ' + secondvalue;

            } else {

                firstvalue += '3' ;
                first = true;
                display.innerHTML = firstvalue;
            }
            break;

        case 'two':
            if (char) {

                secondvalue += '2' ;
                second = true; 
                display.innerHTML = firstvalue + ' ' + charvalue + ' ' + secondvalue;

            } else {

                firstvalue += '2' ;
                first = true;
                display.innerHTML = firstvalue;
            }
            break;

        case 'one':
            if (char) {

                secondvalue += '1' ;
                second = true; 
                display.innerHTML = firstvalue + ' ' + charvalue + ' ' + secondvalue;

            } else {

                firstvalue += '1' ;
                first = true;
                display.innerHTML = firstvalue;
            }
            break;

        case 'auditor':
            if (char) {

                secondvalue += '.' ;
                second = true; 
                display.innerHTML = firstvalue + ' ' + charvalue + ' ' + secondvalue;

            } else {

                firstvalue += '.' ;
                first = true;
                display.innerHTML = firstvalue;
            }
            break;

        case 'zero':
            if (char) {

                secondvalue += '0' ;
                second = true; 
                display.innerHTML = firstvalue + ' ' + charvalue + ' ' + secondvalue;

            } else {

                firstvalue += '0' ;
                first = true;
                display.innerHTML = firstvalue;
            }
            break;
    }
}