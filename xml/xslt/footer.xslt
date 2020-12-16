<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/FOOTER">
    <footer>
      <xsl:for-each select="LIST">
        <ul>
          <h3><xsl:value-of select="TITLE"/></h3>
          <xsl:for-each select="LABEL/a">
            <li>
              <a href="{@href}">
                <xsl:value-of select="."/>
              </a>
            </li>
          </xsl:for-each>
        </ul>
      </xsl:for-each>
      <h4><xsl:value-of select="COPYRIGHT" disable-output-escaping="yes"/></h4>
  </footer>
</xsl:template>

</xsl:stylesheet>