function inversao(){
    var numero1;
    var numero2;
    var numero3;
    var numero4;
    var numero5;
    var troca;

    numero1 = parseInt(document.getElementById("numero1").value);
    numero2 = parseInt(document.getElementById("numero2").value);
    numero3 = parseInt(document.getElementById("numero3").value);
    numero4 = parseInt(document.getElementById("numero4").value);
    numero5 = parseInt(document.getElementById("numero5").value);

    //trocando numero um com ultimo

    troca = numero1;
    numero1 = numero5;
    numero5 = troca;

    //trocando numero dois com penultimo

    troca = numero2;
    numero2 = numero4;
    numero4 = troca;

    document.getElementById("resultado").innerHTML = numero1 + "\n" + numero2 + "\n" + numero3 + "\n" + numero4 + "\n" + numero5 + "\n";
}