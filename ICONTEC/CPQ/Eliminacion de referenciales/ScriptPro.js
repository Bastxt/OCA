tSsize = jsonarraysize(parametrosProducto);
size = range(tSsize);
c =0;
indexC = -1;

for val in size{
    //print("Valor rango: "+string(val));
    row = jsonarrayget(parametrosProducto, val, "json");
    lAct = jsonget(row,"nLinea","integer");
    //print("numero de linea actual: "+string(lACt));
    
    if(lACt == numeroDeLineaEl and indexC == -1){
        //se elimina linea usando el index encontrado
        indexC = c;
        //print("index encontrado: "+string(c));
    }
    c = c+1;
}

if(indexC <> -1){
    jsonarrayremove(parametrosProducto, indexC);
}

res = _document_number + "~parametrosProducto~" + jsonarrayrefid(parametrosProducto) + "|";

return res;