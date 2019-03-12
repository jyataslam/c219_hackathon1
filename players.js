class Players {
    constructor(color, startingCubes, playerHandler) {
        this.playerHandler2 = playerHandler;
        this.playerColor = color;
        this.maxCubes = 5;
        this.currentBlockCount = startingCubes;
        this.currentPlayer = null;
        this.playerClick = this.playerClick.bind(this);
        this.rechargeCubes = this.rechargeCubes.bind(this);
    }

    playerClick(){
        if(this.playerColor === this.currentPlayer.playerID.playerColor){
            this.rechargeCubes();
            this.playerHandler2(this);    
        }else{
            alert(`Not your turn`);
        }
    }

    rechargeCubes(){
        if (this.currentBlockCount <= 2){
            this.currentBlockCount += 3;
        } else if (this.currentBlockCount >= 3){
            this.currentBlockCount = 5;
        }    
    }
}