result = "";
newRow = json();
newLine = 0;

refProd = parametrosProducto;
sizepp = jsonarraysize(parametrosProducto);

if(sizepp > 0){
    row = jsonarrayget(parametrosProducto, sizepp-1, "json");
    lAct = jsonget(row,"nLinea","integer");    
    newLine = lAct+1;
}
else{ 
    newLine = 1;
}

//linea sistema de Producto<<<
jsonput(newRow, "nLinea",sizepp + 1);
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