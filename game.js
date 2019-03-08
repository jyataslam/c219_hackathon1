
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
        this.currentPlayer = null;

        this.playersArray = [];
        this.playersColor = ['white', 'black', 'gray', 'brown'];

        this.playerHandler = this.playerHandler.bind(this);
        this.shipHandler = this.shipHandler.bind(this);
        this.dockHandler = this.dockHandler.bind(this);




        this.addHarbor();
        this.addArea();
        this.createPlayers(2);


    }

    createPlayers(users) {
        // this.player1 = new Players(c);
        // this.playersArray.push(this.player1);
        // this.player2 = new Players("white", 3, this.playerHandler);
        // this.playersArray.push(this.player2);
        for(var i = 0; i < users; i++){
            var player = new Players(this.playersColor[i], i+2, this.playerHandler);
            this.playersArray.push(player);
            var recharge = $('#'+i);
            recharge.on('click', player.playerClick);
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
    playerHandler(player){
        this.currentPlayer = player;
        console.log(player);
    }
    shipHandler(ship){
        // this.shipSailed = ship;
        this.burial_chamber.sailingShip = ship;
        console.log(ship);
    }
    dockHandler(dock){
        // this.dockClicked = dock;
        this.burial_chamber.dockSelected = dock;
        console.log(dock);
    }
    nextRound(){
        // if($('.harbor > .ship').length < 1){
            this.currentRound++;
            if(this.currentRound < 7){
                this.burial_chamber.docked = false;
                // this.temple.docked = false;
                // this.obelisks.docked = false;
                // this.pyramids.docked = false;
                // this.market.docked = false; 
                this.burial_chamber.sailingShip = null;
                this.burial_chamber.dockSelected = null;
                this.addHarbor();
                console.log(this.currentRound)
            }else{
                return `game over`;
            }
        // }
    }
}