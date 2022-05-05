
# Reunion EAFIT 05/05/22

Se realiza envio de servicio desde SOAP UI confirmando el funcionamiento de:

*   url: https://ccaz.fa.us2.oraclecloud.com:443/crmService/OpportunityService?WSDL
*   metodo: mergeOpportunity

##  Payload BUS de integraciones:

```XML
<soapenv:Body xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
    <ns3:mergeOpportunity xmlns:ns3="http://xmlns.oracle.com/pcbpel/adapter/osc/IntegracionesEafit/Oportunidad/ActualizarOportunidad/types">
        <ns3:opportunity>
            <ns4:PrimaryOrganizationId xmlns:ns4="http://xmlns.oracle.com/apps/sales/opptyMgmt/opportunities/opportunityService/">300000002408786</ns4:PrimaryOrganizationId>
            <ns4:SalesStageId xmlns:ns4="http://xmlns.oracle.com/apps/sales/opptyMgmt/opportunities/opportunityService/">300000002469241</ns4:SalesStageId>
            <ns4:Name xmlns:ns4="http://xmlns.oracle.com/apps/sales/opptyMgmt/opportunities/opportunityService/">CE-601213-2022-2-POS12801</ns4:Name>
            <ns4:OptyId xmlns:ns4="http://xmlns.oracle.com/apps/sales/opptyMgmt/opportunities/opportunityService/">300000052250241</ns4:OptyId>
            <ns4:OwnerResourcePartyId xmlns:ns4="http://xmlns.oracle.com/apps/sales/opptyMgmt/opportunities/opportunityService/">300000017188527</ns4:OwnerResourcePartyId>
            <ns4:KeyContactId xmlns:ns4="http://xmlns.oracle.com/apps/sales/opptyMgmt/opportunities/opportunityService/">300000052244027</ns4:KeyContactId>
            <ns4:EffectiveDate xmlns:ns4="http://xmlns.oracle.com/apps/sales/opptyMgmt/opportunities/opportunityService/">2022-05-04-05:00</ns4:EffectiveDate>
            <ns4:EAFIT_TipoPublico_c xmlns:ns4="http://xmlns.oracle.com/apps/sales/opptyMgmt/opportunities/opportunityService/">PERSONA</ns4:EAFIT_TipoPublico_c>
            <ns4:EAFIT_AsistioAExamen_c xmlns:ns4="http://xmlns.oracle.com/apps/sales/opptyMgmt/opportunities/opportunityService/">false</ns4:EAFIT_AsistioAExamen_c>
            <ns4:EAFIT_AsistioAEntrevista_c xmlns:ns4="http://xmlns.oracle.com/apps/sales/opptyMgmt/opportunities/opportunityService/">false</ns4:EAFIT_AsistioAEntrevista_c>
            <ns4:EAFIT_FechaDeInscripcion_c xmlns:ns4="http://xmlns.oracle.com/apps/sales/opptyMgmt/opportunities/opportunityService/">2022-05-02T12:19:22.986334-05:00</ns4:EAFIT_FechaDeInscripcion_c>
            <ns4:EAFIT_TipoDeAdmision_c xmlns:ns4="http://xmlns.oracle.com/apps/sales/opptyMgmt/opportunities/opportunityService/">Estudios Primera Vez</ns4:EAFIT_TipoDeAdmision_c>
        </ns3:opportunity>
    </ns3:mergeOpportunity>
</soapenv:Body>
```

___________


##  Payload Estandar:

```XML
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:typ="http://xmlns.oracle.com/apps/sales/opptyMgmt/opportunities/opportunityService/types/"
    xmlns:opp="http://xmlns.oracle.com/apps/sales/opptyMgmt/opportunities/opportunityService/"
    xmlns:rev="http://xmlns.oracle.com/apps/sales/opptyMgmt/revenues/revenueService/"
    xmlns:not="http://xmlns.oracle.com/apps/crmCommon/notes/noteService"
    xmlns:not1="http://xmlns.oracle.com/apps/crmCommon/notes/flex/noteDff/"
    xmlns:rev1="http://xmlns.oracle.com/oracle/apps/sales/opptyMgmt/revenues/revenueService/"
    xmlns:act="http://xmlns.oracle.com/apps/crmCommon/activities/activitiesService/">
    <soapenv:Header/>
    <soapenv:Body>
        <typ:mergeOpportunity>
            <typ:opportunity>
                <opp:PrimaryOrganizationId>300000002408786</opp:PrimaryOrganizationId>
                <opp:SalesStageId>300000002469241</opp:SalesStageId>
                <opp:Name>CE-601213-2022-2-POS12801</opp:Name>
                <opp:OptyId>300000052250241</opp:OptyId>
                <opp:OwnerResourcePartyId >300000017188527</opp:OwnerResourcePartyId>
                <opp:KeyContactId>300000052244027</opp:KeyContactId>
                <opp:EffectiveDate>2022-05-04-05:00</opp:EffectiveDate>
                <opp:EAFIT_TipoPublico_c>PERSONA</opp:EAFIT_TipoPublico_c>
                <opp:EAFIT_AsistioAExamen_c>false</opp:EAFIT_AsistioAExamen_c>
                <opp:EAFIT_AsistioAEntrevista_c>false</opp:EAFIT_AsistioAEntrevista_c>
                <opp:EAFIT_FechaDeInscripcion_c>2022-05-02T12:19:22.986334-05:00</opp:EAFIT_FechaDeInscripcion_c>
                <opp:EAFIT_TipoDeAdmision_c>Estudios Primera Vez</opp:EAFIT_TipoDeAdmision_c>
            </typ:opportunity>
        </typ:mergeOpportunity>
    </soapenv:Body>
</soapenv:Envelope>
```