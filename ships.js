/* Code for sortable
  <script src="//code.jquery.com/jquery-1.12.4.js"></script>
  <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
 */


class Ship{
    constructor(maxStones, sailRequirement){
        this.maxStones = maxStones;//how many divs to make inside
        this.currentStones = [];//array for stone colors; when appending onto ship or destination go length-1 -> 0 due to how html flow
        this.sailRequirement = sailRequirement;

        this.addStone = this.addStone.bind(this);
        this.sail = this.sail.bind(this);

        $('.ship').on('click', this.addStone);//may have to use this
        $('button.sail').on('click', this.sail)//may have to use this
    }
    addStone(color){
        if(this.currentStones.length < this.maxStones){//if ship is not full, add a stone
            var newStone = $('<div>').css('background-color', color).addClass('stone');//class to do css later
            this.currentStones.push(newStone);//record in array; useful when sending to destination later
            // this.render(newStone); //comment out till attached with html + css or error
        }else{
            return `Ship is full. Cannot add stone.`;
        }
    }
    render(playerStone){
        if(this.currentStones.length > 1){
            $('.ship').append(playerStone);//assume div with class of ship
        }else{
            playerStone.insertBefore('.ship .stone');//puts new stones before old ones - counter flow of html
        }
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