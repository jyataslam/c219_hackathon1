class BurialChamber{
    constructor(dockClicked){
        // this.image = image;
        this.docked = false;
        this.array = [];
        this.sailingShip = null;
        this.dockClicked = dockClicked;
        
        this.handleDock = this.handleDock.bind(this);
        this.addDock();
    }
    handleDock(){
        this.dockClicked(this);
    }
    addDock(){
        var dockButton = $('<button>').addClass('docking').text('Dock Ship').on('click', this.handleDock);
        var dock = $('<div>').addClass('dock');
        dock.append(dockButton);
        this.render(dock);
    }
    render(object){
        $('.harbor').append(object)        
    }
}