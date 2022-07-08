// NAME: invokeUpsertUpdate
// VARNAME: invokeUpsertUpdate
// PARAM: null
// DEPENDENCY: null
// RETURN: String
chg_dict = dict("string");
apr = "";

put(chg_dict,"CURRENCY",currency_t);
put(chg_dict,"EXTNUM",bs_id);
put(chg_dict,"NAME",transactionID_t);
if(reasignarOportunidad){
    //se crea una funcion de consumo a la REST aPI de OSC
    put(chg_dict,"OPTYID",commerce.opp_get_id(nuevaOportunidad));
}
else{
    put(chg_dict,"OPTYID",opportunityID_t);
}

put(chg_dict,"TOTAL",string(totalFacturable));
put(chg_dict,"CUSID",accountID_t);
put(chg_dict,"VER",string(version_t));
put(chg_dict,"OWNER",createdBy_t);
put(chg_dict,"STA",status_t);
put(chg_dict,"ACT",string(activo));
put(chg_dict,"STEP",currentStepForTesting_tempDisplay_t);
put(chg_dict,"DES",string(descuento));
put(chg_dict,"CONV",tipoDeConvenio);

if(aprobadoPorElCliente){
    apr  = "true";
}
else{
    apr  = "false";
}
put(chg_dict,"APR",apr);


Loc_Template= util.getTemplateLocation("upsert","update");

fTemplate = applytemplate(Loc_Template,chg_dict);

res = commerce.execCallUpsert("upsert",fTemplate);

return res;



// NAME: invokeUpsertUpdate
// VARNAME: invokeUpsertUpdate
// PARAM: null
// DEPENDENCY: null
// RETURN: String
chg_dict = dict("string");
apr = "";

put(chg_dict,"CURRENCY",currency_t);
put(chg_dict,"EXTNUM",bs_id);
put(chg_dict,"NAME",transactionID_t);
if(reasignarOportunidad){
    //se crea una funcion de consumo a la REST aPI de OSC
    put(chg_dict,"OPTYID",commerce.opp_get_id(nuevaOportunidad));
}
else{
    put(chg_dict,"OPTYID",opportunityID_t);
}

put(chg_dict,"TOTAL",string(totalFacturable));
put(chg_dict,"CUSID",accountID_t);
put(chg_dict,"VER",string(version_t));
put(chg_dict,"OWNER",createdBy_t);
put(chg_dict,"STA",status_t);
put(chg_dict,"ACT",string(activo));
put(chg_dict,"STEP",currentStepForTesting_tempDisplay_t);
put(chg_dict,"DES",string(descuento));
put(chg_dict,"CONV",tipoDeConvenio);

if(aprobadoPorElCliente){
    apr  = "true";
}
else{
    apr  = "false";
}
put(chg_dict,"APR",apr);


Loc_Template= util.getTemplateLocation("upsert","update");

fTemplate = applytemplate(Loc_Template,chg_dict);

res = commerce.execCallUpsert("upsert",fTemplate);

return res;