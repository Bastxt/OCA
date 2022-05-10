# Cambio de Titulo de Tabla de Seguimientos

Aplica para seguimientos no facturables
propuestas a intervenir: Producto tangible
solucion:

Agregar una condicion en el titulo para modificarlo cuando el seguimiento en su campo ciclo, empiece por el texto "Se

```js
if(startswith(ciclo,"Semestre")){
    titulo = "Seguimiento Semestral"
}
else{ 
    titulo = "Seguimiento Anual"
}
```