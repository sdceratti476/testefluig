function displayFields(form,customHTML){
    var atividade = getValue("WKNumState");
    customHTML.append("<script>");
    // customHTML.append("function getState() { return " + atividade + "; };");
    customHTML.append("function getUserCode() { return '" + getValue("WKUser") + "'; };");
    customHTML.append("function getAtividade() { return '" + atividade + "'; };");
    customHTML.append("function getMobile() { return " + form.getMobile() + "; };");
    customHTML.append("function getFormMode() { return '" + form.getFormMode() + "'; };");
    customHTML.append("function getCardId() { return '" + form.getDocumentId() + "'; };");
    customHTML.append("function isManager() { return " + getValue("WKManagerMode") + "; };");
    customHTML.append("</script>");
    var modo = form.getFormMode();
    customHTML.append("<script>function getMode(){ return '" + modo + "'; }</script>");

    //Serve para criar a variavel que vai ser utilizado no frontEnd para pegar a atividade atual do processo
    customHTML.append("<script>var atividade = " + atividade + "</script>");

    form.setShowDisabledFields(true);
    form.setHidePrintLink(true);

    // Início 
    if (atividade == 0 || atividade == 4) {
        form.setVisibleById('recebeMerc', false);
    }
    if (atividade == 5) {
        form.setVisibleById('recebeMerc', true);
    }
}