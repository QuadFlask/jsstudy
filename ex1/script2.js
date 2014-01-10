function write1to100toBody(){
    var body = document.getElementsByTagName('body')[0];
    for(var i = 1; i <= 100; i++)
        body.innerHTML += i + "<br>";
}

function write1to100toConsole(){
    for(var i = 1; i <= 100; i++)
        console.log(i);
}

window.onload = function(){
    write1to100toConsole();
    write1to100toBody();
}