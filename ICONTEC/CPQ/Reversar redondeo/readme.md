
# Incidencia sopbre totales en propuesta SIA
## Tareas a ejecutar:
-   Se realizara reversion del redondeo en las funciones y formulas
-   se generara un campo tipo matriz que almacenara los totales por servicio
-   se creara una funcion personalizada que calculara los totales y entregara un diccionaro con los valores requeridos.
-   se añadira una estructura al boton guardar que permitira insertar, actualizar o eliminar los registros del campo tipo matriz que contendra los totalizados por servicio de la cotizacion.
- se añadira una modificacion de la estructura acterior para realizar el mismo proceso sobre el boton de generacion de propuesta para garantizar la actualizacion de los datos antes de ejecutar esta accion.
- se creara una estructura en XSL (Template) que entrege el total del servicio a la estructura que genera las tablas por servicio.
## Reversion de redondeo
Como primera tarea para este requerimiento se elimina redondeo en los campos que realizan calculos, esto debido a los inconvenientes entre facturacion y cotizacion.

## Totales por Servicio

Se contruye una estructura que permita insertar, actualizar o eliminar sobre un campo tipo matriz que contendra el totalizados por servicio de la cotizacion.
```js
//extrae el listado sumarizado por servicio
indexC = 0;     //indice numerico
success = false;    //establece el estado de busqueda
resTotalesSer = commerce.cargarTotalesPorServicio();    //retorna los totales por servicio

tSsize = jsonarraysize(totalesPorServicio); //obtiene el tamaño de la matriz totalesPorServicio
size = range(tSsize);   //se genera un rango con el tamaño de la matriz

//si existen registros se actualiza, si no se crean
if (tSsize <> 0) {
    //actualizacion
    for val in size{
        row = jsonarrayget(totalesPorServicio, val, "json");    //se obtienen los valores del registro actual en la iteracion
        index = keys(resTotalesSer);    //se mapean las llaves del registro

        //se iteran las llaves
        for k in index{
            //si la llave es vacia no te toma en cuenta
            if (k <> "") {
                // se condiciona a que cada servicio se actualice con su correspondiente total
                if(jsonget(row, "servicio") == k){
                    jsonput(row, "total",get(resTotalesSer, k));
                    success = true;
                }
            }
            // se genera incremento para llevar indice numerico
            indexC = indexC + 1;
        }
        // si no se encuentra coincidencia en la funcion de sumarizacion se elimina
        if(success == false){
            jsonarrayremove(totalesPorServicio, index);

        }
        indexC = 0;
    }
    ret = ret + "|1~totalesPorServicio~" + jsonarrayrefid(totalesPorServicio) + "|";
}
else {
    //cuando no existen registros se deben crear en la tabla
    index = keys(resTotalesSer);

    for k in index{
        if (k <> "") {
            jsonput(newRow, "servicio", k);
            jsonput(newRow, "total", get(resTotalesSer, k));
            jsonarrayappend(totalesPorServicio, newRow);
        }
    }

    ret = ret + "|1~totalesPorServicio~" + jsonarrayrefid(totalesPorServicio) + "|";
}
```