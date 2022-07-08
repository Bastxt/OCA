result = "";

refProd = parametrosTurismo;
sizepp = jsonarraysize(parametrosTurismo);
indices = range(sizepp);
c = 0;


for index in indices {
    refTemp = jsonarrayget(refProd, index, "json");
    lAct = jsonget(refTemp, "numeroLinea", "integer");
    if (lAct == numeroDeLineaTurismo) {
        jsonput(refTemp, "referencialT", commerce.comRule(referencialesTurismo));
        jsonput(refTemp, "tipoDeServicioT", commerce.comRule(tipoDeServicioTurismo));
        jsonput(refTemp, "servicioAcreditacionT", commerce.comRule(ServicioACertificarTurismo));
        jsonput(refTemp, "vigenciaDeCertificacionT", commerce.comRule(VigenciaDeLaCertificacion_turismo));
        jsonput(refTemp, "esquemaDeCertificacionT", commerce.comRule(EsquemaDeCertificacion_turismo));
        jsonput(refTemp, "numeroLinea", commerce.comRule(string(numeroDeLineaTurismo)));
        break;
    }
    c = c + 1;
}
result = result + "|" + _document_number + "~parametrosTurismo~" + jsonarrayrefid(parametrosTurismo) + "|";
return result;