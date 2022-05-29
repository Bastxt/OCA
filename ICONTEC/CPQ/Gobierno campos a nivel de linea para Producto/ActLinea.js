//funcion de actualizacion de lineas modificada

result = "";

refProd = parametrosProducto;
sizepp = jsonarraysize(parametrosProducto);
indices = range(sizepp);


for index in indices {
    refTemp = jsonarrayget(refProd, index, "json");
    if (index + 1 == numeroDeLinea) {
        jsonput(refTemp, "referencialDeCertificacin", referencialCertificacin_pro);
        jsonput(refTemp, "procesoOServicioACertificar", procesoOServicioACertificar_pro);
        jsonput(refTemp, "esquemaDeCertificacin", esquemaDeCertificacion_pro);
        jsonput(refTemp, "tipoDeServicioProducto", tipoServicioPPS);
        jsonput(refTemp, "vigenciaDeLaCertificacin", vigenciaDeLaCertificacin_pro);
        jsonput(refTemp, "tipoDeAcreditacin", tipoDeAcreditacion_pro);
        jsonput(refTemp, "naceP", naceProducto);
        jsonput(refTemp, "iCS_pro", iCS);
        jsonput(refTemp, "divisinNaceL", divisinNace);
        break;
    }
}

result = result + "|" + _document_number + "~parametrosProducto~" + jsonarrayrefid(parametrosProducto) + "|";

return result;