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
rowDel = false;
success = false;
newRow = json();
servTemp = 0;
contIndex = dict("integer");

if (tSsize <> 0) {
    for val in size{
        row = jsonarrayget(totalesPorServicio, val, "json");
        for k in index{
            if (k <> "") {
                print(jsonget(row, "servicio") + " == " + k);
                if (jsonget(row, "servicio") == k) {
                    jsonput(row, "total", get(resTotalesSer, k));
                    //se encontro registro
                    success = true;
                    print("se encontro");
                }
                else {
                    if (success <> true) {
                        rowDel = true;
                        print("se debe eliminar");
                        servTemp = jsonget(row, "_row_number", "integer");
                    }
                }
            }
        }
        success = false;
        if (rowDel == true) {
            put(contIndex, indexC, indexC);
        }
        indexC = indexC + 1;
        rowDel = false;
    }
    ret = ret + "|1~totalesPorServicio~" + jsonarrayrefid(totalesPorServicio) + "|";
    indexC = 0;

    //elementos a eliminar
    cISize = keys(contIndex);

    //ciclo de eliminacion
    for dl in cISize{
        jsonarrayremove(totalesPorServicio, atoi(dl));
    }

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
            jsonput(newRow, "servicio", k);
            jsonput(newRow, "total", get(resTotalesSer, k));
            jsonarrayappend(totalesPorServicio, newRow);
        }
    }
    ret = ret + "|1~totalesPorServicio~" + jsonarrayrefid(totalesPorServicio) + "|";
}

//busqueda inversa para creacion
for k in index{
    if (k <> "") {
        for val in size{
            row = jsonarrayget(totalesPorServicio, val, "json");
            if (jsonget(row, "servicio") == k) {
                print("crear registro");
            }
        }
    }
}

return ret;