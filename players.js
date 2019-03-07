$(document).ready(startApp);
function startApp(){
   addEventListeners()
}
function addEventListeners(){
    $('.btn').click(buttonClick)
}


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
        this.placeCubes = this.placeCubes.bind(this);
        this.rechargeCubes = rechargeCubes();

        rechargeCubes()
        {
            $('.recharge').click(buttonClick);
            if (this.playerCubes.length <= 2) {
                this.playerCubes = this.playerCubes.length + 3;
            } else {
                this.playerCubes = 5;
            }
            console.log(result);
        }
    }
}

////////////////////PYRAMIDS

    // function
    //
    // shipDock() {
    //     checkLayers();
    // }

class Pyramids {
    constructor() {
        this.pyramidConstruction = [];
        this.playerCubes = this.playerCubes.bind(this);
        this.checkLayers = checkLayers;
        this.current = 0;

    };

    checkLayers() {
        var firstLayer = [2, 1, 3, 2, 4, 3, 2, 1, 3];
        var secondLayer = [2, 3, 1, 3];
        var thirdLayer = [4];

        for (var i = 0; i < firstLayer.length; i++) {
            var currentValue = firstLayer[i];
            this.pyramidConstruction[this.current].push(currentValue);
            currentValue++;
            if (currentValue === 9) {
                return currentValue;
            }
        }

        for (var i = 0; i < secondLayer.length; i++) {
            var currentValue = secondLayer[i];
            this.pyramidConstruction[this.current].push(currentValue);
            currentValue++;
            if (currentValue === 4) {
                return currentValue;

                for (var i = 0; i < thirdLayer.length; i++) {
                    var currentValue = firstLayer[i];
                    this.pyramidConstruction[this.current].push(currentValue);
                    currentValue++;
                    if (currentValue === 1) {
                        return currentValue;
                    }
                }
            }
        }
    }
function shipDock(){///method when it arrives at the location. ownerhsip, functionality when ship hits port
        if(this.playerCubes === )

        $(this.playerCubes).click(checkLayers)
    }







}








