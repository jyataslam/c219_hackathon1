class Harbor{
    constructor(shipFinder){
        this.allShips = [];
        this.requirements = {
            1: {
                value: 1,
                image: 'game_pieces/1.png'
            },
            2: {
                value: 1,
                image: 'game_pieces/2cropped.jpg'
            },
            3: {
                value: 2,
                image: 'game_pieces/3cropped.jpg'
            },
            4: {
                value: 3,
                image: 'game_pieces/4cropped.jpg'
            }
        };
        this.sailingShip = shipFinder;
        this.addShip();
    }

    addShip(){
        for(var i = 0; i < 4; i++){
            var randomCapacity = Math.floor(Math.random()*4 + 1);
            var sailRequirement = this.requirements[randomCapacity].value;
            var shipImage = this.requirements[randomCapacity].image;
            var newShip = new Ship(randomCapacity, sailRequirement, shipImage, this.sailingShip);
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
    constructor(maxStones, sailRequirement, shipImage, sailCallBack){
        this.maxStones = maxStones;
        this.currentStones = [];
        this.sailRequirement = sailRequirement;
        this.shipImage = shipImage;
        this.sailCallBack = sailCallBack;

        this.addStone = this.addStone.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);

        this.ship = $('<div>').css('background-image', 'url('+shipImage+')').addClass('ship').on('click', this.addStone);
    }

    addStone(color){
            if(this.currentStones.length < this.maxStones){
                var newStone = $('<div>').css('background-color', color).addClass('stone');
                this.currentStones.push(newStone);
                this.render(newStone); 
            }else{
            }
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
        this.sail();
    }

    sail(){//does nothing currently
        if(this.currentStones.length >= this.sailRequirement){
        }else{
        }
    }

    specialCard(){
        $('.ship').attr('id', 'sortable');
        $('#sortable').sortable();
    }
}