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
        this.rechargeCubes();
        this.playerHandler2(this);
    }

    rechargeCubes(){
        if(this.currentPlayer === null){
            alert('It\'s the first player\'s turn.');
        }else if(this.playerColor === this.currentPlayer.playerID.playerColor){
            if (this.currentBlockCount <= 2){
                this.currentBlockCount += 3;
            } else if (this.currentBlockCount >= 3){
                this.currentBlockCount = 5;
            }    
        }else{
            alert(`No cheating!`);
        }
    }
}