function add(op1, op2) {return op1+op2;}
function sub(op1, op2) {return op1-op2;}
function mul(op1, op2) {return op1*op2;}
function div(op1, op2) {return op1/op2;}
function doNothing(){};
function Calculator(op1, operator, op2){
    var result = getOperator(operator)(op1, op2);
    console.log(result);
    return result;
}    
function getOperator(operator){
    switch(operator){
        case '+': return add;
        case '-': return sub;
        case '*': return mul;
        case '/': return div;    
    }
    return doNothing;
}