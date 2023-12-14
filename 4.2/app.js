function rekentafel(multiplier) {
    var container = document.getElementById("table-container");
    var tavelHTML = "<h2>Tafel van " + multiplier + "</h2><ul>";
    
    for (var i = 1; i <= 10; i++) {
        tavelHTML += "<li>" + i + " x " + multiplier + " = " + (i * multiplier) + "</li>";
    }

    tavelHTML += "</ul>";
    container.innerHTML = tavelHTML;

    }