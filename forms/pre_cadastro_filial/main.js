$(document).ready(function () {
    // Mascara
    $('#cep').mask('00000-000');

    // Validação de mascara 
    $('#codigo').change(function () {
        var codigo = $('#codigo').val()
        var c1 = DatasetFactory.createConstraint('codigo', codigo, codigo, ConstraintType.MUST);
        var ds = DatasetFactory.getDataset('ds_preCadastro_filial', null, new Array(c1), null);

        for (let i = 0; i < ds.values.length; i++) {
            if (ds.values.length > 0) {
                $('#codigo').val("")
                alert("Código já cadastrado.");
            } 
        }
    });

    // API CEP 
    $('#cep').change(function () {
        if ($("#cep").val() != "") {
            var cep = $("#cep").val()
            if (cep.includes("-") == true) {
                cep = cep.replace("-", "");
            }
            $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

                if (!("erro" in dados)) {
                    //Atualiza os campos com os valores da consulta.
                    $("#rua").val(dados.logradouro)
                    $("#complemento").val(dados.complemento)
                    $("#bairro").val(dados.bairro)
                    $("#cidade").val(dados.localidade)
                    $("#uf").val(dados.uf)
                } else {
                    //CEP pesquisado não foi encontrado.
                    $("#rua").val("")
                    $("#complemento").val("")
                    $("#numero").val("")
                    $("#bairro").val("")
                    $("#cidade").val("")
                    $("#uf").val("")
                    $("#cep").val("")
                    alert("CEP não encontrado.");
                }
            });
        }
    });
})

