
class Harbor{
    constructor(shipFinder){
        this.allShips = [];
        this.ship = null;
        this.requirements = {
            1: 1,
            2: 1,
            3: 2,
            4: 3
        };
        this.sailingShip = shipFinder;
        this.addShip();
    }
    addShip(){
        for(var i = 0; i < 4; i++){
            var randomCapacity = Math.floor(Math.random()*4 + 1);
            var newShip = new Ship(randomCapacity, this.requirements[randomCapacity], this.sailingShip);//randomize first, object value for second
            this.allShips.push(newShip);//record in array; useful when sending to destination later
            this.render(this.allShips[i].ship);
            var sailButton = $('<button>').addClass('sail').text('Sail').on('click', newShip.handleBtnClick);
            this.render(sailButton);
        }
    }
    render(object){
        $('.harbor').append(object);
    }
}

class Ship{
    constructor(maxStones, sailRequirement, sailCallBack){
        this.maxStones = maxStones;//how many divs to make inside
        this.currentStones = [];//array for stone colors; when appending onto ship or destination go length-1 -> 0 due to how html flow
        this.sailRequirement = sailRequirement;
        this.sailCallBack = sailCallBack;

        this.addStone = this.addStone.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);

        this.ship = $('<div>').css('background-color', 'burlywood').addClass('ship').on('click', this.addStone);//class to do css later
    }
    addStone(color){//change 'black' to color later
        if(this.currentStones.length < this.maxStones){//if ship is not full, add a stone
            var newStone = $('<div>').css('background-color', color).addClass('stone');//class to do css later
            this.currentStones.push(newStone);//record in array; useful when sending to destination later
            this.render(newStone); //comment out till attached with html + css or error
            console.log(`${color} stone was added`);
        }else{
            console.log(`Ship is full. Cannot add stone.`);
        }
    }
    render(playerStone){
        if(this.currentStones.length <= 1){
            $(this.ship).append(playerStone);//assume div with class of ship
        }else{
            playerStone.insertBefore(this.ship.find('>:first-child'));//puts new stones before old ones - counter flow of html
        }
    }
    handleBtnClick(){
        this.sailCallBack(this);
        this.sail();
    }
    sail(){
        if(this.currentStones.length >= this.sailRequirement){//set requirement
        //code will depend on how we want to move ships
        //mockup of move div then ship method div.shipyard > div.ship
            return `Full speed ahead!`;//console test                
        }else{
            return `Ship does not meet requirement yet!`;
        }
    }
    specialCard(){
        $('.ship').attr('id', 'sortable');
        $('#sortable').sortable();
    }
}
