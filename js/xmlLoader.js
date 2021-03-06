let xhttp;

function loadXMLDocument (filename) {
    /*
    *       Загружаем XML либо XSLT документ...
    *   через XHTTPRequest либо ActiveXObject...
    *   и возвращаем его в виде результата функции.
    */
    xhttp = window.ActiveXObject ? new ActiveXObject("Msxml2.XMLHTTP") : new XMLHttpRequest();
    xhttp.open("GET", filename, false);
    xhttp.setRequestHeader("Content-type", "text/xml");
    try { xhttp.responseType = "ms-stream"; } catch (err) {}
    xhttp.send();
    return xhttp.responseXML;
}

function applyXSLTtoXML (xmlName, xsltName) {
    /*
    *       Проверяем переданные аргументы
    */
    if (typeof xmlName == "string") {
        if (xmlName.isArray) xsltName = xmlName[1], xmlName = xmlName[1];
        else if (xsltName == undefined) xsltName = xmlName;
        var xml = loadXMLDocument(`xml/${xmlName}.xml`);
    } else xml = xmlName;

    /*
    *       С помощью XSLTProccesor либо метода transformNode()..
    *   применяем таблицу стилей XSLT r XML-документу
    */
    try {
        let xslt = loadXMLDocument(`xml/xslt/${xsltName}.xslt`);
        if (window.ActiveXObject || xhttp.responseType === "ms-stream") {
            return xml.transformNode(xslt);
        }
        else if (document.implementation && document.implementation.createDocument) {
            let xsltProc = new XSLTProcessor();
            xsltProc.importStylesheet(xslt);
            return xsltProc.transformToFragment(xml, document);
        }
    } catch { return xml; }
}

function mergeXMLs (mainFile, mergeFiles = []) {
    /*
    *      Объединяем несколько XML-документов в один.
    *   Примяняем к каждому документу таблицы стилей XSLT.
    */
    let xml = loadXMLDocument(`xml/${mainFile}.xml`);
    mergeFiles.forEach(function (mFile) {
    if (typeof mFile == "object") {
        var node = mFile[1].toUpperCase(), mFile = mFile[0];
    }
    let mXML = applyXSLTtoXML(mFile);
    xml.querySelector(mXML.documentElement.tagName).innerHTML =
        (node ? mXML.querySelector(node).innerHTML : mXML.documentElement.innerHTML);
    });
    return applyXSLTtoXML(xml, mainFile);
}