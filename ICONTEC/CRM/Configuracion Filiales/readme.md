# Pasos para cumplir con Filiales

## Configuracion de infolets para Cuotas:
Se realizo la configuracion inicial para Colombia y Honduras debe realizarse para el resto de paises:

-   [ X ] Colombia    
-   [ X ] Honduras    
-   [ X ] Ecuador     
-   [ X ] Chile       
-   [ X ] Peru
-   [ X ] El Salvador
-   [ - ] Guatemala
-   [ - ] Mexico

## Regla adicional para moneda en Oportunidad
se propone crear una regla que informe si la moneda seleccionada corresponde a la filial [modeda local - USD]

## Re Asignacion de infolets
se deben crear de nuevo los infolet que contendran los reportes relacionados a Sales

Listado:
-   [ X ]Facturacion
-   [ X ]Ingresos
-   [ X ]Oportunidades
-   [ X ]Oportunidades por linea de producto
-   [ X ]Citas
-   [ X ]Ganancia de oportunidades
-   [ X ]Ganancia de oportunidades por linea de producto
-   [ X ]Razon de perdidas o Ganancia
-   [ X ]Cumplimiento
-   [ X ]Reporte Ordenes de Venta
-   [ X ]Reporte Fidelizacion

Rutas:

-   [ X ]Facturacion
    >/shared/Custom/Financials/SALES REPORTS ICONTEC/Facturacion General/Reporte facturacion por ejecutivo

-   [ X ]Ingresos
    >/shared/Custom/Financials/SALES REPORTS ICONTEC/Ingresos General/Reporte Ingresos

-   [ X ]Oportunidades
    >/shared/Custom/Financials/SALES REPORTS ICONTEC/Reporte Oportunidades/DB Oportunidades

-   [ X ]Oportunidades por linea de producto
    >/shared/Custom/Financials/SALES REPORTS ICONTEC/Reporte Oportunidades Por Linea de Producto/DB Oportunidades Linea

-   [ X ]Citas
    >/shared/Custom/Financials/SALES REPORTS ICONTEC/Reporte Citas/DB Cita

-   [ X ]Ganancia de oportunidades
    >/shared/Custom/Financials/SALES REPORTS ICONTEC/Oportunidades Ganancia/DB Oportunidades

-   [ X ]Ganancia de oportunidades por linea de producto
    >/shared/Custom/Financials/SALES REPORTS ICONTEC/Oportunidades Ganancia Linea Producto/DB Oportunidades Ganancia Linea

-   [ X ]Razon de perdidas o Ganancia
    >/shared/Custom/Financials/SALES REPORTS ICONTEC/Oportunidades Motivo P y G/DB Oportunidades Motivo P y G

-   [ X ]Cumplimiento
    >/shared/Custom/Financials/SALES REPORTS ICONTEC/Cumplimiento/Reporte Cumplimiento

-   [ X ]Reporte Ordenes de Venta
    >/shared/Custom/_portal/Reporte Orden de Venta

-   [ X ]Reporte Fidelizacion
    >/shared/Custom/_portal/Reporte de Fidelización



## Configuracion de infolets para Cuotas:
Se realizo la configuracion inicial para Colombia y Honduras debe realizarse para el resto de paises:
|     Filial    |   TRM     |   Code    |    Estado     |
|---------------|-----------|-----------|---------------|
|Colombia       |   3982    |   COP     |       OK      |
|Honduras       |   24.47   |   HNL     |       OK      |
|Ecuador        |   1       |   USD     |       OK      |
|Chile          |   829.44  |   CLP     |       OK      |
|Peru           |   3.75    |   PEN     |       OK      |
|El Salvador    |   439.33  |   SVC     |       OK      |
|Guatemala      |   7.72    |   GTQ     |       OK      |
|Mexico         |   19.61   |   MXN     |       OK      |


## Roles de acceso para infolets

Formula:
#{securityContext.userInRole['PER_EMPLOYEE_ABSTRACT_CUSTOM_ICONTEC_COLOMBIA']}


|           Rol                 |    Codigo                                         |
|-------------------------------|---------------------------------------------------|
|   Employee_ICONTEC_CHILE      |   PER_EMPLOYEE_ABSTRACT_ICONTEC_CHILE             |
|   Employee_ICONTEC_COLOMBIA   |   PER_EMPLOYEE_ABSTRACT_CUSTOM_ICONTEC_COLOMBIA   |
|   Employee_ICONTEC_ECUADOR    |   PER_EMPLOYEE_ABSTRACT_ICONTEC_ECUADOR           |
|   Employee_ICONTEC_GUATEMALA  |   PER_EMPLOYEE_ABSTRACT_ICONTEC_GUATEMALA         |
|   Employee_ICONTEC_HONDURAS   |   PER_EMPLOYEE_ABSTRACT_ICONTEC_HONDURAS          |
|   Employee_ICONTEC_MEXICO     |   PER_EMPLOYEE_ABSTRACT_ICONTEC_MEXICO            |
|   Employee_ICONTEC_SALVADOR   |   PER_EMPLOYEE_ABSTRACT_ICONTEC_SALVADOR          |
|   Employee_ICONTEC_PERU       |   PER_EMPLOYEE_ABSTRACT_CUSTOM_PERU               |


## Creacion de regla para creacion de oportunidades

Unidades de negocion: 
|   Unidad de Negocio   | USD | COP | CLP | GTQ | HNL | PEN | SVC |
|-----------------------| --- | --- | --- | --- | --- | --- | --- |
|   BU_IC_COLOMBIA_AR   |  X  |  X  |     |     |     |     |     |
|   BU_IC_CHILE         |  X  |     |  X  |     |     |     |     |
|   BU_IC_ECUADOR       |  X  |     |     |     |     |     |     |
|   BU_IC_GUATEMALA     |  X  |     |     |  X  |     |     |     |
|   BU_IC_HONDURAS      |  X  |     |     |     |  X  |     |     |
|   BU_IC_PERU          |  X  |     |     |     |     |  X  |     |
|   BU_IC_SALVADOR      |  X  |     |     |     |     |     |  X  |