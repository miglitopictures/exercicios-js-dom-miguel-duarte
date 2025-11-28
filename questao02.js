var estadoCirculo = false;

function mudarForma(){
    estadoCirculo = !estadoCirculo;
    meuDiv = document.getElementById("forma");
    meuBotao = document.getAnimations("btn-forma");

    

    
    if (estadoCirculo){
        valorRadius = "0%";
    } else {
        valorRadius = "50%";
    };

    meuDiv.style.borderRadius = valorRadius;
    i++
}