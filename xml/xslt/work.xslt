<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/WORK">
  <section id="our_work">
    <form name="category_selector">
      <input type="radio" id="Featured" name="category" value="Featured" checked=""/>
      <label for="Featured">Featured</label>
      <input type="radio" id="Websites" name="category" value="Websites"/>
      <label for="Websites">Websites</label>
      <input type="radio" id="eCommerce" name="category" value="eCommerce"/>
      <label for="eCommerce">eCommerce</label>
      <input type="radio" id="Apps" name="category" value="Apps"/>
      <label for="Apps">Apps</label>
      <input type="radio" id="UIUX" name="category" value="UIUX"/>
      <label for="UIUX">UI &amp; UX</label>
    </form>
    <xsl:for-each select="CARD">
      <div class="card">
        <xsl:attribute name="category">
          <xsl:for-each select="@*">
            <xsl:value-of select="concat(name(), ' ')"/>
          </xsl:for-each>
        </xsl:attribute>
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