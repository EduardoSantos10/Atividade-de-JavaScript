function imc(){
    var peso;
    var altura; //Declarar variáveis
    var m;
   

    //Coletar Dados
    altura = parseInt(document.getElementById("altura").value);
    peso = parseInt(document.getElementById("peso").value);

    //Realizar conta

    m = peso / (altura * altura);
    
    if (m < 16){
            m = "Baixo peso muito grave"
    } else if (m >= 16 && m < 16.99) {
            m = "Baixo peso grave";
    } else if (m >= 17 && m < 18.49) {
            m = "Baixo peso";
    } else if (m >= 18.50 && m < 24.99) {
            m = "Peso normal";
    } else if (m >= 24 && m < 29.99) {
            m = "Sobrepeso";
    } else if (m >= 30 && m < 34.99) {
            m = "Obesidade de primeiro grau";
    } else if (m >= 35 && m < 39.99) {
            m = "Obesidade de segundo grau"
    } else{
            m = "Obesidade de terceiro grau"
    }
    document.getElementById("resultado").innerHTML = m;

}