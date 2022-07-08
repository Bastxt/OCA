result = "";
newRow = json();

refProd = parametrosProducto;
sizepp = jsonarraysize(parametrosProducto);

//linea sistema de Producto<<<
jsonput(newRow, "nLinea",sizepp + 1);
jsonput(newRow, "referencialDeCertificacin",commerce.comRule(referencialCertificacin_pro));
jsonput(newRow, "procesoOServicioACertificar",commerce.comRule(procesoOServicioACertificar_pro));
jsonput(newRow, "esquemaDeCertificacin",commerce.comRule(esquemaDeCertificacion_pro));
jsonput(newRow, "tipoDeServicioProducto",commerce.comRule(tipoServicioPPS));
jsonput(newRow, "vigenciaDeLaCertificacin",commerce.comRule(vigenciaDeLaCertificacin_pro));
jsonput(newRow, "tipoDeAcreditacin",commerce.comRule(tipoDeAcreditacion_pro));
jsonput(newRow, "naceP",commerce.comRule(naceProducto));
jsonarrayappend(parametrosProducto, newRow);

result = result + "|"+_document_number+"~parametrosProducto~" + jsonarrayrefid(parametrosProducto) + "|";

return result;