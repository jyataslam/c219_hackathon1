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
}