def logMsg = 'Recuerde, Solo puede crear cotizaciones en moneda local o USD'
def sendMsg = false 


switch (PrimaryOrganizationName_transient) {
    case 'BU_IC_COLOMBIA_AR':
        if (CurrencyCode != 'COP' || CurrencyCode != 'USD') {
            sendMsg = true 
            println("moneda equivocada")
        }
        else{
            sendMsg = false
            println("moneda correcta")
        }
    break
    case 'BU_IC_CHILE':
        if (CurrencyCode != 'CLP' || CurrencyCode != 'USD') {
            sendMsg = true
        }
        else{
            sendMsg = false
        }
    break
    case 'BU_IC_ECUADOR':
        if (CurrencyCode != 'USD') {
            logMsg = 'Recuerde, Solo puede crear cotizaciones en USD'
            sendMsg = true
        }
        else{
            sendMsg = false
        }
    break
    case 'BU_IC_GUATEMALA':
        if (CurrencyCode != 'GTQ' || CurrencyCode != 'USD') {
            logMsg = 'Recuerde, Solo puede crear cotizaciones en GTQ - USD'
            sendMsg = true
        }
        else{
            sendMsg = false
        }
    break
    case 'BU_IC_HONDURAS':
        if (CurrencyCode != 'HNL' || CurrencyCode != 'USD') {
            sendMsg = true
        }
        else{
            sendMsg = false
        }
    break
    case 'BU_IC_PERU':
        if (CurrencyCode != 'PEN' || CurrencyCode != 'USD') {
            sendMsg = true
        }
        else{
            sendMsg = false
        }
    break
    case 'BU_IC_SALVADOR':
        if (CurrencyCode != 'SVC' || CurrencyCode != 'USD') {
            sendMsg = true
        }
        else{
            sendMsg = false
        }
    break
    default: 
        sendMsg = false
    break
}


if(sendMsg == true){
    throw new oracle.jbo.ValidationException(logMsg)
}
