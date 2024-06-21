function fibonacci(){
    var termos;
    var fibonacci = [0, 1];

    termos = parseInt(document.getElementById("termos").value);

    for(i = 2; i < termos; i++){
        fibonacci[i - 1] + fibonacci[i - 2];
    }

    if(termos === 1){
        fibonacci = [0];
    }else if(termos === 2){
        fibonacci = [0, 1];
    }

    document.getElementById("resultado").innerHTML = "Sequencia de Fibonacci: " + fibonacci(", ");
}