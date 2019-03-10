$(document).ready(startGame);

var game = null;
var gameName = 'Imhotep';

function startGame(){
    game = new Game(gameName);
}
//
// Andrews JS for modal
//
// var modal = document.getElementById('myModal');
//
// var btn = document.getElementById("myBtn");
//
// var span = document.getElementsByClassName("close")[0];
//
//
//
// btn.onload = function() {
//     modal.style.display = "block";
// }
//
// span.onclick = function() {
//     modal.style.display = "none";
// }
//
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
//
// Andrew's JS for modal