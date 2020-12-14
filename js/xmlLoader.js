let xhttp;

function loadXMLDocument (filename) {
  xhttp = window.ActiveXObject ? new ActiveXObject("Msxml2.XMLHTTP") : new XMLHttpRequest();
  xhttp.open("GET", filename, false);
  try { xhttp.responseType = "ms-stream"; }
  catch (err) {}
  xhttp.send('');
  return xhttp.responseXML;
}

function getNodeFromXML (filename, parent = "body") {
  getNodeFromXMLwXSLT(filename, filename, parent);
}

function getNodeFromXMLwXSLT (xmlName, xsltName, parent = "body") {
  let xml = loadXMLDocument(`xml/${xmlName}.xml`);
  let xslt =loadXMLDocument(`xml/xslt/${xsltName}.xslt`);

  if (window.ActiveXObject || xhttp.responseType === "ms-stream") {
    document.querySelector(parent).innerHTML += xml.transformNode(xslt);
  }
  else if (document.implementation && document.implementation.createDocument) {
    xsltProc = new XSLTProcessor();
    xsltProc.importStylesheet(xslt);
    document.querySelector(parent).appendChild(xsltProc.transformToFragment(xml, document));
  }
}