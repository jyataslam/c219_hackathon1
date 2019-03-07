
class Game{
    constructor(name){
        this.name = name;
        this.shipSailed = null;
        this.dockClicked = null;
        this.newRound = null;
        this.burial_chamber = null;
        this.temple = null;
        this.obelisks = null;
        this.pyramids = null;
        this.market = null;

        this.shipHandler = this.shipHandler.bind(this);
        this.dockHandler = this.dockHandler.bind(this);

        this.addHarbor();
        this.addArea();
    }
    addHarbor(){
        this.newRound = new Harbor(this.shipHandler);
    }
    addArea(){
        this.burial_chamber = new BurialChamber(this.dockHandler);
        // this.temple = new Temple(this.shipSailed);
        // this.obelisks = new Obelisks(this.shipSailed);
        // this.pyramids = new Pyramids(this.shipSailed);
        // this.market = new Market(this.shipSailed);
    }
    shipHandler(ship){
        this.shipSailed = ship;
        this.burial_chamber.sailingShip = this.shipSailed;
        console.log(this.shipSailed);
    }
    dockHandler(dock){
        this.dockClicked = dock;
        console.log(this.dockClicked);
    }
}