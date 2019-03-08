
class Players {
    constructor(color, startingCube, playerHandler) {
        this.playerHandler2 = playerHandler;
        this.color = color;
        this.startingCube = startingCube;
        this.block = [];
        this.maxCubes = 5;
        this.cards = null;
        this.placeCubes = this.placeCubes
        this.rechargeButton = null;
        //this.rechargeCubes = rechargeCubes();
        this.currentNumber = 0;
        // this.playerTurn = 1;
        //var findPlayerTurns = [0, 1, 2, 3];
        this.playerClick = this.playerClick.bind(this);
        this.rechargeCubes = this.rechargeCubes.bind(this);
        this.addRechargeButton();
        // this.addPlayersToArray();
        // $('.recharge-button).on('click', this.playerClick);
    }


    playerClick(){
        this.playerHandler2(this);
        // this.rechargeCubes();

    }
    // addPlayersToArray () {
    //     this.players.push(player1);
    // }

    addRechargeButton(){

      console.log('clicked')
    }
    rechargeCubes() {
        // $('.recharge').click(buttonClick);
        if (this.startingCube <= 2) {
            this.startingCube += 3;
        } else {
            this.startingCube = 5;
        }
        console.log(this.startingCube);
        return;
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