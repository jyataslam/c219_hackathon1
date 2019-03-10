
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
            this.playersArray.push(player);
            var index = $('#'+i);
            index.on('click', player.playerClick);
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
        // this.temple = new Temple(this.dockHandler);
        // this.obelisks = new Obelisks(this.dockHandler);
        // this.pyramids = new Pyramids(this.dockHandler);
        // this.market = new Market(this.dockHandler);
    }

    playerHandler(){
        // this.currentPlayer = player;
        if (this.currentPlayer === this.playersArray[0]){
            $('.playerOneBlocks').text(this.currentPlayer.currentBlockCount);
        } else {
            $('.playerTwoBlocks').text(this.currentPlayer.currentBlockCount);
        }
        this.currentTurn++;
        this.changePlayerTurn();
    }

    shipHandler(ship){
        // this.shipSailed = ship;
        this.burial_chamber.sailingShip = ship;
        console.log(ship);
    }

    dockHandler(dock){
        // this.dockClicked = dock;
        this.burial_chamber.dockSelected = dock;
        this.currentTurn++;
        this.changePlayerTurn();
    }

    nextRound(){
        // if($('.harbor > .ship').length < 1){
            this.currentRound++;
            if(this.currentRound < 3){
                this.burial_chamber.docked === false;
                // this.temple.docked = false;
                // this.obelisks.docked = false;
                // this.pyramids.docked = false;
                // this.market.docked = false; 
                this.burial_chamber.sailingShip = null;
                this.burial_chamber.dockSelected = null;
                this.addHarbor();
                console.log(this.currentRound)
            }else{
                return alert("game over");
            }
        // }
    }
}