function cadastrarUsuario(){
    var nome = document.getElementById("nome").value
    var dataNascimento = document.getElementById("dataNasc").value
    var rua = document.getElementById("rua").value
    var numero = document.getElementById("numero").value
    var cidade = document.getElementById("cidade").value
    var estado = document.getElementById("uf").value

    var frase = `${nome} nasceu no dia ${dataNascimento} e mora na rua ${rua}, número ${numero}, na cidade ${cidade} do estado ${estado}.`

    document.getElementById("resultado").innerText = frase
    document.getElementById("resultado").style.color = "green"
    document.getElementById("resultado").style.fontSize = "24px"
    
}