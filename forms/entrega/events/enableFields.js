function enableFields(form){
    var atividade = getValue("WKNumState");
    
    if (atividade == 5 ) {
        form.setEnabled('unidadeOrigem', false);
        form.setEnabled('unidadeDestino', false);
        form.setEnabled('descMercadoria', false);
    }
}