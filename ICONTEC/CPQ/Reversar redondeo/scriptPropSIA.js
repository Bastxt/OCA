//Func: scriptPropSIA
//Desc: esta funcion actualizara los valores de la tabla de totales tan pronto se genera la propuesta.

ret = "";

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
        for k in index{
            if (k <> "") {
                if (jsonget(row, "servicio") == k and success <> true) {
                    jsonput(row, "total", get(resTotalesSer, k));
                    //se encontro registro
                    success = true;
                    //se almacena index de elemento retornado de la funcion cargarTotalesPorServicio
                    //cuando este coincide con la linea de la matriz
                    contIndex[indexK] = indexK;   
                }
            }
            indexK = indexK + 1;
        }
        if (success == false) {
            jsonarrayremove(totalesPorServicio, val);
        }
        indexC = indexC + 1;
        indexK = 0;
        success = false;
    }
    //ret = ret + "|1~totalesPorServicio~" + jsonarrayrefid(totalesPorServicio) + "|";
    indexC = 0;

    if (indexSize == 0) {
        for val in size{
            jsonarrayremove(totalesPorServicio, val);
        }
    }
    //ret = ret + "|1~totalesPorServicio~" + jsonarrayrefid(totalesPorServicio) + "|";
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
    //ret = ret + "|1~totalesPorServicio~" + jsonarrayrefid(totalesPorServicio) + "|";
}


//busqueda inversa para creacion
succ = false;
index = keys(resTotalesSer);
indexSize = sizeofarray(index);

tSsize = jsonarraysize(totalesPorServicio);
size = range(tSsize);
rCount = 0;

//busca desde el diccionario que contiene el totalizado
//cuando no encuentra coincidencia con la tabla crea este registro
for k in index{
    for fndIndex in contIndex{
        if(k == index[fndIndex] and succ <> true){
            succ = true;
        }
    }
    if(succ == false){
        //creacion de linea si no se encuentra
        newRow = json();
        jsonput(newRow, "servicio", k);
        jsonput(newRow, "total", get(resTotalesSer, k));
        jsonarrayappend(totalesPorServicio, newRow);
    }
    rCount = rCount + 1;
    succ = false;
}
ret = ret + "|1~totalesPorServicio~" + jsonarrayrefid(totalesPorServicio) + "|";

return ret;