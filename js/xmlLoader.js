let xhttp;

function loadXMLDocument (filename) {
  xhttp = window.ActiveXObject ? new ActiveXObject("Msxml2.XMLHTTP") : new XMLHttpRequest();
  xhttp.open("GET", filename, false);
  try { xhttp.responseType = "ms-stream"; }
  catch (err) {}
  xhttp.send('');
  return xhttp.responseXML;
}

function mergeXMLs (mainFile, mergeFiles = []) {
  let xml = loadXMLDocument(`xml/${mainFile}.xml`);
  for (let i = 0; i < mergeFiles.length; i++) {
    let merge = loadXMLDocument(`xml/${mergeFiles[i]}.xml`);
    xml.querySelector(mergeFiles[i].toUpperCase()).outerHTML = merge.documentElement.innerHTML;
  }
  return xml;
}

function getNode (xml, xslt, parent = "body") {
  if (window.ActiveXObject || xhttp.responseType === "ms-stream") {
    document.querySelector(parent).innerHTML += xml.transformNode(xslt);
  }
  else if (document.implementation && document.implementation.createDocument) {
    let xsltProc = new XSLTProcessor();
    xsltProc.importStylesheet(xslt);
    document.querySelector(parent).appendChild(xsltProc.transformToFragment(xml, document));
  }
}

function getNodeFromXML (filename, parent = "body") {
  getNodeFromXMLwXSLT(filename, filename, parent);
}

function getNodeFromXMLwXSLT (xmlName, xsltName, parent = "body") {
  let xml = loadXMLDocument(`xml/${xmlName}.xml`);
  let xslt = loadXMLDocument(`xml/xslt/${xsltName}.xslt`);
  getNode(xml, xslt, parent);
}

function getNodeFromXMLwMerge (mainFile, mergeFiles = [], parent = "body") {
  let xslt = loadXMLDocument(`xml/xslt/${mainFile}.xslt`);
  getNode(mergeXMLs(mainFile, mergeFiles), xslt, parent);
}

function getNodeFromXMLwXSLTwMerge (mainFile, xsltName, mergeFiles = [], parent = "body") {
  let xslt = loadXMLDocument(`xml/xslt/${xsltName}.xslt`);
  getNode(mergeXMLs(mainFile, mergeFiles), xslt, parent);
}