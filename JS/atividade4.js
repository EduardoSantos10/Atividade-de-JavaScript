function Maioridade(){
    var mar1;

    mar1 = parseInt(document.getElementById("mar1").value);

    

    if(mar1 <= 18){
        mar1 = "Você é de Menor";

    }else if(mar1 >= 18){
        mar1 = "Você é de Maior";

    }else{
        mar1 = "Erro, Digite um número válido";
    }

    document.getElementById("resultado").innerHTML = mar1;

}