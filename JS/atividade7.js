function aprovar(){

    var dcp1;
    var dcp2;
    var nota;

    dcp1 = parseInt(document.getElementById("dcp1").value);
    dcp2 = parseInt(document.getElementById("dcp2").value);


    if ((dcp1 >= 7) && (dcp2 >= 7)) {

        nota = "Aluno foi aprovado nas duas matériais";
    }
    else{
        if((dcp1 >= 7) || (dcp2 >= 7)) {

            nota = "O aluno foi aprovado em uma das matérias";
        }
        else{

            nota = "O aluno foi reprovado em uma das matérias";
        }

        media = "O aluno foi reprovado em ambas matérias";
    }
    document.getElementById("resultado").innerHTML = nota;
}
