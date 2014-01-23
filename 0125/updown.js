var body = document.body;
// body = document.getElementsByTagName('body')[0];

function UpDownGame(){
  this.answer = 123;
  this.text = ["You won!", "Down!", "Up!"];
}
UpDownGame.prototype={
  genRandomNumber : function(){
    this.answer = parseInt(Math.random()*100, 10);
    body.innerHTML = ""+this.answer;
  },
  guess : function(){
    var inputedNumber = prompt("plz input number");
    inputedNumber = parseInt(inputedNumber, 10);
    var result = 0;
    
    if(inputedNumber == this.answer) result = 0;
    else if(inputedNumber > this.answer) result = 1;
    else result = 2;

    alert(this.text[result]);
    return result;
  },
  start : function(){
    this.genRandomNumber();
    for(var c = 0; c < 10; c++)
      if(this.guess() === 0) return;
    alert("You lose!");
  }
};

var game = new UpDownGame();
game.start();