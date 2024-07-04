var projctdiv = document.getElementById("projcte");
for (let i = 0; i < projcts.length; i++) {
    var projct = projcts[i];

    // div
    var pdiv = document.createElement("div");
    var divstyle = document.createAttribute("style");
    divstyle.value = "display: inline-block; width: 300px; margin: 10px; text-align: center";
    pdiv.setAttributeNode(divstyle);

    // h3
    var titel = document.createElement("h3");
    var h3text = document.createTextNode(projct.titele);
    titel.appendChild(h3text);

    // p
    var p = document.createElement("p");
    var ptext = document.createTextNode(projct.description);
    p.appendChild(ptext);

    // img
    var img = document.createElement("img");
    var imgsrc = document.createAttribute("src");
    imgsrc.value = projct.img;
    img.setAttributeNode(imgsrc);
    var imgstyle = document.createAttribute("style");
    imgstyle.value = "width: 180px; height: 100px;";
    img.setAttributeNode(imgstyle);

    // append to div
    pdiv.appendChild(titel);

    pdiv.appendChild(img);
    pdiv.appendChild(p);

    // append to parent div
    projctdiv.appendChild(pdiv);
}