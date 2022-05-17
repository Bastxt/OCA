//funcion de carga de lineas adecuada a produccion

res = "";

datosRef = jsonarrayget(parametrosProducto, numeroDeLinea - 1, "json");
print(datosRef);

res = res + _document_number + "~referencialCertificacin_pro~" + jsonget(datosRef, "referencialDeCertificacin", "string") + "|";
res = res + _document_number + "~procesoOServicioACertificar_pro~" + jsonget(datosRef, "procesoOServicioACertificar", "string") + "|";
res = res + _document_number + "~esquemaDeCertificacion_pro~" + jsonget(datosRef, "esquemaDeCertificacin", "string") + "|"; 
res = res + _document_number + "~vigenciaDeLaCertificacin_pro~" + jsonget(datosRef, "vigenciaDeLaCertificacin", "string") + "|";
res = res + _document_number + "~tipoDeServicoProductopro~" + jsonget(datosRef, "tipoDeServicioProducto", "string") + "|";
res = res + _document_number + "~tipoDeAcreditacion_pro~" + jsonget(datosRef, "tipoDeAcreditacin", "string") + "|";
res = res + _document_number + "~naceProducto~" + jsonget(datosRef, "naceP", "string") + "|";
res = res + _document_number + "~iCS~" + jsonget(datosRef, "iCS_pro", "string") + "|";
res = res + _document_number + "~divisinNace~" + jsonget(datosRef, "divisinNaceL", "string") + "|";

return res;