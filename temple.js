
class Temple {
    constructor(image) {
        this.stones = [
            [], [], [], []
        ];
        this.current = 0;
        this.image = image;
    }
    addStones(inputStones) { //current ship's current stones = inputStones
        //b, w, w, b
        for(var i = 0; i < inputStones.length; i++) {
            var currentStone = inputStones[i];
            this.stones[this.current].push(currentStone);
            // currentStone++;
            if(currentStone === 4) {
                this.current = 0;
            } else {
                this.current++;
            }
        }
    }
    countStones() {
        var blackCount = 0;
        var whiteCount = 0;
        for (var i = 0; i < this.stones.length; i++) {
            if (this.stones[i] === "black") {
                blackCount++;
            } else if (this.stones[i] === "white") {
                whiteCount++;
            }
        }
    }
    displayShip() { //display ship if both ship button and dock button have been clicked
        if () {
            $(".temple-container").append(this.sailingship.currentstones[i])
        }
    }
    displayStones() {
        $("#templeBlock1").append(this.stones[0]);
        $("#templeBlock2").append(this.stones[1]);
        $("#templeBlock3").append(this.stones[2]);
        $("#templeBlock4").append(this.stones[3]);
    }
    handleDockClick() {

    }
}

var temple = new Temple(image);