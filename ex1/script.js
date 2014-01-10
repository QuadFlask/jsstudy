// 1부터 100까지 출력하는 프로그램
// 1. console.log() 사용
// 2. html파일에 표시
function write2Console(str) {
    console.log(str);
}
function write2Body(str) {
    var divTag = document.createElement('div');
    divTag.innerHTML = str;
    document.getElementsByTagName('body')[0].appendChild(divTag);
}
function n1to100(){
    var str = '';
    for(i=1;i<100;i++)
        str += i + '\n';
    return str;
}
function n1to100br(){
    var str = '';
    for(i=1;i<100;i++)
        str += i + '<br>';
    return str;
}

window.onload = function(){
    var str = n1to100();
    write2Console(str);
    
    str = n1to100br();
    write2Body(str);
}