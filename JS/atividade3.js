function posNeg(){
    var num1;
    

     num1 = parseInt(document.getElementById("num1").value);

     if(num1 < 0 ){
        num1 = "Negativo";

     }else if (num1 > 0){
        num1 = "Positivo";

     }else{

        num1 = "Zero";
     }

     document.getElementById("resultado").innerHTML = num1;
     
}