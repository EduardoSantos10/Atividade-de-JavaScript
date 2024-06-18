function bissexto() {
    var ano; //Declarar a variavel


    //Coletar os dados do formulário
    ano = parseInt(document.getElementById("ano").value);

    //Realizar Conta

    if(ano % 4 == 0){
        ano = "O Ano é bissexto"
    }else{
        ano = "O Ano não é Bissexto"
    }

    document.getElementById("resultado").innerHTML = ano;
}
