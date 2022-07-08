<xsl:variable name="lstRef" select="/transaction/data_xml/document[@document_var_name='transactionLine' and facturable = 'true']/_commerce_array_set_attr_info[@setName='parametrosProducto']/_array_set_row"/>
<xsl:choose>
    <xsl:when test="count($lstRef) != 0">
        <fo:block space_-before="">
            <fo:table width="100%" table-layout="fixed">
                <!--creacion de columna inicial -->
                <fo:table-column border-width="2px" column-width="30%"/>
                <!--creacion de columna inicial -->
                <fo:table-column border-width="2px"/>
                <fo:table-column border-width="2px"/>
                <fo:table-column border-width="2px"/>
                <fo:table-column border-width="2px"/>
                <fo:table-column border-width="2px"/>
                <fo:table-header>
                    <!-- CABECERAS ESTATICAS -->
                    <fo:table-row>
                        <fo:table-cell border="solid 0.4mm black" border-style="solid" background-color="#203864">
                            <fo:block-container height="15%" display-align="center">
                                <fo:block color="#FFFFFF" font-family="sans-serif" font-size="10pt" text-align="center">
                                    Referencial de Certificación
                                </fo:block>
                            </fo:block-container>
                        </fo:table-cell>
                        <fo:table-cell border="solid 0.4mm black" border-style="solid" background-color="#203864">
                            <fo:block-container height="15%" display-align="center">
                                <fo:block color="#FFFFFF" font-family="sans-serif" font-size="10pt" text-align="center">
                                    Servicio a Certificar
                                </fo:block>
                            </fo:block-container>
                        </fo:table-cell>
                        <fo:table-cell border="solid 0.4mm black" border-style="solid" background-color="#203864">
                            <fo:block-container height="15%" display-align="center">
                                <fo:block color="#FFFFFF" font-family="sans-serif" font-size="10pt" text-align="center">
                                    Esquema de Certificación
                                </fo:block>
                            </fo:block-container>
                        </fo:table-cell>
                        <fo:table-cell border="solid 0.4mm black" border-style="solid" background-color="#203864">
                            <fo:block-container height="15%" display-align="center">
                                <fo:block color="#FFFFFF" font-family="sans-serif" font-size="10pt" text-align="center">
                                    Tipo de Servicio Solicitado
                                </fo:block>
                            </fo:block-container>
                        </fo:table-cell>
                        <fo:table-cell border="solid 0.4mm black" border-style="solid" background-color="#203864">
                            <fo:block-container height="15%" display-align="center">
                                <fo:block color="#FFFFFF" font-family="sans-serif" font-size="10pt" text-align="center">
                                    Vigencia de la Certificación
                                </fo:block>
                            </fo:block-container>
                        </fo:table-cell>
                        <fo:table-cell border="solid 0.4mm black" border-style="solid" background-color="#203864">
                            <fo:block-container height="15%" display-align="center">
                                <fo:block color="#FFFFFF" font-family="sans-serif" font-size="10pt" text-align="center">
                                    Tipo de Acreditación
                                </fo:block>
                            </fo:block-container>
                        </fo:table-cell>
                    </fo:table-row>
                </fo:table-header>
                <fo:table-body>
                    <xsl:for-each select="$lstRef">
                        <fo:table-row>
                            <fo:table-cell border="solid 0.4mm black" border-style="solid">
                                <fo:block color="#28324D" font-family="sans-serif" font-size="10pt" text-align="left">
                                    <xsl:call-template name="emptySp">
                                        <xsl:with-param name="val" select="attribute[@var_name='referencialDeCertificacin']" />
                                    </xsl:call-template>
                                </fo:block>
                            </fo:table-cell>
                            <fo:table-cell border="solid 0.4mm black" border-style="solid">
                                <fo:block color="#28324D" font-family="sans-serif" font-size="10pt" text-align="left">
                                    <xsl:call-template name="emptySp">
                                        <xsl:with-param name="val" select="attribute[@var_name='procesoOServicioACertificar']" />
                                    </xsl:call-template>
                                </fo:block>
                            </fo:table-cell>
                            <fo:table-cell border="solid 0.4mm black" border-style="solid">
                                <fo:block color="#28324D" font-family="sans-serif" font-size="10pt" text-align="left">
                                    <xsl:call-template name="emptySp">
                                        <xsl:with-param name="val" select="attribute[@var_name='esquemaDeCertificacin']" />
                                    </xsl:call-template>
                                </fo:block>
                            </fo:table-cell>
                            <fo:table-cell border="solid 0.4mm black" border-style="solid">
                                <fo:block color="#28324D" font-family="sans-serif" font-size="10pt" text-align="left">
                                    <xsl:call-template name="emptySp">
                                        <xsl:with-param name="val" select="attribute[@var_name='tipoDeServicioProducto']" />
                                    </xsl:call-template>
                                </fo:block>
                            </fo:table-cell>
                            <fo:table-cell border="solid 0.4mm black" border-style="solid">
                                <fo:block color="#28324D" font-family="sans-serif" font-size="10pt" text-align="left">
                                    <xsl:call-template name="emptySp">
                                        <xsl:with-param name="val" select="attribute[@var_name='vigenciaDeLaCertificacin']" />
                                    </xsl:call-template>
                                </fo:block>
                            </fo:table-cell>
                            <fo:table-cell border="solid 0.4mm black" border-style="solid">
                                <fo:block color="#28324D" font-family="sans-serif" font-size="10pt" text-align="left">
                                    <xsl:call-template name="emptySp">
                                        <xsl:with-param name="val" select="attribute[@var_name='tipoDeAcreditacin']" />
                                    </xsl:call-template>
                                </fo:block>
                            </fo:table-cell>
                        </fo:table-row>
                    </xsl:for-each>
                </fo:table-body>
            </fo:table>
        </fo:block>
    </xsl:when>
</xsl:choose>