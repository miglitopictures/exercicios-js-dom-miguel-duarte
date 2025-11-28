function validarFormulario(){
    var nome = document.getElementById("nome").value
    var cpf = document.getElementById("cpf").value

    var mnsagem = document.getElementById("mensagem");

    const cpfValido = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    
    if (!(nome & cpf)) {
        mnsagem.innerText = "Os campos Nome e CPF são obrigatórios."
        mnsagem.style.color = "red"
    }

    if (cpfValido.test(cpf)) {
        mnsagem.innerText = "Cadastro validado com sucesso!";
        mnsagem.style.color = "green";
    } else {
        mnsagem.innerText = "CPF inválido! Use o formato 000.000.000-00.";
        mnsagem.style.color = "red";
    }
    
}