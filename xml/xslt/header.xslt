<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/HEADER">
  <header id="header">
    <h1>
      <a href="{TITLE/@LINK}">
        <xsl:value-of select="TITLE"/>
      </a>
    </h1>
    <nav id="header__menu">
      <ul>
        <xsl:for-each select="NAV/BUTTON">
          <li><a>
            <xsl:attribute name="href">
                <xsl:value-of select="LINK"/>
            </xsl:attribute>
            <xsl:value-of select="TITLE"/>
          </a></li>
        </xsl:for-each>
      </ul>
    </nav>
    <div>
      <p><xsl:value-of select="CONTENT/SHORT_DESC"/></p>
      <xsl:if test="CONTENT/LOGO">
        <img>
          <xsl:attribute name="src">
            <xsl:value-of select="CONTENT/LOGO/SRC"/>
          </xsl:attribute>
          <xsl:attribute name="alt">
            <xsl:value-of select="CONTENT/LOGO/ALT"/>
          </xsl:attribute>
        </img>
      </xsl:if>
    </div>
  </header>
</xsl:template>

</xsl:stylesheet>