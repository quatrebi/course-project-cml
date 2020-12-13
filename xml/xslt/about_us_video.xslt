<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/ABOUT_US_VIDEO">
  <section id="about_us_video">
    <xsl:for-each select="VIDEO">
      <video autoplay="" muted="" loop="" playsinline="">
        <xsl:attribute name="src">
          <xsl:value-of select="SRC"/>
        </xsl:attribute>
        <xsl:attribute name="type">
          <xsl:value-of select="TYPE"/>
        </xsl:attribute>
        <xsl:value-of select="ERROR"/>
      </video>
    </xsl:for-each>
  </section>
</xsl:template>

</xsl:stylesheet>