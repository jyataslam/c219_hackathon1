class Harbor{
    constructor(shipFinder, blockRegister){
        this.allShips = [];
        this.requirements = {
            1: {
                value: 1,
                image: 'game_pieces/1.png'
            },
            2: {
                value: 1,
                image: 'game_pieces/2.png'
            },
            3: {
                value: 2,
                image: 'game_pieces/3.png'
            },
            4: {
                value: 3,
                image: 'game_pieces/4.png'
            }
        };
        this.sailingShip = shipFinder;
        this.harborBlockRegister = blockRegister;
        this.addShip(4);
    }

    addShip(total){
        for(var i = 0; i < total; i++){
            var randomCapacity = Math.floor(Math.random()*4 + 1);
            var sailRequirement = this.requirements[randomCapacity].value;
            var shipImage = this.requirements[randomCapacity].image;
            var newShip = new Ship(randomCapacity, sailRequirement, shipImage, this.sailingShip, this.harborBlockRegister);
            this.allShips.push(newShip);
            this.render($('.harbor'), this.allShips[i].ship);
            var sailButton = $('<button>').addClass('sail').text('Sail').on('click', newShip.handleBtnClick);
            this.render($('.harbor'), sailButton);
        }
    }

    render(domElement, object){
        $(domElement).append(object);
    }
}

class Ship{
    constructor(maxStones, sailRequirement, shipImage, sailCallBack, blockCallBack){
        this.maxStones = maxStones;
        this.currentStones = [];
        this.sailRequirement = sailRequirement;
        this.shipImage = shipImage;
        this.sailCallBack = sailCallBack;
        this.blockCallBack = blockCallBack;
        this.currentPlayer = null;

        this.addStone = this.addStone.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);

        this.ship = $('<div>').css('background-image', 'url('+shipImage+')').addClass('ship').on('click', this.addStone);
    }

    addStone(){
        var currentcolor = this.currentPlayer.playerID.playerColor;
        if(this.currentStones.length < this.maxStones){
            var newStone = $('<div>').css('background-color', currentcolor).addClass('stone ' + currentcolor);
            this.currentStones.push(newStone);
            this.render(newStone); 
        }else{
        }
        this.blockCallBack();
    }

    render(playerStone){
        if(this.currentStones.length <= 1){
            $(this.ship).append(playerStone);
        }else{
            playerStone.insertBefore(this.ship.find('>:first-child'));
        }
    }

    handleBtnClick(){
        this.sailCallBack(this);
        // this.sail();
    }

    sail(){//does nothing currently; fix for docking
        if(this.currentStones.length >= this.sailRequirement){
        }else{
        }
    }
}