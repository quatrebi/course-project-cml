<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/OUR_WORK">
  <section id="our_work">
    <xsl:for-each select="CARD">
      <div class="card">
        <span></span>
        <div class="img-box">
          <img>
            <xsl:attribute name="src">
              <xsl:value-of select="IMG/SRC"/>
            </xsl:attribute>
            <xsl:attribute name="alt">
              <xsl:value-of select="IMG/ALT"/>
            </xsl:attribute>
          </img>
        </div>
        <div class="content">
          <div>
            <h2><xsl:value-of select="TITLE"/></h2>
            <p><xsl:value-of select="CONTENT"/></p>
          </div>
        </div>
      </div>
    </xsl:for-each>
  </section> 
</xsl:template>

</xsl:stylesheet>