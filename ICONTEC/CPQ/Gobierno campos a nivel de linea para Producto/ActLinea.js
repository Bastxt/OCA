result = "";
newRow = json();

comm = split(_line_item_comment, ",");

//linea sistema de Producto<<<
jsonput(newRow, "referencialDeCertificacin",referencialCertificacin_pro);
jsonput(newRow, "procesoOServicioACertificar",procesoOServicioACertificar_pro);
jsonput(newRow, "esquemaDeCertificacin",esquemaDeCertificacion_pro);
jsonput(newRow, "tipoDeServicioProducto",tipoServicioPPS);
jsonput(newRow, "vigenciaDeLaCertificacin",vigenciaDeLaCertificacin_pro);
jsonput(newRow, "tipoDeAcreditacin",tipoDeAcreditacion_pro);
jsonput(newRow, "naceP",naceProducto);
jsonput(newRow, "iCS_pro",iCS);
jsonput(newRow, "divisinNaceL",divisinNace);
jsonarrayappend(parametrosProducto, newRow);



result = result + "|"+_document_number+"~parametrosProducto~" + jsonarrayrefid(parametrosProducto) + "|";

return result;