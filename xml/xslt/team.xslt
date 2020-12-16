<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:variable name="lowercase" select="'abcdefghijklmnopqrstuvwxyz'" />
<xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />

<xsl:template match="/TEAM">
  <section id="team">
    <xsl:for-each select="CARD">
      <div class="card">
        <div class="content">
          <div class="img-box">
            <img src="img/{IMG/SRC}" alt="{IMG/ALT}"/>
          </div>
          <h2>
            <xsl:value-of select="FULLNAME"/>
            <span><xsl:value-of select="POST"/></span>
          </h2>
        </div>
        <ul class="social">
          <xsl:for-each select="SOCIAL">
            <li style="--t:{position()}">
              <a href="{@href}">
                <i class="fab fa-{.}"></i>
              </a>
            </li>
          </xsl:for-each>
        </ul>
      </div>
    </xsl:for-each>
  </section>
</xsl:template>

</xsl:stylesheet>