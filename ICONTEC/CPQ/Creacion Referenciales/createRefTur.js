result = "";
newRow = json();
newLione = 0;

comm = split(_line_item_comment, ",");
sizepp = jsonarraysize(parametrosTurismo);

if(sizepp > 0){
    row = jsonarrayget(parametrosTurismo, sizepp-1, "json");
    lAct = jsonget(row,"numeroLinea","integer");    
    newLine = lAct+1;
}
else{ 
    newLine = 1;
}

//linea sistema de Producto<<<
jsonput(newRow, "numeroLinea",newLine);
jsonput(newRow, "referencialT",commerce.comRule(ReferencialesTurismo));
jsonput(newRow, "tipoDeServicioT",commerce.comRule(tipoDeServicioTurismo));
jsonput(newRow, "servicioAcreditacionT",commerce.comRule(ServicioACertificarTurismo));
jsonput(newRow, "esquemaDeCertificacionT",commerce.comRule(EsquemaDeCertificacion_turismo));
jsonput(newRow, "vigenciaDeCertificacionT",commerce.comRule(VigenciaDeLaCertificacion_turismo));
jsonarrayappend(parametrosTurismo, newRow);

result = result + "|"+_document_number+"~parametrosTurismo~" + jsonarrayrefid(parametrosTurismo) + "|";

return result;