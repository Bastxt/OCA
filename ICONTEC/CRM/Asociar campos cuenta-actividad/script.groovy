def diaFacturacion =""
def espRadicacion =""
def vo = newView('OrganizationProfile')
def vc = newViewCriteria(vo)
def vcr = vc.createRow()
def vci = vcr.ensureCriteriaItem('UniqueNameAlias')
vci.setOperator('=')
vci.setValue(AccountName)
vc.insertRow(vcr)
vo.appendViewCriteria(vc)
vo.executeQuery()

while (vo.hasNext()) {
    def currow = vo?.next()
    diaFacturacion = currow.getAttribute('DiaFacturacion_c')
    espRadicacion = currow.getAttribute('EspecificacionesRadicacion_c')
}

setAttribute('DiaFacturacion_c',diaFacturacion)
setAttribute('EspecificacionesRadicacion_c',espRadicacion)