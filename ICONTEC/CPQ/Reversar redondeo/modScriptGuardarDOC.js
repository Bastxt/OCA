xpath_c = string[];
xpath_g = string[];
xpath_c[0] = "//ns1:OrderHeaderId";
xpath_g[0] = "//ns1:VersionNumber";
xpath_g[1] = "//ns1:Name";
header = "";
ret = "";
cDate = datetostr(getdate(), "MM/dd/yyyy HH:mm:ss");


if (isnull(vigencia)) { print("Error"); }
else {
    if (currentStepForTesting_tempDisplay_t <> "deleted" and currentStepForTesting_tempDisplay_t <> "Cotización Eliminada") {
        if (header_ID == "null" or header_ID == "") {
            res = commerce.invokeUpsertCreate();
            output = readxmlsingle(res, xpath_c);
            header = get(output, xpath_c[0]);
            if (reasignarOportunidad) {
                oppId = commerce.opp_get_id(nuevaOportunidad);
                ret = ret + "1" + "~" + "opportunityID_t" + "~" + oppId + "|";
            }
        }
        else {
            res = commerce.invokeUpsertGet();

            output = readxmlsingle(res, xpath_g);

            if (version_t == atoi(get(output, xpath_g[0])) AND transactionID_t == get(output, xpath_g[1])) {
                res = commerce.invokeUpsertUpdate();
                header = header_ID;
                if (reasignarOportunidad) {
                    oppId = commerce.opp_get_id(nuevaOportunidad);
                    ret = ret + "1" + "~" + "opportunityID_t" + "~" + oppId + "|";
                }
            }
            else {
                res = commerce.invokeUpsertCreate();
                output = readxmlsingle(res, xpath_c);
                header = get(output, xpath_c[0]);
                if (reasignarOportunidad) {
                    oppId = commerce.opp_get_id(nuevaOportunidad);
                    ret = ret + "1" + "~" + "opportunityID_t" + "~" + oppId + "|";
                }
            }
        }
        ret = ret + "1~header_ID~" + header + "|";

        if (reasignarOportunidad) {
            for line in transactionLine{
                ret = ret + line._document_number + "~customDiscountValue_l~" + string(0) + "|";
                ret = ret + line._document_number + "~customDiscountAmount_l~" + string(0) + "|";
                ret = ret + line._document_number + "~descuentoNeto~" + string(0) + "|";
            }
        }
    }
    if (activo == true) {
        sycn = commerce.sync_app_items("", "", "", "");
    }
    elif(activo == false){
        sycn = commerce.del_item_opp();
    }
}

adjDU = getattachmentdata(adjuntos);
if (contAdjUno == "") { cntcontU = 1; } else { cntcontU = atoi(contAdjUno); }
if (len(get(adjDU, "filecontent", "string")) <> cntcontU) {
    ret = ret + "1~ultimaFechaDeActualizacinU~" + cDate + "|";
    adjtm = len(get(adjDU, "filecontent", "string"));
    ret = ret + "1~contAdjUno~" + string(adjtm) + "|";
}

adjD = getattachmentdata(adjuntosComercial2);
if (contAdjDos == "") { cntcont = 1; } else { cntcont = atoi(contAdjDos); }
if (len(get(adjD, "filecontent", "string")) <> cntcont) {
    ret = ret + "1~ultimaFechaDeActualizacin~" + cDate + "|";
    adjtm = len(get(adjD, "filecontent", "string"));
    ret = ret + "1~contAdjDos~" + string(adjtm) + "|";
}

adjT = getattachmentdata(adjuntosComercial3);
if (contAdjTres == "") { cntcontT = 1; } else { cntcontT = atoi(contAdjTres); }
if (len(get(adjT, "filecontent", "string")) <> cntcontT) {
    ret = ret + "1~ultimaFechaDeActualizacinT~" + cDate + "|";
    adjtm = len(get(adjT, "filecontent", "string"));
    ret = ret + "1~contAdjTres~" + string(adjtm) + "|";
}

adjUT = getattachmentdata(adjuntosUT);
if (contAdjUT == "") { cntcontUT = 1; } else { cntcontUT = atoi(contAdjUT); }
if (len(get(adjUT, "filecontent", "string")) <> cntcontUT) {
    ret = ret + "1~ultimaFechaDeActualizacinUT~" + cDate + "|";
    adjtm = len(get(adjUT, "filecontent", "string"));
    ret = ret + "1~contAdjUT~" + string(adjtm) + "|";
}

ret = ret + "1~trazabilidadDeEstado~" + currentStepForTesting_tempDisplay_t;



//retorna diccionario que tiene los totales
resTotalesSer = commerce.cargarTotalesPorServicio();
index = keys(resTotalesSer);
indexSize = sizeofarray(index);

tSsize = jsonarraysize(totalesPorServicio);
size = range(tSsize);

indexC = 0;
indexK = 0;
rowDel = false;
success = false;
contIndex = integer[];

if (tSsize <> 0) {
    for val in size{
        row = jsonarrayget(totalesPorServicio, val, "json");
        print("linea: " + string(indexC));
        for k in index{
            if (k <> "") {
                if (jsonget(row, "servicio") == k and success <> true) {
                    jsonput(row, "total", get(resTotalesSer, k));
                    //se encontro registro
                    success = true;
                    print("se encontro");
                    //se almacena index de elemento retornado de la funcion cargarTotalesPorServicio
                    contIndex[indexK] = indexK;   
                }
            }
            indexK = indexK + 1;
        }
        if (success == false) {
            print("Eliminar Linea");
        }
        indexC = indexC + 1;
        indexK = 0;
        success = false;
    }
    ret = ret + "|1~totalesPorServicio~" + jsonarrayrefid(totalesPorServicio) + "|";
    indexC = 0;

    if (indexSize == 0) {
        for val in size{
            jsonarrayremove(totalesPorServicio, val);
        }
    }
    ret = ret + "|1~totalesPorServicio~" + jsonarrayrefid(totalesPorServicio) + "|";
}
else {
    index = keys(resTotalesSer);
    for k in index{
        if (k <> "") {
            newRow = json();
            jsonput(newRow, "servicio", k);
            jsonput(newRow, "total", get(resTotalesSer, k));
            jsonarrayappend(totalesPorServicio, newRow);
        }
    }
    ret = ret + "|1~totalesPorServicio~" + jsonarrayrefid(totalesPorServicio) + "|";
}


//busqueda inversa para creacion
succ = false;
index = keys(resTotalesSer);
indexSize = sizeofarray(index);


tSsize = jsonarraysize(totalesPorServicio);
size = range(tSsize);
rCount = 0;

print("===============================");
print(resTotalesSer);
print("===============================");
print("Encontrados");
print(contIndex);
//busca desde la funcion


for k in index{
    for fndIndex in contIndex{
        if(k == index[fndIndex] and succ <> true){
            succ = true;
        }
    }
    if(succ == false){
        print("Crear");
        newRow = json();
        jsonput(newRow, "servicio", k);
        jsonput(newRow, "total", get(resTotalesSer, k));
        jsonarrayappend(totalesPorServicio, newRow);
    }
    //row = jsonarrayget(totalesPorServicio, val, "json");
    //se debe verificar si se encuentra el registro
    //if(findinarray(contIndex, val) == -1){ 
        //print("Eliminar Linea de tabla");
        //jsonarrayremove(totalesPorServicio, val);
    //}
    rCount = rCount + 1;
    succ = false;
}
ret = ret + "|1~totalesPorServicio~" + jsonarrayrefid(totalesPorServicio) + "|";

return ret;