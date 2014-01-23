var body = document.body;

function LadderGame(){
  this.ladder = [];
}
LadderGame.prototype = {
  makeLadder : function(player, depth){
    var x,y;
    for(y = 0; y < depth;y ++){
      this.ladder[y] = [];
      for(x = 0; x < player; x++){
        this.ladder[y][x] = 0;
      }
    }
    var bridgeCount = Math.max(1, parseInt(Math.random() * player * depth / 2, 10));
    for(var i=0;i<bridgeCount;i++){
      x = Math.floor(Math.random() * (player - 1));
      y = Math.floor(Math.random() * depth);
      if (parseInt(this.ladder[y][x], 10) == 0 && 
          parseInt(this.ladder[y][x+1], 10) == 0){
        this.ladder[y][x] = 1;
        this.ladder[y][x+1] = -1;
      } else bridgeCount++;
    }
    for(y = 0; y < depth;y ++){
      for(x = 0; x < player; x++){
        body.innerHTML += this.ladder[y][x] + " ";
      }
      body.innerHTML += "<br>";
    }
  },
  search : function(player){
    var result=player;
    for(var y = 0; y < this.ladder[0].length; y++){
      result += this.ladder[y][result];
    }
    return result;
  },
  printPrettyLadder : function(){
    var pretty = ['┤','│','├'];
    for(y = 0; y < this.ladder.length;y ++){
      for(x = 0; x < this.ladder[0].length; x++){
        body.innerHTML += ""+pretty[parseInt(this.ladder[y][x])+1];
      }
      body.innerHTML += "<br>";
    }
  }
};

var l = new LadderGame();
l.makeLadder(5,5);
body.innerHTML += "<br> result : "+l.search(1)+"<br><br>";
l.printPrettyLadder();
