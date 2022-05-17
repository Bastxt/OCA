
//parametros: part_number
conv = 0;
//dateQ = datetostr(getdate(), "yyyy-MM-dd"); //format: 2021-04-13
dateQ = "2021-05-11";
params = "";
convR = 0.0;


//datos webService
details = util.getIntegrationDetails("cre_order");


if(_part_number == "VA2050201"){

    //lanzar consulta de tasa de cambio
    //cabecera WebService
    headers = dict("string");
    put(headers, "Content-Type", "application/json");
    put(headers, "Authorization", "Basic " + encodebase64(get(details, "Username")+":"+get(details, "Password"))); 
    //actualizacion

    url = "https://ehks-test.fa.us2.oraclecloud.com:443/fscmRestApi/resources/11.13.18.05/currencyRates?finder=CurrencyRatesFinder;fromCurrency=EUR,toCurrency="+currency_t+",userConversionType=Corporate,startDate="+dateQ+",endDate="+dateQ;
    result = urldata(url, "GET", headers, params);

    //recuperamos el cuerpo de la respuesta
    msg = get(result, "Message-Body");

    //convertimos la respuesta en formato json
    resJson = json(msg);

    arrjs = jsonget(resJson, "items");
    jsonls = jsonarray(arrjs);

    //cantidad de items
    itemSize = jsonarraysize(jsonls);
    itemrange = range(itemSize);

    for i in itemrange{
        linedt = jsonarrayget(jsonls, i, "json");
        convR = jsonget(linedt, "ConversionRate","float");
    }
    conv = convR;
}
else{
    conv = 0;
}

return conv;