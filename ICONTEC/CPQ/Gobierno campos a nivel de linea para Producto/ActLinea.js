//funcion de actualizacion de lineas modificada

result = "";

refProd = parametrosProducto;
sizepp = jsonarraysize(parametrosProducto);
indices = range(sizepp);
c = 0;


for index in indices {
    refTemp = jsonarrayget(refProd, index, "json");
    lAct = jsonget(refTemp, "nLinea", "integer");
    if (lAct == numeroDeLinea) {
        newLine = c;
        jsonput(refTemp, "referencialDeCertificacin",commerce.comRule(referencialCertificacin_pro));
        jsonput(refTemp, "procesoOServicioACertificar",commerce.comRule(procesoOServicioACertificar_pro));
        jsonput(refTemp, "esquemaDeCertificacin",commerce.comRule(esquemaDeCertificacion_pro));
        jsonput(refTemp, "tipoDeServicioProducto",commerce.comRule(tipoServicioPPS));
        jsonput(refTemp, "vigenciaDeLaCertificacin",commerce.comRule(vigenciaDeLaCertificacin_pro));
        jsonput(refTemp, "tipoDeAcreditacin",commerce.comRule(tipoDeAcreditacion_pro));
        //jsonput(refTemp, "naceP",commerce.comRule(naceProducto));
        //jsonput(refTemp, "iCS_pro",commerce.comRule(iCS));
        //jsonput(refTemp, "divisinNaceL",commerce.comRule(divisinNace));
        break;
    }
    c = c + 1;
}

result = result + "|" + _document_number + "~parametrosProducto~" + jsonarrayrefid(parametrosProducto) + "|";

return result;