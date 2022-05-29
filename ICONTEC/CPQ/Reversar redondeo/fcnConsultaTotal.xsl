<!--SUMARIZACION PARA BLOQUE DE SERVICIO TOTAL-->
<xsl:template name="totalSer">
    <xsl:param name="servicio" />
    <xsl:variable name="baseItem" select="/transaction/data_xml/document[@document_var_name='transaction']/_commerce_array_set_attr_info[@setName='totalesPorServicio']/_array_set_row"/>
    <xsl:for-each select="$baseItem">
        <xsl:variable name="totalV" select="attribute[@var_name='total']"/>
        <xsl:choose>
            <xsl:when test="attribute[@var_name='servicio'] = $servicio">
                <xsl:value-of select="concat('$ ',format-number(translate($totalV,',','.'),'#,##0.00'))"/>
            </xsl:when>
        </xsl:choose>
    </xsl:for-each>
</xsl:template>


<!--SUMARIZACION PARA BLOQUE DE SERVICIO IVA-->
<xsl:template name="totalSerIva">
    <xsl:param name="servicio" />
    <xsl:variable name="baseItem" select="/transaction/data_xml/document[@document_var_name='transaction']/_commerce_array_set_attr_info[@setName='totalesPorServicio']/_array_set_row"/>
    <xsl:for-each select="$baseItem">
        <xsl:variable name="totalV" select="attribute[@var_name='iva']"/>
        <xsl:choose>
            <xsl:when test="attribute[@var_name='servicio'] = $servicio">
                <xsl:value-of select="concat('$ ',format-number(translate($totalV,',','.'),'#,##0.00'))"/>
            </xsl:when>
        </xsl:choose>
    </xsl:for-each>
</xsl:template>

<!--SUMARIZACION PARA BLOQUE DE SERVICIO IVATOTAL-->
<xsl:template name="totalSerIvaTotal">
    <xsl:param name="servicio" />
    <xsl:variable name="baseItem" select="/transaction/data_xml/document[@document_var_name='transaction']/_commerce_array_set_attr_info[@setName='totalesPorServicio']/_array_set_row"/>
    <xsl:for-each select="$baseItem">
        <xsl:variable name="totalV" select="attribute[@var_name='totaliva']"/>
        <xsl:choose>
            <xsl:when test="attribute[@var_name='servicio'] = $servicio">
                <xsl:value-of select="concat('$ ',format-number(translate($totalV,',','.'),'#,##0.00'))"/>
            </xsl:when>
        </xsl:choose>
    </xsl:for-each>
</xsl:template>