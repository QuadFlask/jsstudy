var sum = 0;
function read(){
    return prompt('input number');
}
function adder(){
    var number;
    while(!isNaN(number = read()) && number!= '' && number != null)
        sum += parseInt(number);
    alert('sum = ' + sum);
}
 window.onload = function(){
    adder();
}