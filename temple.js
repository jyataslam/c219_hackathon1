class Temple {
    constructor(dockClicked) {
        this.docked = false;
        this.sailingShip = null;
        this.dockSelected = null;
        this.dockCallBack = dockClicked;
        this.dock = null;

        this.stonesOnTemple = [
            [], [], [], []
        ];
        this.stonesOnTemplePosition = 0;
        this.blackPoints = 0;
        this.whitePoints = 0;
        this.currentRound = null;
        this.currentStone = null;
        this.stoneColor = null;

        this.handleDockClick = this.handleDockClick.bind(this);
        $('.temple-dock-button').on('click', this.handleDockClick);

        this.clickDock();
    }
    handleDockClick() {
        this.dockCallBack(this);
        this.dockShip();
    }
    // render(domElement, object) {
    //     $(domElement).append(object)
    // }
    clickDock(){
        this.dock = $('.temple-harbor');
    }
    dockShip() {
        if (!this.docked) {
            if (this.sailingShip && this.dockSelected) {
                this.docked = true;
                this.dock.append(this.sailingShip.ship);
                this.renderShipCubes();
                this.nextRound();
            }
        }
    }
    nextRound() {
        // this.removeShip();
        this.currentRound++;
        if (this.currentRound === 7) {
            var points = this.calcPoints();
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
            $('.temple-block').append(this.currentStone);
        }
    }
    addStonesToArray() {
        this.stoneColor = this.currentStone.css('background-color');
        this.stonesOnTemple[this.stonesOnTemplePosition].push(this.stoneColor);
        this.stonesOnTemplePosition++;
        if(this.stonesOnTemplePosition === 4){
            this.stonesOnTemplePosition = 0;
        }
    }
    calcPoints() {
        var blackCount = 0;
        var whiteCount = 0;
        this.blackPoints = 0;
        this.whitePoints = 0;
        for (var i = 0; i < this.stonesOnTemple.length; i++) {
            var lastStoneOnCurrentArray = this.stonesOnTemple[i][this.stonesOnTemple[i].length-1];
            if (lastStoneOnCurrentArray === 'rgb(0, 0, 0)') {
                blackCount++;
            } else if (lastStoneOnCurrentArray === 'white')
                whiteCount++;
            }
        this.blackPoints += blackCount;
        this.whitePoints += whiteCount;
    }
}