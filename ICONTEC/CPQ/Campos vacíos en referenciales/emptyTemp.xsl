<!--VARIABLE PARA EVALUAR REGISTRO POR ESQUEMA -->
<xsl:template name="emptySp">
    <xsl:param name="val" />
    <xsl:choose>
        <xsl:when test="$val = '-'">
        </xsl:when>
        <xsl:otherwise>
            <xsl:value-of select="$val"/>
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>