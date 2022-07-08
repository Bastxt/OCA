//NAME: populateLead
//DESCRIPTION:funcion de consulta de lead por nombre para poblar valores de nuevo lead [Cambio Cohorte]
//TEST: CC-16769909-2019-1-CEC4U42005001-EV-EXPEDICIÓN ACADÉMICA Y TECNOLÓGICA SAN FRANCISCO, CALIFORNIA 2019-MEDELLÍN
def lastLead = Name
def contacEx = ""
def docType = ""  
def docNum = ""
def bUnit = ""
def proType = ""
def priProIdA = ""
def priProIdB = ""
def priProIdC = ""
def priProIdD = ""
def newName = ""

if(EAFIT_Cohorte_c != null){
    def vo = newView('Lead')
    def vc = newViewCriteria(vo)
    def vcr = vc.createRow()
    def vci = vcr.ensureCriteriaItem('Name')
    vci.setOperator('=')
    vci.setValue(lastLead)
    vc.insertRow(vcr)
    vo.appendViewCriteria(vc)
    vo.executeQuery()

    while (vo.hasNext()) {
        def currow = vo?.next()
        contacEx = currow.getAttribute('PrimaryContactId')
        docType = currow.getAttribute('EAFIT_TipoDocumentoLead_c')
        docNum = currow.getAttribute('EAFIT_NumeroDocumentoLead_c')
        bUnit = currow.getAttribute('BusinessUnitId')
        proType = currow.getAttribute('ProductType')

        priProIdB = currow.getAttribute('PrimaryProductGroupId')
        priProIdC = currow.getAttribute('PrimaryInventoryItemId')
    }

    

    setAttribute('PrimaryContactId',contacEx)
    setAttribute('EAFIT_TipoDocumentoLead_c',docType)
    setAttribute('EAFIT_NumeroDocumentoLead_c',docNum)
    setAttribute('BusinessUnitId',bUnit)
    setAttribute('ProductType',proType)

    setAttribute('PrimaryProductGroupId',priProIdB)
    setAttribute('PrimaryInventoryItemId',priProIdC)

    newName = docType+"-"+docNum+"-"+EAFIT_Cohorte_c+"-"+ProductGroupDescription;

    setAttribute('Name',newName)
}
else{
    throw new oracle.jbo.ValidationException('Por favor indique la nueva cohorte')
}