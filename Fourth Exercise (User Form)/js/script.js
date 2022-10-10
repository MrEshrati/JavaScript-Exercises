const formList = [
    "نام خود را وارد کنید",
    "نام خانوادگی خود را وارد کنید",
    "سن خود را وارد کنید",
    "قد خود را وارد کنید",
    "وزن خود را وارد کنید",
    "استان خود را وارد کنید",
    "شهر خود را وارد کنید",
    "نام محله خود را وارد کنید",
];

const tableList = [
    "نام",
    "نام خانوادگی",
    "سن",
    "قد",
    "وزن",
    "استان",
    "شهر",
    "محله"
];

let stat = false;
let result = ``;
let form = ``;
let resultBox = document.querySelector('.result');
let dataFormBox = document.querySelector('.dataForm');
let body = document.getElementById('body');
window.addEventListener('load', start);

function start() {

    createNewInput(0);
}
function createNewInput(id){
    if (id < 8){

        result = `<input type="text" placeholder="${formList[id]}" id="input${id+1}"><button id="button${id+1}" onclick="createNextInput(${id+1})">&plus;</button>`;
        dataFormBox.innerHTML += result;
    } else createNextInput(9);

}

function createNextInput(id){

    switch(id) {

        case 1:
            enterData(id);
            break;
        case 2:
            enterData(id);
            break;
        case 3:
            enterData(id);
            break;
        case 4:
            enterData(id);
            break;
        case 5:
            enterData(id);
            break;
        case 6:
            enterData(id);
            break;
        case 7:
            enterData(id);
            break;
        case 8:
            enterData(id);
            break;
        case 9:
            enterData(id);
            break;
    }
}

function enterData(id){


    // check that the input exists or not (its for preventing duplicate input)
    if (document.getElementById('input'+(id+1)) == null && !stat){


        if (id < 9 && !stat) {

            let data = document.getElementById('input'+id).value;
            form += `<tr><td>${tableList[id-1]}</td><td id="value${id-1}">${data}</td></tr>`
            body.innerHTML = form;
            createNewInput(id);
        } else {

            stat = true;

            if (document.getElementById('submit') == null){

                submit();
            }
        }

    } else {

        let data = document.getElementById('input'+id).value;
        document.querySelector(`#value${id-1}`).innerHTML = data;
    }


}

function submit(){

    result = `<input type="submit" id="submit" onclick="setResult()" value="ثبت اطلاعات">`;
    dataFormBox.innerHTML += result;
}

function setResult() {
    dataFormBox.style.display = 'none';
}

