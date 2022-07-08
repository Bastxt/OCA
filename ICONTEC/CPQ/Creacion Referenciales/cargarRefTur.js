res = "";
newLine = 0;
sizepp = jsonarraysize(parametrosTurismo);
size = range(sizepp);
c = 0;

if (sizepp > 0) {
    for val in size{
        row = jsonarrayget(parametrosTurismo, val, "json");
        lAct = jsonget(row, "numeroLinea", "integer");
        if (lAct == numeroDeLineaTurismo) {
            newLine = c;
        }
        c = c + 1;
    }
}
else {
    newLine = 1;
}

datosRef = jsonarrayget(parametrosTurismo, newLine, "json");

res = res + _document_number + "~ReferencialesTurismo~" + jsonget(datosRef, "referencialT", "string") + "|";
res = res + _document_number + "~tipoDeServicioTurismo~" + jsonget(datosRef, "tipoDeServicioT", "string") + "|";
res = res + _document_number + "~ServicioACertificarTurismo~" + jsonget(datosRef, "servicioAcreditacionT", "string") + "|";
res = res + _document_number + "~VigenciaDeLaCertificacion_turismo~" + jsonget(datosRef, "vigenciaDeCertificacionT", "string") + "|";
res = res + _document_number + "~EsquemaDeCertificacion_turismo~" + jsonget(datosRef, "esquemaDeCertificacionT", "string") + "|";

return res;