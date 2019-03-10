class BurialChamber{
    constructor(dockClicked){
        // this.image = image;
        this.docked = false;
        this.sailingShip = null;
        this.dockSelected = null;
        this.dockCallBack = dockClicked;
        this.dock = null;
        this.cubeArray = [[],[],[]];//change to how you calculate points & how you want to push
        this.cubeArrayPosition = 0;
        this.blackPoints = 0;
        this.whitePoints = 0;
        this.currentRound = null;
        this.currentStone = null;
        this.stoneColor = null;
        
        this.handleDock = this.handleDock.bind(this);
        $('.burial-dock-button').on('click', this.handleDock);
        // this.addDock();
        // this.clickDock();
    }
    handleDock(){
        this.dockCallBack(this);
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
                // this.nextRound();
            }
        }
    }
    nextRound(){
        // if($('.harbor > .ship').length < 1){
        // this.removeShip();
        // this.currentRound++;
        // if(this.currentRound === 7){
        //     var points = this.calcPoints();
        //     console.log(points);
        // }
        // } //turn on when all docks set        
    }
    removeShip(){
        $('.ship').remove();
        $('.sail').remove();
    }
    renderShipCubes(){//adjust this to your specific area
        for(var i = this.sailingShip.currentStones.length-1; i >= 0 ; i--){
            this.currentStone = $(this.sailingShip.currentStones[i]);
            this.addCubeToArray();
            $('.burial_chamber').append(this.currentStone);
        }
    }
    addCubeToArray(){
        this.stoneColor = this.currentStone.css('background-color');
        this.cubeArray[this.cubeArrayPosition].push(this.stoneColor);
        this.cubeArrayPosition++;
        if(this.cubeArrayPosition === 3){
            this.cubeArrayPosition = 0;
        }
        console.log(this.cubeArray);
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