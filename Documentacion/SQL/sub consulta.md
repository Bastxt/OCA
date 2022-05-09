

# Ejemplo de subconsulta SQL

```SQL
--se crea sub consulta para la informacion adicional
with sub_con as (
    select cus_id,iva from SUBCONSULTA
)
select
    --  las sub consultas se realizan enviando como parametro el cus_id actual y comparandolo con el registro de la sub consulta por medio del alias "subc" (subc.cus_id)
     inf.item_num
    ,inf.name
    -- se puede adicionar que solo devuelva el primer valor que encuentra para garantizar que la subconsulta no generara mas de 1 registro
    ,sum((select iva from sub_con subc where inf.cus_id = subc.cus_id)) iva
from info inf
group by inf.item_num
```



## DATOS:
_____________

###  SUB CONSULTA(SUBCONSULTA):

|   cus_id  |  Name     |   iva     |
|-----------|-----------|-----------|
|   001     |  pepe     |   1200    |
|   002     |  juanita  |   3500    |

________________

###  CONSULTA GENERAL(GENCONSULTA):
|   N   |   item_num    |       name    |
|-------|---------------|---------------|
|   1   |   VA3002021   |   Seguimiento |
|   2   |   VA3002021   |   Seguimiento |
_________________

###  RESULTADO:
|   item_num    |       name    |   iva     |
|---------------|---------------|-----------|
|   VA3002021   |   Seguimiento |   4700    |
_________________