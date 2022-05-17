<!--SUMARIZACION PARA BLOQUE DE SERVICIO -->
<xsl:template name="totalSer">
    <xsl:param name="servicio" />
    <xsl:for-each select="/transaction/data_xml/document[@document_var_name='transactionLine' and not(fase='Viaticos') and tipoDeEsquema = 'simple' and facturable = 'true' and reintegro = 'noaplica' and item_l/_part_custom_field2 = $servicio]">
        <xsl:variable name="tempVal" select="sum(netAmount_l)"/>
    </xsl:for-each>

    <value-of select="$tempVal"/>
</xsl:template>