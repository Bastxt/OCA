<style>
Variable { color: Orange }
Rule { color: Purple }
Important { color: Green }
</style>
# Gobierno campos a nivel de linea para Producto

### Requerimiento:
Basados en la sesión del día de viernes para los referenciales que están a nivel de linea en Producto se requiere que:

1. Cuando el ejecutivo este creando la cotización pueda agregar un referencial diligenciando cualquiera o todos los 8 campos disponibles
2. Cuando se envié a mesa de ayuda la persona puede seleccionar y modificar la información agregada previamente por el ejecutivo si aplica, en caso de que el ejecutivo no haya llenado ningún campo debe poder agregar un referencial.
3. Cuando la cotización quede en estado de Aceptado por mesa de ayuda el ejecutivo no puede modificar la información de referenciales.

Basados en lo anterior tanto el ejecutivo como la persona de la mesa de ayuda tiene gobierno sobre los 8 campos que están actualmente.
_______________________
### Analisis:
Vemos la opcion de crear una seccion de actualizacion de exclusiva para 