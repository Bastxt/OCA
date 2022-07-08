def secCtx = adf.context.getSecurityContext()
def psIterator = PartySite
psIterator.reset()
def sta = 0
def facturacion = false

while (psIterator.hasNext())
{
    def psrow = psIterator.next()
    //verifica si se cambio algo

    def existingPurposes = psrow?.PartySiteUse
    //itera
    while (existingPurposes.hasNext()) {
        def existingPurpose = existingPurposes.next()
        if (existingPurpose.SiteUseType == 'BILL_TO' || existingPurpose.SiteUseType == 'STATEMENT') {
            facturacion = true
        }
    }

    if (psrow.getPrimaryRowState().isModified()) {
        if (secCtx.isUserInRole('ICO_ADMIN_VENTAS') || secCtx.isUserInRole('DOO_ORDER_MANAGER_JOB_IC_JEFE_CARTERA') || secCtx.isUserInRole('ORA_POZ_SUPPLIER_MANAGER_ABSTRACT')) {
            if (facturacion == false) {
                sta = 1
            }
            else {
                throw new oracle.jbo.ValidationException('No es posible editar la dirección')
            }
        }
        else {
            if (facturacion == false) {
                sta = 1
            }
            else {
                throw new oracle.jbo.ValidationException('No es posible editar la dirección')
            }
        }
    }
    else {
        if (facturacion == false) {
            sta = 1
        }
        else {
            throw new oracle.jbo.ValidationException('No es posible editar la dirección')
        }
    }

    facturacion = false
}

todos los roles mueven el principal
pero no editar
