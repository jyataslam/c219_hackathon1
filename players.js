
class Players {
    constructor(color, startingCubes, playerHandler) {
        this.playerHandler2 = playerHandler;
        this.playerColor = color;
        this.maxCubes = 5;
        this.currentBlockCount = startingCubes;
        this.playerClick = this.playerClick.bind(this);
        this.rechargeCubes = this.rechargeCubes.bind(this);
    }

    playerClick(){
        this.rechargeCubes();
        this.playerHandler2(this);
    }
   
    rechargeCubes(){
        if (this.currentBlockCount <= 2){
            this.currentBlockCount += 3;
        } else if (this.currentBlockCount >= 3){
            this.currentBlockCount = 5;
        } else if (this.currentBlockCount = 5){
        } else {
        return
        }
    }

    addStoneToBoat(){
        this.currentBlockCount -= 1;
        return this.currentBlockCount;
    }















    //
    // currentCubes() {
    //         //when player chooses ship, decrease by 1. Counter decreases by 1.
    //         if(//any of the ships are clicked, cube appears on ship)
    //             this.players[].playerCubes -= 1;
    //
    //         if(ship is full/maxed out);
    //             //cannot be loaded. player cubes stay the same.
    //
    //
    //     }
    //
    // playerTurn () {
    //     var numPlayers = null;
    //    var currentPlayer = currentPlayer[0];
    //     (currentPlayer + 1) % numPlayers
    //         .playerinfo = this.players;
    // .
    //     player = 0;
    //     toggle(this.players) = this.players
    //
    // }
    // }
    //

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