<style>
Variable { color: #FFFFFF }
Rule { color: Purple }
Important { color: #B80D0D }
</style>

# Correcciones para turismo 


*   Por favor revisar espacios cuansdo se agrega el referencial, según nos indica Eliana está tomando es el nombre de la variable
    
    <Important>**RTA//**</Important> Se ajustan nombres de variable  
_____________

*   Revisar tema logo ICONTEC en la propuesta en la parte de Anexo 1 (cambiar margen) 
    
    <Important>**RTA//**</Important> Se ajusta margen superior
    ![Imagen de muestra](/ICONTEC/CPQ/Revision%20Turismo/margenIcono.png)
_____________

*   En estado “Cotización Creada” no esta saliendo el icono de Borrar referencial
    
    <Important>**RTA//**</Important> se agrega accion de Eliminar a tabla
_____________

*   Referenciales solo marcados como facturable

    <Important>**RTA//**</Important> Se ajusta regla de facturable <Rule>[@document_var_name='transactionLine' and Facturable]</Rule>

    
_____________
