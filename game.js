
class Game{
    constructor(name){
        this.name = name;
        this.shipSailed = null;
        this.dockClicked = null;
        this.newGame = null;
        this.burial_chamber = null;
        this.temple = null;
        this.obelisks = null;
        this.pyramids = null;
        this.market = null;
        this.currentRound = 1;
        this.currentTurn = 0;
        this.currentPlayer = null;
        this.playersArray = [];
        this.playersColor = ['white', 'black', 'gray', 'brown'];
        this.playerHandler = this.playerHandler.bind(this);
        this.shipHandler = this.shipHandler.bind(this);
        this.dockHandler = this.dockHandler.bind(this);

        this.addHarbor();
        this.addArea();
        this.createPlayers(2);
        this.changePlayerTurn();

    }

    createPlayers(users) {
        for(var i = 0; i < users; i++){
            var player = new Players(this.playersColor[i], i+2, this.playerHandler);
            this.playersArray.push({
                playerID: player,
                playerName: 'player' + (i+1),
                playerPoints: 0,
                playerCubes: i+2
            });
            var recharge = $('#'+i);
            recharge.on('click', player.playerClick);
        }
    }

    changePlayerTurn(){
        if (this.currentTurn % 2 === 0){
            this.currentPlayer = this.playersArray[0];
        } else {
            this.currentPlayer = this.playersArray[1];
        }
    }

    addHarbor(){
        this.newGame = new Harbor(this.shipHandler);
    }

    addArea(){
        this.burial_chamber = new BurialChamber(this.dockHandler);
        this.temple = new Temple(this.dockHandler);
        // this.obelisks = new Obelisks(this.dockHandler);
        // this.pyramids = new Pyramids(this.dockHandler);
        // this.market = new Market(this.dockHandler);
    }

    playerHandler(){
        if (this.currentPlayer === this.playersArray[0]){
            this.playersArray[0].playerCubes = this.currentPlayer.playerID.currentBlockCount;
            $('.playerOneBlocks').text(this.playersArray[0].playerCubes);
        } else {
            this.playersArray[1].playerCubes = this.currentPlayer.playerID.currentBlockCount;
            $('.playerTwoBlocks').text(this.playersArray[1].playerCubes);
        }
        this.currentTurn++;
        this.changePlayerTurn();
    }

    shipHandler(ship){
        this.burial_chamber.sailingShip = ship;
        this.temple.sailingShip = ship;
    }

    dockHandler(dock){
        this.burial_chamber.dockSelected = dock;
        
        this.currentTurn++;
        this.changePlayerTurn();
        this.temple.dockSelected = dock;
    }

    nextRound(){
        // if($('.harbor > .ship').length < 1){
            this.currentRound++;
            this.burial_chamber.currentRound = this.currentRound;
            if(this.currentRound < 7){
                this.burial_chamber.docked = false;
                this.temple.docked = false;
                // this.obelisks.docked = false;
                // this.pyramids.docked = false;
                // this.market.docked = false; 
                this.burial_chamber.sailingShip = null;
                this.burial_chamber.dockSelected = null;
                this.temple.sailingShip = null;
                this.temple.dockSelected = null;
                this.addHarbor();
                console.log(this.currentRound)
            }else{
                this.burial_chamber.calcPoints();
                this.playersArray[0].playerPoints+=this.burial_chamber.whitePoints;
                this.playersArray[1].playerPoints+=this.burial_chamber.blackPoints;
                this.render($('.player-one-score'), this.playersArray[0].playerPoints);
                this.render($('.player-two-score'), this.playersArray[1].playerPoints);
                this.decideWinner();
            }
        // }
    }

    decideWinner(){
        var currentWinner = [this.playersArray[0]];
        for(var i = 1; i < this.playersArray.length; i++){
            if(this.playersArray[i].playerPoints > currentWinner[0].playerPoints){
                currentWinner[0] = this.playersArray[i];
            }else if(this.playersArray[i].playerPoints === currentWinner[0].playerPoints){
                currentWinner.push(this.playersArray[i]);
            }
        }
        if(currentWinner.length === 1){
            alert(`${currentWinner[0].playerName} wins!`);
        }else{
            var tiedWinners = 'Tie between:';
            for(var i = 0; i < currentWinner.length; i++){
                tiedWinners = tiedWinners + ' ' + currentWinner[i].playerName;
            }
            alert(tiedWinners);
        }
    }

    render(domElement, value){
        $(domElement).text(value);
    }
}