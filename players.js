$(document).ready(startApp);
function startApp(){
    players = new Players();
   //addEventListeners();
//debugger;
}
// function addEventListeners(){
//     $('.btn').click(buttonClick)
// }
//

class Players {
    constructor() {
        this.players = [{
            playerCubes: 3
        }, {
            playerCubes: 2
        }];
        this.color = ['brown', 'silver', 'white', 'black'];
        this.block = [];
        this.maxCubes = 5;
        this.cards = null;
        this.placeCubes = this.placeCubes
        //this.rechargeCubes = rechargeCubes();
        this.currentNumber = 0;
        this.playerTurn = 1;
        //var findPlayerTurns = [0, 1, 2, 3];

    }

    debugger;
    addRechargeButton(){
        var createButton =
    }
    rechargeCubes() {
        // $('.recharge').click(buttonClick);
        if (this.players[0].playerCubes <= 2) {
            this.players[0].playerCubes += 3;
        } else {
            this.players[0].playerCubes = 5;
        }
        console.log(this.players[0].playerCubes);
    }

    //for(findPlayerTurns = 0; i < 4; i++);
    //   //   totalTurns = totalTurns + findPlayerTurns[i];
    //
    //  findPlayerTurns(currentTurn) {
    //      //         switch( )
    //      //
    //      //         if(playerTurn === 1){
    //      //             playerOne turns
    //      //         }
    //      //             //person plays the game
    //      //         }
    //      //         if(playerTwo === 2){
    //      //             //person two goes next
    //      //         }
    //      //         if(playerThree === 3){
    //      //             //person three goes next
    //      //         }
    //      //         if(playerFour === 4){
    //      //             //person four goes next
    //      //         }
    //      //         if(playerOne > 4){
    //      //             //reloop from the beginning
    //      //             //playerOne = 1
    //      //
    //      //
    //      //     }
    //      // }
    //  }

////////////////////PYRAMIDS

    // function
    //
    // shipDock() {
    //     checkLayers();
    // }

// class Pyramids {
//     constructor() {
//         this.pyramidConstruction = [];
//         this.playerCubes = this.playerCubes.bind(this);
//         this.checkLayers = checkLayers;
//         this.current = 0;
//
//     };
//
//     checkLayers() {
//         var firstLayer = [2, 1, 3, 2, 4, 3, 2, 1, 3];
//         var secondLayer = [2, 3, 1, 3];
//         var thirdLayer = [4];
//
//         for (var i = 0; i < firstLayer.length; i++) {
//             var currentValue = firstLayer[i];
//             this.pyramidConstruction[this.current].push(currentValue);
//             currentValue++;
//             if (currentValue === 9) {
//                 return currentValue;
//             }
//         }
//
//         for (var i = 0; i < secondLayer.length; i++) {
//             var currentValue = secondLayer[i];
//             this.pyramidConstruction[this.current].push(currentValue);
//             currentValue++;
//             if (currentValue === 4) {
//                 return currentValue;
//
//                 for (var i = 0; i < thirdLayer.length; i++) {
//                     var currentValue = firstLayer[i];
//                     this.pyramidConstruction[this.current].push(currentValue);
//                     currentValue++;
//                     if (currentValue === 1) {
//                         return currentValue;
//                     }
//                 }
//             }
//         }
//     }
// function shipDock(){ ///method when it arrives at the location. ownerhsip, functionality when ship hits port
//         if(this.playerCubes >= this.sailRequirement)
//             $(this.playerCubes).click(checkLayers)
//
//     }
//
//
// //callback check if player stone is zero, don't add
//
//
//
//
//
// }
//
//
//
//
//
//
//
//
}