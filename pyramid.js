class Pyramid {
    constructor(dockClicked, moveStone) {
        this.docked = false;
        this.sailingShip = null;
        this.dockSelected = null;
        this.dockCallBack = dockClicked;
        this.moveStone = moveStone;
        this.dock = null;

        this.pyramidPoints = [2, 1, 3, 2, 4, 3, 2, 1, 3, 2, 3, 1, 3, 4];
        this.pointsIndex = 0;
        this.blackPoints = 0;
        this.whitePoints = 0;
        this.currentRound = null;
        this.currentStone = null;
        this.stoneColor = null;

        this.handleDockClick = this.handleDockClick.bind(this);
        this.handleStoneUnload = this.handleStoneUnload.bind(this);
        $('.pyramid-dock-button').on('click', this.handleDockClick);

        this.clickDock();
    }
    handleDockClick() {
        console.log('hi');
        this.dockCallBack(this);
        this.dockShip();
    }

    render(domElement, object) {
        $(domElement).append(object)
    }

    clickDock(){
        this.dock = $('.pyramid-harbor');
        console.log('clicked')
    }

    dockShip() {
        if (!this.docked) {
            if (this.sailingShip && this.dockSelected) {
                this.docked = true;
                this.dock.append(this.sailingShip.ship);
                this.renderShipCubes();
            }
        }
    }

    removeShip() {
        $('.ship').remove();
        $('.sail').remove();
    }

    handleStoneUnload(){
        this.moveStone();
    }

    renderShipCubes() {
        for (var i = this.sailingShip.currentStones.length - 1; i >= 0; i--) {
            this.currentStone = $(this.sailingShip.currentStones[i]);
            this.stoneColor = this.currentStone.css('background-color');
            var stoneContainer = $('.pyramid-block-container');
            var stoneCounter = $('.pyramid-block-container > .stone');
            if(stoneCounter.length < 9){
                this.currentStone.addClass('pyramid-bottom');
                this.render(stoneContainer, this.currentStone)
            }else if(stoneCounter.length < 13){
                this.currentStone.addClass('pyramid-middle');
                this.render(stoneContainer, this.currentStone)
            }else if(stoneCounter.length < 14){
                this.currentStone.addClass('pyramid-top');
                this.render(stoneContainer, this.currentStone)
            }
            this.calcPoints();
            this.handleStoneUnload();
        }
    }

    calcPoints() {
        if(this.pointsIndex < this.pyramidPoints.length){
            if (this.stoneColor === 'rgb(0, 0, 0)') {
                this.blackPoints+=this.pyramidPoints[this.pointsIndex];
            } else if (this.stoneColor === 'white'){
                this.whitePoints+=this.pyramidPoints[this.pointsIndex];
            }
            this.pointsIndex++;
        }
    }
}