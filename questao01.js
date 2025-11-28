function inserirTitulo(){
    var txt_titulo = document.getElementById("txt-titulo").value;

    document.getElementById("titulo").innerText = txt_titulo;
    document.getElementById("titulo").style.color = "blue";
}