const Game = {

    winingCondisions : {

        1: '0,1,2',
        2: '3,4,5',
        3: '6,7,8',
        4: '0,3,6',
        5: '1,4,7',
        6: '2,5,8',
        7: '0,4,8',
        8: '2,4,6',
    },

    zoneState : [

        0, //place one - default state is null
        0, //place two - default state is null
        0, //place three - default state is null
        0, //place four - default state is null
        0, //place five - default state is null
        0, //place six - default state is null
        0, //place seven - default state is null
        0, //palce eight - default state is null
        0, //place nine - default state is null

    ],

    playerPosition :[ 

        0, //place one - default state is null
        0, //place two - default state is null
        0, //place three - default state is null
        0, //place four - default state is null
        0, //place five - default state is null
        0, //place six - default state is null
        0, //place seven - default state is null
        0, //palce eight - default state is null
        0, //place nine - default state is null

    ],

    redVast : [
        "pres1",
        "pres2",
        "pres3",
    ],

    blueVast : [
        "ss1",
        "ss2",
        "ss3",
    ],

    player : [
        "red",
        "blue",
    ],

    playerTurn : {
        red: 0,
        blue: 0,
    },

    playerStatus : {
        red: 0,
        blue: 0,
    },

    gameStatus : 0 ,
};

//starter page
start = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    const chanceElement = document.getElementById("chance");
    if (randomNumber < 6) {
        //red side
        chanceElement.className = "spanTurnLeft";
        closeStarterPage();
        Game.playerTurn.red = 1;
    }else {
        //blue side
        chanceElement.classList = "spanTurnRight";
        closeStarterPage();
        Game.playerTurn.blue = 1;
    }
    setDragableOnPlayer();
}
closeStarterPage = () => {
    const starterPage = document.querySelector(".start");
    var delayInMilliseconds = 5000; //5 second

    setTimeout(() => {
        starterPage.style.display = "none";
    }, delayInMilliseconds);
}
//end start page

//drag event
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    console.log(event.target.parentNode.id);
    if (event.target.parentNode.id > 0 && event.target.parentNode.id < 10){
        Game.zoneState[(event.target.parentNode.id - 1)] = 0;
        //remove last player position
        Game.playerPosition[(event.target.parentNode.id - 1)] = 0;
    }     
}

function drop(event) {
    //check for new place 
    if (Game.zoneState[(event.target.id - 1)] == 0) {
        // move and drop image
        event.preventDefault();
        var data = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data));
        // change zone state to 1 
        Game.zoneState[(event.target.id - 1)] = 1;
        //remove dragable attribute player image after move
        removeDragableOnPlayer();
        //check turn and switch turn to another player
        if (Game.playerTurn.blue == 1){
            //change turn
            Game.playerTurn.blue = 0;
            Game.playerTurn.red = 1;
            //set player vast position
            Game.playerPosition[(event.target.id - 1)] = 2;
            new winner('blue').checkWin();
        }else {
            //change turn
            Game.playerTurn.red = 0;
            Game.playerTurn.blue = 1;
            //set player vast position
            Game.playerPosition[(event.target.id - 1)] = 1;
            new winner("red").checkWin();
        }
        setDragableOnPlayer();
    }
}

//end drag event 

//Player selection
setDragableOnPlayer = () => {
    if (Game.playerTurn.blue == 1){
        Game.blueVast.forEach((index) => {
            document.getElementById(index).setAttribute("ondragstart", "drag(event)");
        });
    }else if (Game.playerTurn.red == 1) {
        Game.redVast.forEach((index) => {
            document.getElementById(index).setAttribute("ondragstart", "drag(event)");
        });
    }
}
//end player selection

//remove player move access
removeDragableOnPlayer = () => {
    if (Game.playerTurn.blue == 1){
        Game.blueVast.forEach((index) => {
            document.getElementById(index).removeAttribute("ondragstart");
        });
    }else {
        Game.redVast.forEach((index) => {
            document.getElementById(index).removeAttribute("ondragstart");
        });
    }
}
//end remove player move access

//check win state 
class winner {

    constructor(player) {

        this.player = player;
    }

    checkWin() {
        let first,second,third;
        let object = Game.winingCondisions;
        let keys = Object.keys(object);
        for (let i = 1; i <= keys.length; i++) {

            let split = object[i].split(',') ;
            first = split[0];
            second = split[1];
            third = split[2];

            switch (this.player){
                case "red":
                    if (Game.playerPosition[first] == 1 && Game.playerPosition[second] == 1 && Game.playerPosition[third] == 1) {
        
                        Game.playerStatus.red = 1;
                        Game.gameStatus = 1;
                    }
                    break;
                case "blue":
                    
                    if (Game.playerPosition[first] == 2 && Game.playerPosition[second] == 2 && Game.playerPosition[third] == 2) {
        
                        Game.playerStatus.blue = 1;
                        Game.gameStatus = 1;
                    }
        
                    break;
            }
        }
        
        //check winner
        if (Game.gameStatus == 1){
            const endPage = document.querySelector(".end");
            let text = ``;
            if (Game.playerStatus.blue == 1){
                text += `<img src="./static/images/esteghlal.png" alt="esteghlal" class="img"><p>برنده</p>`;
                endPage.style.display = "block";
                endPage.innerHTML = text;
            }
            else if (Game.playerStatus.red == 1){
                text += `<img src="./static/images/pers.png" alt="pres" class="img"><p>برنده</p>`;
                endPage.style.display = "block";
                endPage.innerHTML = text;
            }
        }
    }
}
