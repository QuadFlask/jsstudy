var body = document.body;

function BaseBallGame(){
  this.answer = [];
}
BaseBallGame.prototype={
  genRandomNumber : function(){
    this.numbers = [];
    
    for(var i = 0; i <= 9; i++)
      this.numbers.push(i);
    
    for(i = 0; i < 3; i++)
      this.answer.push(this.numbers.splice(parseInt(Math.random() * (10 - i), 10), 1)[0]);
    
    body.innerHTML = bb.answer;
  },
  guess : function(inputs){
    var strikes = 0, balls = 0;
    for(var i = 0; i < 3; i++) {
      if(inputs[i] == this.answer[i]) strikes++;
      else 
        for(var j = 0; j < 3; j++)
          if(i != j && inputs[i] == this.answer[j]) balls++;
    }
    return [strikes, balls];
  },
  start : function(){
    var number, result;
    this.genRandomNumber();
    do{
      number = parseInt(prompt("input your guess"), 10);
      number = [Math.floor(number / 100), 
                Math.floor(number / 10) % 10, 
                number % 10];
      result = this.guess(number);
      alert(result[0] + "S " + result[1] + "B");
    } while(parseInt(result[0], 10) != 3);
    alert("You won!");
  }
};

var bb = new BaseBallGame();
bb.start();