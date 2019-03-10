class BurialChamber{
    constructor(dockClicked){
        this.docked = false;
        this.sailingShip = null;
        this.dockSelected = null;
        this.dockCallBack = dockClicked;
        this.dock = $('.burialchamber-harbor');
        this.cubeArray = [[],[],[]];
        this.cubeArrayPosition = 0;
        this.blackPoints = 0;
        this.whitePoints = 0;
        this.currentStone = null;
        this.stoneColor = null;
        
        this.handleDock = this.handleDock.bind(this);
        $('.burial-dock-button').on('click', this.handleDock);
    }

    handleDock(){
        this.dockCallBack(this);
        this.dockShip();
    }

    addDock(){
    this.dock = $('<div>').addClass('dock');
    this.render($('.burialchamber-harbor'), this.dock);
    }

    render(domElement, object){
        domElement.append(object)     
    }

    dockShip(){
        if(!this.docked){
            if(this.sailingShip && this.dockSelected){
                this.docked = true;    
                this.render(this.dock, this.sailingShip.ship);
                this.renderShipCubes();
            }
        }
    }

    renderShipCubes(){
        for(var i = this.sailingShip.currentStones.length-1; i >= 0 ; i--){
            this.currentStone = $(this.sailingShip.currentStones[i]);
            this.addCubeToArray();
            this.render($('.burial_chamber'), this.currentStone);
        }
    }

    addCubeToArray(){
        this.stoneColor = this.currentStone.css('background-color');
        this.cubeArray[this.cubeArrayPosition].push(this.stoneColor);
        this.cubeArrayPosition++;
        if(this.cubeArrayPosition === 3){
            this.cubeArrayPosition = 0;
        }
    }

    calcPoints(){
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