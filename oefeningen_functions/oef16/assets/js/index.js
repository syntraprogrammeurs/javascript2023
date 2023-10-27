// Functie die controleert of een getal een Armstrong-nummer is
function controleerArmstrong() {
    // Haal het eindgetal uit het invoerveld
    var eindgetal = parseInt(document.getElementById('eenGetal').value, 10);

    // Vind het resultaat element
    var resultaatElement = document.getElementById('resultaat');

    // Array om Armstrong-getallen op te slaan
    var armstrongGetallen = [];

    // Loop door alle getallen van 1 tot het opgegeven eindgetal
    for (var i = 0; i <= eindgetal; i++) {
        // Converteer het getal naar een string om de lengte te krijgen
        var numStr = String(i);
        var lengte = numStr.length;

        // Initialiseer de som van de machten van de cijfers op nul
        var somMachten = 0;

        // Loop door elk cijfer in het getal
        for (var j = 0; j < lengte; j++) {
            // Converteer het cijfer terug naar een getal en bereken de macht
            var cijfer = parseInt(numStr[j], 10);
            var macht = Math.pow(cijfer, lengte);

            // Voeg de macht toe aan de som
            somMachten += macht;
        }

        // Controleer of de som van machten gelijk is aan het oorspronkelijke getal
        if (somMachten === i) {
            armstrongGetallen.push(i);
        }
    }

    // Update de tekst van het resultaat element
    if (armstrongGetallen.length > 0) {
        resultaatElement.textContent = 'Armstrong getallen: ' + armstrongGetallen.join(', ');
    } else {
        resultaatElement.textContent = 'Geen Armstrong getallen gevonden';
    }
}
