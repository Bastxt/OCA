tSsize = jsonarraysize(parametrosTurismo);
size = range(tSsize);
c =0;
indexC = -1;

for val in size{
    //print("Valor rango: "+string(val));
    row = jsonarrayget(parametrosTurismo, val, "json");
    lAct = jsonget(row,"numeroLinea","integer");
    //print("numero de linea actual: "+string(lACt));
    
    if(lACt == numeroDeLineaRT and indexC == -1){
        //se elimina linea usando el index encontrado
        indexC = c;
        //print("index encontrado: "+string(c));
    }
    c = c+1;
}

if(indexC <> -1){
    jsonarrayremove(parametrosTurismo, indexC);
}

res = _document_number + "~parametrosTurismo~" + jsonarrayrefid(parametrosTurismo) + "|";

return res;