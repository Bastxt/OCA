res = "";
newLine = 0;
sizepp = jsonarraysize(parametrosProducto);
size = range(sizepp);
c = 0;

if (sizepp > 0) {
    for val in size{
        row = jsonarrayget(parametrosProducto, val, "json");
        lAct = jsonget(row, "nLinea", "integer");
        if (lAct == numeroDeLinea) {
            newLine = c;
        }
        c = c + 1;
    }
}
else {
    newLine = 1;
}

datosRef = jsonarrayget(parametrosProducto, newLine, "json");

res = res + _document_number + "~referencialCertificacin_pro~" + jsonget(datosRef, "referencialDeCertificacin", "string") + "|";
res = res + _document_number + "~procesoOServicioACertificar_pro~" + jsonget(datosRef, "procesoOServicioACertificar", "string") + "|";
res = res + _document_number + "~esquemaDeCertificacion_pro~" + jsonget(datosRef, "esquemaDeCertificacin", "string") + "|";
res = res + _document_number + "~vigenciaDeLaCertificacin_pro~" + jsonget(datosRef, "vigenciaDeLaCertificacin", "string") + "|";
res = res + _document_number + "~tipoServicioPPS~" + jsonget(datosRef, "tipoDeServicioProducto", "string") + "|";
res = res + _document_number + "~tipoDeAcreditacion_pro~" + jsonget(datosRef, "tipoDeAcreditacin", "string") + "|";
res = res + _document_number + "~naceProducto~" + jsonget(datosRef, "naceP", "string") + "|";

return res;