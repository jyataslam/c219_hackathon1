class Obelisks {
    constructor( image, sailingShip ){
        this.image = image;
        this.dockedStatus = false;
        this.points = {
            player1: 0,
            player2: 0
        }
        // this.blockColor = game.newRound.allShips[0].currentStones[0].css('background-color)
        
        this.sailingShip = sailingShip;
        this.handleDockClick = this.handleDockClick.bind(this);
    }
    getPoints(){
        if ( this.dockedStatus != false ){
            for ( var i = 0; i < this.sailingShip.currentStones.length - 1; i++ ){
                //need to target the specific squares on the docking ship
                if (this.sailingShip.currentStones[i].css('background-color') === 'black'){
                    //increase player 1 points
                    this.points.player1++;
                    $('#obelisk1').text(this.points.player1);
                } else if (this.sailingShip.currentStones[i].css('background-color') === 'white'){
                    //increase player 2 points
                    this.points.player2++
                    $('#obelisk2').text(this.points.player2);
                } else {
                    return
                }
            }
        }
    }
    calcBonusPoints(){
        if (this.points.player1 > this.points.player2){
           //if player 1 has more blocks in the obelisk, add 10 to their total
           this.points.player1 += 10;
       } else if (this.points.player1 < this.points.player2){
           //if player 2 has more blocks in the obelisk, add 10 to their total
           this.points.player2 += 10;
       } else {
           //if both players have the same number of blocks in obelisk, add 5 to both
           this.points.player1 += 5;
           this.points.player2 += 5;
       }
    }
    handleDockClick(){
        
    }
    render(){

    }
}