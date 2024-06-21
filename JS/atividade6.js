function ponderada(){
    var pov1;
    var pov2;
    var pov3;
    var media;
    

    pov1 = parseInt(document.getElementById("pov1").value);
    pov2 = parseInt(document.getElementById("pov2").value);
    pov3 = parseInt(document.getElementById("pov3").value);

    

    media = (pov1 + pov2 + pov3) / 3;
    document.getElementById("resultado").innerHTML = media;
}