<style>
Variable { color: #c76224 }
Rule { color: #5524c7 }
Important { color: #c7c724 }
Til { color: #2465c7 }
</style>
# Rentegros IVA - Entrega en TEST

### Resumen solucion
____
Reintegros que sean VA, crear columna valor impuesto, cuando el reintegro sea oculto se agrega al reintegro el valor impuesto reintegro, el cambio aplica a la propuesta



### Pasos
_____
1. Se agrega campo impuesto <Variable>Reintegro (%) </Variable> <Rule>[Rango 0-100]</Rule>
    *   Este campo contendra el porcentaje de impuesto asignado a una linea conciderada reintegro

        ![Paso1](/ICONTEC/CPQ/Reintegros%20IVA/Imagen1.png)


2. Se agrega campo de valor impuesto
    *   Este campo contendra el resultado del calculo del impuesto para las lineas concideradas reintegro
        
        ![Paso2](/ICONTEC/CPQ/Reintegros%20IVA/Imagen2.png)


3. Agregar los campos a la vista (UI)
    *   Se agregar y su edicion es exclusiva para el ejecutivo

        ![Paso3](/ICONTEC/CPQ/Reintegros%20IVA/Imagen2.png)

4. Se Crea funcion deocultamiento para los campos creados

    ```javascript
        system_result = false;
        for system_doc in transactionLine {
            indexExpression1 = (system_doc.valorReintegro <= 0);
            indexExpression2 = (isnull(system_doc.valorReintegro));
            system_result = system_result OR (indexExpression1 OR indexExpression2);
        }
        return system_result;
    ``` 
5. Se agrega regla para sumar IVA de reintegros a los totales de cotizacion
    -   se modifican todas las formulas implicadas en la propuesta de SDG
        *   todos los campos de simple,integrada,combinada