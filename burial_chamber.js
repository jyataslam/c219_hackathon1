class BurialChamber{
    constructor(dockClicked){
        // this.image = image;
        this.docked = false;
        this.array = [];
        this.sailingShip = null;
        this.dockSelected = null;
        this.dockClicked = dockClicked;
        this.dock = null;
        this.cubeArray = [[],[],[]];//change to how you calculate points & how you want to push
        this.cubeArrayPosition = 0;
        this.blackPoints = 0;
        this.whitePoints = 0;
        this.currentRound = null;
        
        this.handleDock = this.handleDock.bind(this);
        $('.burial-dock-button').on('click', this.handleDock);
        // this.addDock();
        this.clickDock();
    }
    handleDock(){
        this.dockClicked(this);
        this.dockShip();
    }

    clickDock(){
        this.dock = $('.burialchamber-harbor');
        console.log('clicked')
    }

    // addDock(){
    // var dockButton = $('<button>').addClass('docking').text('Dock Ship').on('click', this.handleDock);
    // this.dock = $('<div>').addClass('dock');
    // this.dock.append(dockButton);
    // this.render(this.dock);
    // }
    render(object){
        $('.burialchamber-harbor').append(object)//change to your area        
    }
    dockShip(){
        if(!this.docked){
            if(this.sailingShip && this.dockSelected){
                this.docked = true;    
                this.dock.append(this.sailingShip.ship);
                this.renderShipCubes();
                // if($('.harbor > .ship').length < 1){
                    // this.removeShip();
                    this.currentRound++;
                    if(this.currentRound === 7){
                        var points = this.calcPoints();
                        console.log(points);
                    }
                // } //turn on when all docks set
            }
        }
    }
    removeShip(){
        $('.ship').remove();
        $('.sail').remove();
    }
    renderShipCubes(){//adjust this to your specific area
        for(var i = this.sailingShip.currentStones.length-1; i >= 0 ; i--){
            var currentStone = $(this.sailingShip.currentStones[i]);
            var stoneColor = currentStone.css('background-color');
            this.cubeArray[this.cubeArrayPosition].push(stoneColor);
            this.cubeArrayPosition++;
            if(this.cubeArrayPosition === 3){
                this.cubeArrayPosition = 0;
            }
            $('.burial_chamber').append(currentStone);
        }
    }
    calcPoints(){//adjust to your area
        for(var i = 0; i < this.cubeArray.length; i++){
            var blackCounter = 0;
            var whiteCounter = 0;
            for(var j = 0; j < this.cubeArray[i].length; j++){
                var currentColor = this.cubeArray[i][j];
                if(currentColor === 'rgb(0, 0, 0)'){
                    blackCounter++;
                }else{
                    whiteCounter++;
                }
            }
            if(blackCounter > whiteCounter){
                this.blackPoints+=8;
                this.whitePoints+=4;
            }else if(whiteCounter > blackCounter){
                this.whitePoints+=8;
                this.blackPoints+=4;
            }else{
                this.blackPoints+=4;
                this.whitePoints+=4;
            }
        }
    }
}

