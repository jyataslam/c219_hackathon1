$(document).ready(startGame);

var game = null;
var gameName = 'Imhotep';

function startGame(){
    game = new Game(gameName);
}
