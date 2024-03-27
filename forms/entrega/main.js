$(document).ready(function () {
    FLUIGC.switcher.init('#recebimento');

    var atividade = getAtividade()
    
    if (atividade == 0 || atividade == 4) {
        var today = new Date().toLocaleDateString();
        FLUIGC.calendar('#prazoEntrega', {
            minDate: today,
            showToday: true,
            language: 'pt-br',
        });
    }
})

function setSelectedZoomItem(selectedItem) {
    if (selectedItem.inputId == "unidadeOrigem") {
        $("#rua").val(selectedItem.rua)
        $("#numero").val(selectedItem.numero)
        $("#complemento").val(selectedItem.complemento)
        $("#bairro").val(selectedItem.bairro)
        $("#cidade").val(selectedItem.cidade)
        $("#uf").val(selectedItem.uf)

        var c1 = DatasetFactory.createConstraint('colleagueName', selectedItem.respAlmox, selectedItem.respAlmox, ConstraintType.MUST);
        var ds = DatasetFactory.getDataset('colleague', null, new Array(c1), null);

        if (ds.values.length > 0) {
            var respAlmoxDest = ds.values[0]["colleaguePK.colleagueId"]
            $('#respAlmoxDest').val(respAlmoxDest);
        }
    }
    if (selectedItem.inputId == "unidadeDestino") {
        $("#respAlmox").val(selectedItem.respAlmox)
        $("#ruaDest").val(selectedItem.rua)
        $("#numeroDest").val(selectedItem.numero)
        $("#complementoDest").val(selectedItem.complemento)
        $("#bairroDest").val(selectedItem.bairro)
        $("#cidadeDest").val(selectedItem.cidade)
        $("#ufDest").val(selectedItem.uf)

        var c1 = DatasetFactory.createConstraint('colleagueName', selectedItem.respAlmox, selectedItem.respAlmox, ConstraintType.MUST);
        var ds = DatasetFactory.getDataset('colleague', null, new Array(c1), null);

        if (ds.values.length > 0) {
            var respAlmoxDest = ds.values[0]["colleaguePK.colleagueId"]
            $('#respAlmoxDest').val(respAlmoxDest);
        }
    }
}

function removedZoomItem(removedItem) {
    if (removedItem.inputId == "unidadeOrigem") {
        $("#rua").val("")
        $("#numero").val("")
        $("#complemento").val("")
        $("#bairro").val("")
        $("#cidade").val("")
        $("#uf").val("")
    }
    if (removedItem.inputId == "unidadeDestino") {
        $("#respAlmox").val("")
        $("#ruaDest").val("")
        $("#numeroDest").val("")
        $("#complementoDest").val("")
        $("#bairroDest").val("")
        $("#cidadeDest").val("")
        $("#ufDest").val("")
    }
}