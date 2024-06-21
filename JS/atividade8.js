function contagem(){
    var num1;

    var total

    num1 = parseInt(document.getElementById("num1").value);
  



    if (num1 % 2 == 0) {

        total = "Par";
    }else{
        total = "Impar";
    }

    document.getElementById("resultado").innerHTML = total;
}