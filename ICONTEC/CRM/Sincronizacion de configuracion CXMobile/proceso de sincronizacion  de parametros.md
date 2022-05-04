#   Proceso de sincronizacion CX Mobile

1.  se lanza un servicoi web con la siguiente configuacion

    *   se consulta mediante el servicio https://ehks.fa.us2.oraclecloud.com:443/crmUI/appmetadatatokenaccess/applications/com.oraclecorp.internal.cxm.salescloud

    *   su respuesta se almacena y se reenvia usando el siguiente cuerpo de solicitud

        ```json      
        [
            {
                "op": "replace",
                "path": "/",
                "value": {contenido de erspuesta GET}
            }
        ]
        ```