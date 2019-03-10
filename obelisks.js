
class Obelisks {
    constructor(dockClicked) {
        this.docked = false;
        this.sailingShip = null;
        this.dockSelected = null;
        this.dockCallBack = dockClicked;
        this.dock = $('.obelisks-harbor');
        this.cubesCounter = {
            black: 0,
            white: 0
        }
        this.blackPoints = 0;
        this.whitePoints = 0;
        this.currentStone = null;
        this.stoneColor = null;

        this.handleDockClick = this.handleDockClick.bind(this);
        $('.obelisks-dock-button').on('click', this.handleDockClick);
    }
    
    handleDockClick() {
        this.dockCallBack(this);
        this.dockShip();
    }

    render(domElement, object) {
        domElement.append(object)
    }

    dockShip() {
        if (!this.docked) {
            if (this.sailingShip && this.dockSelected) {
                this.docked = true;
                this.render(this.dock, this.sailingShip.ship);
                this.renderShipCubes();
            }
        }
    }

    renderShipCubes() {
        for (var i = this.sailingShip.currentStones.length - 1; i >= 0; i--) {
            this.currentStone = $(this.sailingShip.currentStones[i]);
            this.stoneColor = this.currentStone.css('background-color');
            var blackStoneContainer = $('.obelisks-column > .black');
            var whiteStoneContainer = $('.obelisks-column > .white');
            var blackStoneCounter = $('.black > .stone');
            var whiteStoneCounter = $('.white > .stone');
            if(this.stoneColor === 'rgb(0, 0, 0)'){
                if(blackStoneCounter.length === 0){
                    this.render(blackStoneContainer, this.currentStone);
                }else{
                    this.currentStone.remove();
                }
                this.cubesCounter.black++;
                blackStoneCounter.text(this.cubesCounter.black).css('color', 'white');
            }else if(this.stoneColor === 'white'){
                if(whiteStoneCounter.length === 0){
                    this.render(whiteStoneContainer, this.currentStone);
                }else{
                    this.currentStone.remove();
                }
                this.cubesCounter.white++;
                whiteStoneCounter.text(this.cubesCounter.white);
            }
        }
    }

    calcPoints() {
        if(this.cubesCounter.black > this.cubesCounter.white){
            this.blackPoints+=10;
            this.whitePoints+=1;
        }else{
            this.blackPoints+=1;
            this.whitePoints+=10;
        }
    }
}