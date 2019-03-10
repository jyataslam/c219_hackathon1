class Temple {
    debugger;
    constructor(dockClicked) {
        this.docked = false;
        this.sailingShip = null;
        this.dockSelected = null;
        this.dockCallback = dockClicked;
        this.handleDockClick = this.handleDockClick.bind(this);
        $('.temple-dock-button').on('click', this.handleDockClick);

        this.stonesOnTemple = [
            [], [], [], []
        ];
        this.stonesOnTemplePosition = 0;

        this.blackPoints = 0;
        this.whitePoints = 0;

        this.currentRound = null;
        // this.currentStone = null;
    }
    handleDockClick() {
        this.dockCallback(this);
        this.dockShip();
    }
    // render(domElement, object) {
    //     $(domElement).append(object)
    // }
    dockShip() {
        if (!this.docked) {
            if (this.sailingShip && this.dockSelected) {
                this.docked = true;
                this.dockSelected.append(this.sailingShip.ship);
                this.renderShipCubes();
                this.nextRound();
            }
        }
    }
    nextRound() {
        this.removeShip();
        this.currentRound++;
        if (this.currentRound === 7) {
            var points = this.calcPoints();
            console.log(points);
        }
    }
    removeShip() {
        $('.ship').remove();
        $('.sail').remove();
    }
    renderShipCubes() {//adjust this to your specific area
        for (var i = this.sailingShip.currentStones.length - 1; i >= 0; i--) {
            this.currentStone = $(this.sailingShip.currentStones[i]);
            this.addStonesToArray();
            $('.temple-container').append(this.currentStone);
        }
    }
    addStonesToArray(inputStones) { //current ship's current stones = inputStones
        //b, w, w, b
        for (var i = 0; i < inputStones.length; i++) {
            var currentStone = inputStones[i];
            this.stonesOnTemple[this.stonesOnTemplePosition].push(currentStone);
            this.stonesOnTemplePosition++;
            // currentStone++;
            // if(currentStone === 4)
            if (this.stonesOnTemple[this.stonesOnTemplePosition] !== null) {
                this.stonesOnTemplePosition = 0;
                // } else {
                //     this.currentStonesArrayPosition++;
                // }
            }
        }
    }
    calcPoints() {
        var blackCount = 0;
        var whiteCount = 0;
        for (var i = 0; i < this.stonesOnTemple.length; i++) {
            if (this.stonesOnTemple[i] === "black") {
                blackCount++;
            } else if (this.stonesOnTemple[i] === "white") {
                whiteCount++;
            }
        }
        this.blackPoints = blackCount;
        this.whitePoints = whiteCount;
    }
}