//pendiente logica para facturacion parcial
//comportamiento para reintegros
//comportamiento para patrocinio
Print("Script de envio de orden");
Print("===================================");
chg_dict = dict("string");
payload = dict("string");
xpath = string[];
Loc_Template = "";
tNum = "";


date_c = split(datetostr(getdate(), "yyyy-MM-dd HH:mm:ss"), " "); //modificacion de fecha de orden
str_date = date_c[0] + "T" + date_c[1];
ship = commerce.getShip("getShip", "getShip", accountID_t);
//cou  = commerce.getCou("getCou", "getCou", accountID_t);
cou = commerce.getCouB("getCou", "getCou", accountID_t, get(ship, "AddressId"));
//payt = commerce.getPay("getPay", "getPay", accountID_t);
//cont = commerce.getCon("getCon", "getCon", accountID_t);
pers = commerce.getPer("getPer", "getPer", accountID_t);
print(pers);

//recuperar facturacion parcial

if (facturacionParcial){
    tempFPar = jsonarrayget(datosFacturacion, jsonarraysize(datosFacturacion) - 1, "json");
    tNum = jsonget(tempFPar, "DePedido", "string");
}
else{
   tNum = transactionID_t;   
}

//HEADER
put(chg_dict, "TRN_NUM", tNum);                            //numero de transaccion
put(chg_dict, "PAR_NAME", customerName);                              //nombre de cliente o party name
put(chg_dict, "CURR_CODE", currency_t);                               //codigo de moneda
put(chg_dict, "DATE", str_date);                                      //fecha de generacion de orden
put(chg_dict, "L_BUSS_NAME", businessUnit);   //nombre de compañia cliente

put(chg_dict, "USER", owner_t);                                       //propietarioa de cotización
put(chg_dict, "INS", opportunityName_t);                              //el campo shipping instructions se pobla con nombre de oportunidad
put(chg_dict, "PO_NUM", ordenDeCompra);                       //numero que tomara la orden 
put(chg_dict, "OWN_RES_P", ownerResourcePartyId);                    //party id recurso

put(chg_dict, "OBS", observacionesOrden);                            //observaciones o aclaraciones acerca de la orden
put(chg_dict, "FNAME", _transaction_customer_t_first_name);           //nombre contacto
put(chg_dict, "LNAME", _transaction_customer_t_last_name);            //apellido contacto  

put(chg_dict, "SHIP_PHONE", numeroContacto);                          //numero de contacto
put(chg_dict, "SHIP_TO", get(ship, "AddressId"));
put(chg_dict, "BILL_TO", get(cou, "SiteUseId"));
put(chg_dict, "PAY_TER", paymentTerms_t);                             //Payment terms
put(chg_dict, "CONTACT_NAME", customerContactName);

d_keys = keys(chg_dict);

if (tipoDeOrden == "simple") {
    Loc_Template = util.getTemplateLocation("cre_order", "simple");
    details = util.getIntegrationDetails("cre_order");
}
elif(tipoDeOrden == "integrada"){
    Loc_Template = util.getTemplateLocation("cre_order", "integrada");
    details = util.getIntegrationDetails("cre_order");
}
elif(tipoDeOrden == "combinada"){
    Loc_Template = util.getTemplateLocation("cre_order", "combinada");
    details = util.getIntegrationDetails("cre_order");
}

for key in d_keys {
    put(payload, key, get(chg_dict, key));
}

fTemplate = applytemplate(Loc_Template, payload);
res = util.create_order(fTemplate,"cre_order","cre_order");
print(fTemplate);

return res;