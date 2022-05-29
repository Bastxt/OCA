<!-- Estructura FGV097_SIA caracteristicas-->
<!-- tabla para propuesta FGV097_SIA caracteristicas-->
<fo:region-start extent="2cm"/>
<fo:region-end extent="2cm"/>
<fo:block space-before="">
    <!-- Reembolsables -->
    <xsl:variable name="lstRepTPat" select="sum(/transaction/data_xml/document[@document_var_name='transactionLine' and facturable = 'true' and (starts-with(item_l/_part_number,'INGN') or reintegro != 'noaplica')]/valorReintegro)"/>
    <xsl:variable name="lstRepT" select="sum(/transaction/data_xml/document[@document_var_name='transactionLine' and facturable = 'true' and ((starts-with(item_l/_part_number,'INGN') and reintegro != 'noaplica') or (starts-with(item_l/_part_number,'VA3150302') and reintegro != 'noaplica') or (starts-with(item_l/_part_number,'VA') and reintegro != 'noaplica'))]/valorReintegro)"/>
    <xsl:variable name="lstRep" select="/transaction/data_xml/document[@document_var_name='transactionLine' and facturable = 'true' and ((starts-with(item_l/_part_number,'INGN') and reintegro != 'noaplica') or (starts-with(item_l/_part_number,'VA') and reintegro != 'noaplica'))]"/>
    <xsl:variable name="lstRepCnt" select="count($lstRep)"/>

    <!-- opcion certificacion-->
    <xsl:variable name="opcer" select="//transaction/data_xml/document/opciondecertGG"/>

    <!-- Observaciones-->
    <xsl:variable name="obser" select="//transaction/data_xml/document/observacionesPropuesta"/>

    <!-- Patrocinio -->
    <xsl:variable name="pat" select="//transaction/data_xml/document/dePatrocinio"/>

    <xsl:variable name="sumPat" select="//transaction/data_xml/document/patrocinioTotalLineasSimples"/>

    <!-- Seguimientos -->
    <xsl:variable name="segLCF" select="/transaction/data_xml/document[@document_var_name='transactionLine' and starts-with(fase,'Seguimiento') and not(fase='Viaticos') and tipoDeEsquema = 'simple' and facturable = 'true']"/>
    <xsl:variable name="segLCNF" select="/transaction/data_xml/document[@document_var_name='transactionLine' and starts-with(fase,'Seguimiento') and not(fase='Viaticos') and tipoDeEsquema = 'simple' and facturable = 'false']"/>
    <xsl:variable name="segCantCNF" select="count($segLCNF)"/>
    <xsl:variable name="segCantCF" select="count($segLCF)"/>

    <xsl:variable name="servN" select="/transaction/data_xml/document[@document_var_name='transactionLine' and not(item_l/_part_custom_field2  = preceding:: item_l/_part_custom_field2) and item_l/_part_custom_field2 != '' and not(fase='Viaticos') and facturable = 'true' and not(item_l/_part_number = 'VA3150302')]"/>

    <xsl:for-each select="$servN">
        <xsl:variable name="servAg" select="item_l/_part_custom_field2"/>
        <!-- Totales -->
        <xsl:variable name="sumCantC" select="sum(/transaction/data_xml/document[@document_var_name='transactionLine' and not(fase='Viaticos') and tipoDeEsquema = 'simple' and facturable = 'true' and reintegro = 'noaplica' and item_l/_part_custom_field2 = $servAg]/cantidadItem)"/>
        <xsl:variable name="totalC" select="sum(/transaction/data_xml/document[@document_var_name='transactionLine' and not(fase='Viaticos') and tipoDeEsquema = 'simple' and facturable = 'true' and reintegro = 'noaplica' and item_l/_part_custom_field2 = $servAg]/netAmount_l)"/>
        <xsl:variable name="totalCimp" select="sum(/transaction/data_xml/document[@document_var_name='transactionLine' and not(fase='Viaticos') and tipoDeEsquema = 'simple' and facturable = 'true' and reintegro = 'noaplica' and item_l/_part_custom_field2 = $servAg]/precioNetoImpuesto)"/>
        <xsl:variable name="totalCiva" select="sum(/transaction/data_xml/document[@document_var_name='transactionLine' and not(fase='Viaticos') and tipoDeEsquema = 'simple' and facturable = 'true' and reintegro = 'noaplica' and item_l/_part_custom_field2 = $servAg]/valorImpuesto)"/>

        <fo:block space-before="10px">
            <fo:table width="100%" table-layout="fixed">
                <!--creacion de columna inicial -->
                <fo:table-column border-width="2px" column-width="30%"/>
                <!--creacion de columna inicial -->
                <fo:table-column border-width="2px"/>
                <fo:table-header>
                    <!-- CABECERAS ESTATICAS -->
                    <fo:table-row>
                        <fo:table-cell border="solid 0.4mm black" border-style="solid" background-color="#203864">
                            <fo:block-container height="5%" display-align="center">
                                <fo:block color="#FFFFFF" font-family="sans-serif" font-size="11pt" text-align="center">
                                    CONCEPTO
                                </fo:block>
                            </fo:block-container>
                        </fo:table-cell>
                        <fo:table-cell border="solid 0.4mm black" border-style="solid" background-color="#203864">
                            <fo:block-container height="5%" display-align="center">
                                <fo:block color="#FFFFFF" font-family="sans-serif" font-size="11pt" text-align="center">
                                    DESCRIPCIÓN
                                </fo:block>
                            </fo:block-container>
                        </fo:table-cell>
                    </fo:table-row>
                </fo:table-header>
                <fo:table-body>
                    <fo:table-row>
                        <fo:table-cell border="solid 0.4mm black" border-style="solid">
                            <fo:block color="#28324D" font-family="sans-serif" font-size="11pt" text-align="left">
                                <fo:inline font-weight="bold">Servicio</fo:inline>
                            </fo:block>
                        </fo:table-cell>
                        <fo:table-cell border="solid 0.4mm black" border-style="solid">
                            <fo:block color="#28324D" font-family="sans-serif" font-size="11pt" text-align="left">
                                <xsl:value-of select="$servAg "/>
                            </fo:block>
                        </fo:table-cell>
                    </fo:table-row>
                    <fo:table-row>
                        <fo:table-cell border="solid 0.4mm black" border-style="solid">
                            <fo:block color="#28324D" font-family="sans-serif" font-size="11pt" text-align="left">
                                <fo:inline font-weight="bold">Referencial de Certificación</fo:inline>
                            </fo:block>
                        </fo:table-cell>
                        <fo:table-cell border="solid 0.4mm black" border-style="solid">
                            <fo:block color="#28324D" font-family="sans-serif" font-size="11pt" text-align="left">
                                <!-- <xsl:value-of select="format-number($sumCantC,'#,##0.00')"/> -->
                                <xsl:value-of select="referencialNS"/>
                            </fo:block>
                        </fo:table-cell>
                    </fo:table-row>
                    <fo:table-row>
                        <fo:table-cell border="solid 0.4mm black" border-style="solid">
                            <fo:block color="#28324D" font-family="sans-serif" font-size="11pt" text-align="left">
                                <fo:inline font-weight="bold">Vigencia</fo:inline>
                            </fo:block>
                        </fo:table-cell>
                        <fo:table-cell border="solid 0.4mm black" border-style="solid">
                            <fo:block color="#28324D" font-family="sans-serif" font-size="11pt" text-align="left">
                                <xsl:value-of select="vigenciaINS"/>
                            </fo:block>
                        </fo:table-cell>
                    </fo:table-row>
                </fo:table-body>
            </fo:table>
            <fo:table width="100%" table-layout="fixed">
                <!--creacion de columna inicial -->
                <fo:table-column border-width="2px" column-width="30%"/>
                <!--creacion de columna inicial -->
                <fo:table-column border-width="2px"/>
                <fo:table-column border-width="2px"/>
                <fo:table-column border-width="2px"/>
                <fo:table-column border-width="2px"/>
                <fo:table-header>
                    <!-- CABECERAS ESTATICAS -->
                    <fo:table-row>
                        <fo:table-cell border="solid 0.4mm black" border-style="solid" background-color="#203864">
                            <fo:block-container height="5%" display-align="center">
                                <fo:block color="#FFFFFF" font-family="sans-serif" font-size="11pt" text-align="center">
                                    DESCRIPCIÓN DEL SERVICIO
                                </fo:block>
                            </fo:block-container>
                        </fo:table-cell>
                        <fo:table-cell border="solid 0.4mm black" border-style="solid" background-color="#203864">
                            <fo:block-container height="5%" display-align="center">
                                <fo:block color="#FFFFFF" font-family="sans-serif" font-size="11pt" text-align="center">
                                    CANTIDAD
                                </fo:block>
                            </fo:block-container>
                        </fo:table-cell>
                        <fo:table-cell border="solid 0.4mm black" border-style="solid" background-color="#203864">
                            <fo:block-container height="5%" display-align="center">
                                <fo:block color="#FFFFFF" font-family="sans-serif" font-size="11pt" text-align="center">
                                    VALOR POR SERVICIO
                                </fo:block>
                            </fo:block-container>
                        </fo:table-cell>
                        <fo:table-cell border="solid 0.4mm black" border-style="solid" background-color="#203864">
                            <fo:block-container height="5%" display-align="center">
                                <fo:block color="#FFFFFF" font-family="sans-serif" font-size="11pt" text-align="center">
                                    IVA
                                </fo:block>
                            </fo:block-container>
                        </fo:table-cell>
                        <fo:table-cell border="solid 0.4mm black" border-style="solid" background-color="#203864">
                            <fo:block-container height="5%" display-align="center">
                                <fo:block color="#FFFFFF" font-family="sans-serif" font-size="11pt" text-align="center">
                                    VALOR TOTAL + IVA
                                </fo:block>
                            </fo:block-container>
                        </fo:table-cell>
                    </fo:table-row>
                </fo:table-header>
                <fo:table-body>
                    <xsl:for-each select="/transaction/data_xml/document[@document_var_name='transactionLine' and facturable = 'true' and not(item_l/_part_number = 'VA3150302') and not(reintegro != 'noaplica')]">
                        <xsl:sort select="ciclo"/>
                        <xsl:variable name="indexLC" select="fase"/>
                        <xsl:variable name="indexC" select="faseCiclo"/>
                        <xsl:choose>
                            <xsl:when test="$indexLC!='' and $servAg = item_l/_part_custom_field2">
                                <fo:table-row>
                                    <fo:table-cell border="solid 0.4mm black" border-style="solid">
                                        <fo:block color="#28324D" font-family="sans-serif" font-size="10pt" text-align="left">
                                            <xsl:value-of select="displayedItemName_l "/>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell border="solid 0.4mm black" border-style="solid">
                                        <fo:block color="#28324D" font-family="sans-serif" font-size="10pt" text-align="center">
                                            <xsl:value-of select="format-number(cantidadItem, '#,##0.00')"/>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell border="solid 0.4mm black" border-style="solid">
                                        <fo:block color="#28324D" font-family="sans-serif" font-size="10pt" text-align="center">
                                            <xsl:value-of select="concat('$ ',format-number(translate(netAmount_l,',','.'), '#,##0.00'))"/>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell border="solid 0.4mm black" border-style="solid">
                                        <fo:block color="#28324D" font-family="sans-serif" font-size="10pt" text-align="center">
                                            <xsl:value-of select="concat('$ ',format-number(translate(valorImpuesto,',','.'), '#,##0.00'))"/>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell border="solid 0.4mm black" border-style="solid">
                                        <fo:block color="#28324D" font-family="sans-serif" font-size="10pt" text-align="center">
                                            <xsl:value-of select="concat('$ ',format-number(translate(precioNetoImpuesto,',','.'), '#,##0.00'))"/>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                            </xsl:when>
                        </xsl:choose>
                    </xsl:for-each>
                    <fo:table-row>
                        <fo:table-cell border="solid 0.4mm black" border-style="solid" background-color="#203864">
                            <fo:block-container height="5%" display-align="center">
                                <fo:block color="#FFFFFF" font-family="sans-serif" font-size="10pt" text-align="left">
                                    TOTAL
                                </fo:block>
                            </fo:block-container>
                        </fo:table-cell>
                        <fo:table-cell border="solid 0.4mm black" border-style="solid" background-color="#203864">
                            <fo:block-container height="5%" display-align="center">
                                <fo:block color="#FFFFFF" font-family="sans-serif" font-size="10pt" text-align="center">
                                    <xsl:value-of select="format-number($sumCantC,'#,##0.00')"/>
                                </fo:block>
                            </fo:block-container>
                        </fo:table-cell>
                        <fo:table-cell border="solid 0.4mm black" border-style="solid" background-color="#203864">
                            <fo:block-container height="5%" display-align="center">
                                <fo:block color="#FFFFFF" font-family="sans-serif" font-size="10pt" text-align="center">
                                    <xsl:choose>
                                        <xsl:when test="$pat != 0">
                                            <xsl:value-of select="concat('$ ',format-number(translate($sumPat,',','.'),'#,##0.00'))"/>
                                        </xsl:when>
                                        <xsl:otherwise>
                                            <xsl:choose>
                                                <xsl:when test="count($lstRep) > 0">
                                                    <xsl:call-template name="totalSer">
                                                        <xsl:with-param name="servicio" select = "$servAg" />
                                                    </xsl:call-template>
                                                </xsl:when>
                                                <xsl:otherwise>
                                                    <xsl:call-template name="totalSer">
                                                        <xsl:with-param name="servicio" select = "$servAg" />
                                                    </xsl:call-template>
                                                </xsl:otherwise>
                                            </xsl:choose>
                                        </xsl:otherwise>
                                    </xsl:choose>
                                </fo:block>
                            </fo:block-container>
                        </fo:table-cell>
                        <fo:table-cell border="solid 0.4mm black" border-style="solid" background-color="#203864">
                            <fo:block-container height="5%" display-align="center">
                                <fo:block color="#FFFFFF" font-family="sans-serif" font-size="10pt" text-align="center">
                                    <xsl:call-template name="totalSerIva">
                                        <xsl:with-param name="servicio" select = "$servAg" />
                                    </xsl:call-template>
                                </fo:block>
                            </fo:block-container>
                        </fo:table-cell>
                        <fo:table-cell border="solid 0.4mm black" border-style="solid" background-color="#203864">
                            <fo:block-container height="5%" display-align="center">
                                <fo:block color="#FFFFFF" font-family="sans-serif" font-size="10pt" text-align="center">
                                    <xsl:choose>
                                        <xsl:when test="$pat != 0">
                                            <xsl:value-of select="concat('$ ',format-number(translate($sumPat,',','.'), '#,##0.00'))"/>
                                        </xsl:when>
                                        <xsl:otherwise>
                                            <xsl:choose>
                                                <xsl:when test="count($lstRep) > 0">
                                                    <xsl:call-template name="totalSerIvaTotal">
                                                        <xsl:with-param name="servicio" select = "$servAg" />
                                                    </xsl:call-template>
                                                </xsl:when>
                                                <xsl:otherwise>
                                                    <xsl:call-template name="totalSerIvaTotal">
                                                        <xsl:with-param name="servicio" select = "$servAg" />
                                                    </xsl:call-template>
                                                </xsl:otherwise>
                                            </xsl:choose>
                                        </xsl:otherwise>
                                    </xsl:choose>
                                </fo:block>
                            </fo:block-container>
                        </fo:table-cell>
                    </fo:table-row>
                </fo:table-body>
            </fo:table>
        </fo:block>
    </xsl:for-each>

    <fo:block space-before="20px">
        <xsl:if test="$segCantCNF!=0">
            <fo:block-container height="5%" display-align="center">
                <fo:block color="#28324D" font-family="sans-serif" font-size="10pt" text-align="center">
                    <fo:inline font-weight="bold">SEGUIMIENTOS ANUALES</fo:inline>
                </fo:block>
            </fo:block-container>
            <!-- TABLA DE SEGUIMIENTOS -->
            <fo:block>
                <fo:table width="100%" table-layout="fixed">
                    <!--creacion de columna CONCEPTO -->
                    <fo:table-column border-width="2px"/>
                    <!--creacion de columna VALOR -->
                    <fo:table-column border-width="2px"/>
                    <!--creacion de columna VALOR -->
                    <fo:table-column border-width="2px"/>
                    <!--creacion de columna VALOR -->
                    <fo:table-column border-width="2px"/>
                    <fo:table-header>
                        <!-- CABECERAS ESTATICAS -->
                        <fo:table-row>
                            <fo:table-cell border="solid 0.4mm black" border-style="solid" background-color="#203864">
                                <fo:block-container height="5%" display-align="center">
                                    <fo:block color="#FFFFFF" font-family="sans-serif" font-size="10pt" text-align="center">
                                            CONCEPTO
                                    </fo:block>
                                </fo:block-container>
                            </fo:table-cell>
                            <fo:table-cell border="solid 0.4mm black" border-style="solid" background-color="#203864">
                                <fo:block-container height="5%" display-align="center">
                                    <fo:block color="#FFFFFF" font-family="sans-serif" font-size="10pt" text-align="center">
                                            DÍAS AUDITOR
                                    </fo:block>
                                </fo:block-container>
                            </fo:table-cell>
                            <fo:table-cell border="solid 0.4mm black" border-style="solid" background-color="#203864">
                                <fo:block-container height="5%" display-align="center">
                                    <fo:block color="#FFFFFF" font-family="sans-serif" font-size="10pt" text-align="center">
                                            VALOR SIN IVA
                                    </fo:block>
                                </fo:block-container>
                            </fo:table-cell>
                            <fo:table-cell border="solid 0.4mm black" border-style="solid" background-color="#203864">
                                <fo:block-container height="5%" display-align="center">
                                    <fo:block color="#FFFFFF" font-family="sans-serif" font-size="10pt" text-align="center">
                                            VALOR CON IVA
                                    </fo:block>
                                </fo:block-container>
                            </fo:table-cell>
                        </fo:table-row>
                    </fo:table-header>
                    <!-- BLOQUE DE ITERACION DE LINEAS -->
                    <fo:table-body>
                        <xsl:for-each select="$segLCNF">
                            <xsl:sort select="displayedItemName_l"/>
                            <xsl:variable name="indexL" select="lineID_l"/>
                            <fo:table-row>
                                <fo:table-cell border="solid 0.4mm black" border-style="solid">
                                    <fo:block color="#28324D" font-family="sans-serif" font-size="10pt" text-align="center">
                                        <xsl:value-of select="displayedItemName_l"/>
                                    </fo:block>
                                </fo:table-cell>
                                <fo:table-cell border="solid 0.4mm black" border-style="solid">
                                    <fo:block color="#28324D" font-family="sans-serif" font-size="10pt" text-align="center">
                                        <xsl:value-of select="format-number(cantidadItem, '#,##0.00')"/>
                                    </fo:block>
                                </fo:table-cell>
                                <fo:table-cell border="solid 0.4mm black" border-style="solid">
                                    <fo:block color="#28324D" font-family="sans-serif" font-size="10pt" text-align="center">
                                        <xsl:value-of select="format-number(translate(netAmount_l,',','.'), '#,##0.00')"/>
                                    </fo:block>
                                </fo:table-cell>
                                <fo:table-cell border="solid 0.4mm black" border-style="solid">
                                    <fo:block color="#28324D" font-family="sans-serif" font-size="10pt" text-align="center">
                                        <xsl:value-of select="format-number(translate(precioNetoImpuesto,',','.'), '#,##0.0')"/>
                                    </fo:block>
                                </fo:table-cell>
                            </fo:table-row>
                        </xsl:for-each>
                    </fo:table-body>
                </fo:table>
            </fo:block>
        </xsl:if>
    </fo:block>

    <xsl:choose>
        <xsl:when test="$obser != ''">
            <fo:block space-before="25px" border-width="1mm">
                <fo:table width="100%" table-layout="fixed">
                    <fo:table-column border-width="2px"/>
                    <fo:table-header>
                        <!-- CABECERAS ESTATICAS -->
                        <fo:table-row>
                            <fo:table-cell border="solid 0.4mm black" border-style="solid">
                                <fo:block-container height="auto" display-align="center">
                                    <fo:block font-family="sans-serif" font-size="10pt" text-align="left">
                                    NOTA:
                                        <xsl:value-of select="$obser"/>
                                    </fo:block>
                                </fo:block-container>
                            </fo:table-cell>
                        </fo:table-row>
                    </fo:table-header>
                </fo:table>
            </fo:block>
        </xsl:when>
    </xsl:choose>
</fo:block>