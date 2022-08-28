var game_canvas = document.getElementById("game_canvas");
var ctx = game_canvas.getContext("2d");

//creo un ascoltatore per l'evento "tasto premuto" e gli associo il richiamo della funzione keyPush
// che eseguirà la logica in base al tasto premuto
document.addEventListener("keydown",keyPush);

setInterval(game,1000/15);


function game(){
    console.log("chiamata a Game")
}

function keyPush(evt){
    console.log("premuto il tasto: "+evt.keyCode);
    switch(evt.keyCode){
        case 37:
            console.log("premuto sx");
            break;
        case 38:
            console.log("premuto su");
            break;
        case 39:
            console.log("premuto dx");
            break;
        case 40:
            console.log("premuto giù");
            break;
        case 83:
          salva();
          break;
    }
}

function salva(){
    console.log("premuto salva");
}