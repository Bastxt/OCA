result = "";
newRow = json();

comm = split(_line_item_comment, ",");
sizepp = jsonarraysize(parametrosTurismo);

//linea sistema de Producto<<<
jsonput(newRow, "numeroLinea",sizepp+1);
jsonput(newRow, "referencialT",commerce.comRule(ReferencialesTurismo));
jsonput(newRow, "tipoDeServicioT",commerce.comRule(tipoDeServicioTurismo));
jsonput(newRow, "servicioAcreditacionT",commerce.comRule(ServicioACertificarTurismo));
jsonput(newRow, "esquemaDeCertificacionT",commerce.comRule(EsquemaDeCertificacion_turismo));
jsonput(newRow, "vigenciaDeCertificacionT",commerce.comRule(VigenciaDeLaCertificacion_turismo));
jsonarrayappend(parametrosTurismo, newRow);

result = result + "|"+_document_number+"~parametrosTurismo~" + jsonarrayrefid(parametrosTurismo) + "|";

return result;