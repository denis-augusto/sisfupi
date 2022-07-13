function salvarCliente(){
    var cpfCnpjValue = document.querySelector("#cpfCnpj").value;
    var inscricaoEstadualValue = document.querySelector("#inscricaoEstadual").value;
    var nomeValue = document.querySelector("#nome").value;
    var enderecoValue = document.querySelector("#endereco").value;
    var numeroValue = document.querySelector("#numero").value;
    var bairroValue = document.querySelector("#bairro").value;
    var cidadeValue = document.querySelector("#cidade").value;
    var estadoValue = document.querySelector("#estado").value;
    var cepValue = document.querySelector("#cep").value;
    var telefone1Value = document.querySelector("#telefone1").value;
    var telefone2Value = document.querySelector("#telefone2").value;
    var emailValue = document.querySelector("#email").value;
    var observacaoValue = document.querySelector("#observacao").value;

    var formValue = {
        cpfCnpj: cpfCnpjValue,
        incrcaoEstadual: inscricaoEstadualValue,
        nome: nomeValue,
        endereco: enderecoValue,
        numero: numeroValue,
        bairro: bairroValue,
        cidade: cidadeValue,
        estado: estadoValue,
        cep: cepValue,
        telefone1: telefone1Value,
        telefone2: telefone2Value,
        email: emailValue,
        observacao: observacaoValue,

    };

    console.log(formValue);

    document.location.reload(true)

};