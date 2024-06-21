function fatorial(){
    var num1;
    var res = 1;

    num1 = parseInt(document.getElementById("num1").value);

    i = 1;
    while(num1 > i){
        res = res * num1;
        num1 = num1 - 1;
    }
    document.getElementById("resultado").innerHTML = res;

}