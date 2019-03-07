class Temple {
    constructor(image) {
        this.stones = [
            [], [], [], []
        ];
        this.current = 0;
        this.image = image;
    }
    addStones(inputStones) {
        //b, w, w, b, w, w, b, w, b, b, w
        for(var i = 0; i < inputStones.length; i++) {
            var currentStone = inputStones[i];
            this.stones[this.current].push(currentStone);
            // currentStone++;
            if(currentStone  % 4 === 0) {
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
    displayStones() {

    }
}