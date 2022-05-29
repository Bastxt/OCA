lstservicios = dict("float");
valTemp = "";
nameTemp = "";
totalTemp = 0.0;
index = 0;

for line in transactionLine{
    index = index + 1;
    for lined in transactionLine{
        if(lined._part_custom_field2 == line._part_custom_field2 and lined.facturable == true){
            if(lined.reintegro == "noaplica"){
                totalTemp = totalTemp + lined.valorImpuesto; 
            }
        }
    }
    if(line.facturable == true){
        put(lstServicios,line._part_custom_field2,totalTemp);
    }
    totalTemp = 0.0;
}

return lstServicios;






lstservicios = dict("float");
valTemp = "";
nameTemp = "";
totalTemp = 0.0;
index = 0;

for line in transactionLine{
    index = index + 1;
    for lined in transactionLine{
        if(lined._part_custom_field2 == line._part_custom_field2 and lined.facturable == true){
            if(startswith(lined._part_number,"VA") and lined.reintegro <> "noaplica"){
                totalTemp = totalTemp + lined.valorReintegro;    
            }
            else{
                totalTemp = totalTemp + lined.netAmount_l;    
            }
        }
    }
    if(line.facturable == true){
        put(lstServicios,line._part_custom_field2,totalTemp);
    }
    totalTemp = 0.0;
}

return lstServicios;